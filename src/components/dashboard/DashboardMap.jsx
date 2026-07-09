import { useEffect, useMemo, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Tooltip,
  useMap,
} from "react-leaflet";

import { ref, onValue } from "firebase/database";

import { realtimeDb } from "../../firebase";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});

const iconeOnline = new L.Icon({

  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [34, 55],

  iconAnchor: [17, 55],

});

const iconeOffline = new L.Icon({

  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [34, 55],

  iconAnchor: [17, 55],

});

function obterIcone(tecnico) {

  return tecnico.online
    ? iconeOnline
    : iconeOffline;

}

function AjustarMapa({ tecnicos }) {

  const map = useMap();

  useEffect(() => {

    const validos = tecnicos.filter(

      t =>

        t.latitude != null &&
        t.longitude != null

    );

    if (validos.length === 0) return;

    if (validos.length === 1) {

      map.setView(

        [

          Number(validos[0].latitude),

          Number(validos[0].longitude),

        ],

        15

      );

      return;

    }

    const bounds = L.latLngBounds(

      validos.map(

        t => [

          Number(t.latitude),

          Number(t.longitude),

        ]

      )

    );

    map.fitBounds(bounds, {

      padding: [60, 60],

    });

  }, [map, tecnicos]);

  return null;

}

export default function DashboardMap() {

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const gpsRef = ref(realtimeDb, "gps");

    const unsubscribe = onValue(gpsRef, snapshot => {

      if (!snapshot.exists()) {

        setTecnicos([]);

        return;

      }

      const dados = snapshot.val();

      const lista = Object.entries(dados).map(

        ([id, tecnico]) => ({

          id,

          ...tecnico,

        })

      );

      setTecnicos(lista);

    });

    return () => unsubscribe();

  }, []);

  const online =
    tecnicos.filter(t => t.online).length;

  const offline =
    tecnicos.length - online;

  const gpsAtivo =
    tecnicos.filter(
      t => t.latitude && t.longitude
    ).length;

  const lista =
    useMemo(

      () =>

        tecnicos.filter(

          t =>

            t.latitude &&
            t.longitude

        ),

      [tecnicos]

    );

  return (

    <div
      style={{

        height:"100%",

        display:"flex",

        flexDirection:"column",

        background:"#FFF",

        borderRadius:24,

        overflow:"hidden",

      }}
    >

      {/* CABEÇALHO */}

      <div
        style={{

          background:
            "linear-gradient(90deg,#0F2D73,#163B94)",

          padding:20,

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

        }}
        >
              <div>

          <div
            style={{
              color:"#FFFFFF",
              fontSize:32,
              fontWeight:900,
            }}
          >
            🛰️ MAPA OPERACIONAL
          </div>

          <div
            style={{
              color:"#CBD5E1",
              marginTop:5,
              fontSize:16,
            }}
          >
            Monitoramento em Tempo Real
          </div>

        </div>

        <div
          style={{
            display:"flex",
            gap:14,
          }}
        >

          <Indicador
            titulo="🟢 Online"
            valor={online}
            cor="#22C55E"
          />

          <Indicador
            titulo="🔴 Offline"
            valor={offline}
            cor="#EF4444"
          />

          <Indicador
            titulo="📡 GPS"
            valor={gpsAtivo}
            cor="#2563EB"
          />

        </div>

      </div>

      {/* MAPA */}

      <div
        style={{
          flex:1,
        }}
      >

        <MapContainer
          center={[-29.1680,-51.1800]}
          zoom={12}
          style={{
            width:"100%",
            height:"100%",
          }}
        >

          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <AjustarMapa
            tecnicos={lista}
          />

          {lista.map((tec)=>(

            <div key={tec.id}>

              <Circle
                center={[
                  Number(tec.latitude),
                  Number(tec.longitude),
                ]}
                radius={100}
                pathOptions={{
                  color:
                    tec.online
                    ? "#22C55E"
                    : "#EF4444",

                  fillColor:
                    tec.online
                    ? "#22C55E"
                    : "#EF4444",

                  fillOpacity:.18,

                  weight:2,
                }}
              />

              <Marker
                position={[
                  Number(tec.latitude),
                  Number(tec.longitude),
                ]}
                icon={obterIcone(tec)}
              >

                <Tooltip
                  permanent
                  direction="top"
                  offset={[0,-40]}
                >
                  <strong>
                    {tec.nome}
                  </strong>
                </Tooltip>

                <Popup>

                  <div
                    style={{
                      minWidth:260,
                    }}
                  >

                    <h3
                      style={{
                        margin:0,
                        color:"#0F2D73",
                      }}
                    >
                      👷 {tec.nome}
                    </h3>

                    <hr/>

                    <Linha
                      titulo="Status"
                      valor={tec.status}
                    />

                    <Linha
                      titulo="Online"
                      valor={
                        tec.online
                        ? "🟢 Sim"
                        : "🔴 Não"
                      }
                    />

                    <Linha
                      titulo="Equipe"
                      valor={
                        tec.equipe || "-"
                      }
                    />
                                        <Linha
                      titulo="Bateria"
                      valor={`${tec.bateria || 0}%`}
                    />

                    <Linha
                      titulo="Precisão"
                      valor={`${tec.precisao || 0} m`}
                    />

                    <Linha
                      titulo="Velocidade"
                      valor={`${(
                        Number(tec.velocidade || 0) * 3.6
                      ).toFixed(1)} km/h`}
                    />

                    <Linha
                      titulo="Última atualização"
                      valor={
                        tec.ultimaAtualizacao
                          ? new Date(
                              tec.ultimaAtualizacao
                            ).toLocaleTimeString("pt-BR")
                          : "--:--:--"
                      }
                    />

                  </div>

                </Popup>

              </Marker>

            </div>

          ))}

        </MapContainer>

      </div>

      {/* RODAPÉ */}

      <div
        style={{
          background:"#F8FAFC",
          padding:"12px 20px",
          borderTop:"1px solid #E2E8F0",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
        }}
      >

        <div
          style={{
            color:"#64748B",
            fontSize:15,
          }}
        >
          📡 Atualização automática em tempo real
        </div>

        <div
          style={{
            color:"#16A34A",
            fontWeight:"bold",
            fontSize:15,
          }}
        >
          ● Firebase Online
        </div>

      </div>

    </div>

  );

}
/* ==========================================
   COMPONENTE INDICADOR
========================================== */

function Indicador({

  titulo,
  valor,
  cor,

}) {

  return (

    <div
      style={{

        background:"rgba(255,255,255,.12)",

        padding:"10px 18px",

        borderRadius:18,

        border:`1px solid ${cor}`,

        textAlign:"center",

        minWidth:95,

      }}
    >

      <div
        style={{

          color:"#E2E8F0",

          fontSize:13,

          fontWeight:700,

        }}
      >
        {titulo}
      </div>

      <div
        style={{

          marginTop:5,

          color:"#FFFFFF",

          fontSize:24,

          fontWeight:900,

        }}
      >
        {valor}
      </div>

    </div>

  );

}

/* ==========================================
   COMPONENTE LINHA
========================================== */

function Linha({

  titulo,
  valor,

}) {

  return (

    <div
      style={{

        display:"flex",

        justifyContent:"space-between",

        alignItems:"center",

        padding:"8px 0",

        borderBottom:"1px solid #E5E7EB",

      }}
    >

      <div
        style={{

          color:"#475569",

          fontWeight:700,

          fontSize:14,

        }}
      >
        {titulo}
      </div>

      <div
        style={{

          color:"#0F172A",

          fontWeight:800,

          fontSize:14,

          textAlign:"right",

        }}
      >
        {valor}
      </div>

    </div>

  );

}