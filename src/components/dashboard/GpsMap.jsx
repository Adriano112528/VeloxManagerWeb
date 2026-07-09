import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
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
  iconSize: [32, 52],
  iconAnchor: [16, 52],
});

const iconeOffline = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [32, 52],
  iconAnchor: [16, 52],
});

function obterIcone(tecnico) {
  return tecnico.online ? iconeOnline : iconeOffline;
}

export default function DashboardMap() {

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const gpsRef = ref(realtimeDb, "gps");

    const unsubscribe = onValue(gpsRef, (snapshot) => {

      if (!snapshot.exists()) {
        setTecnicos([]);
        return;
      }

      const dados = snapshot.val();

      const lista = Object.entries(dados).map(([id, tecnico]) => ({
        id,
        ...tecnico,
      }));

      console.log("Firebase GPS:", lista);

      setTecnicos(lista);

    });

    return () => unsubscribe();

  }, []);

  const online = tecnicos.filter(t => t.online).length;
    return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 24,
        padding: 22,
        boxShadow: "0 15px 35px rgba(0,0,0,.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* CABEÇALHO */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#0F2D73",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            🗺️ Mapa Operacional
          </h2>

          <div
            style={{
              marginTop: 6,
              color: "#64748B",
              fontSize: 16,
            }}
          >
            Monitoramento em tempo real dos técnicos
          </div>
        </div>

        <div
          style={{
            background: "#DCFCE7",
            color: "#15803D",
            padding: "12px 22px",
            borderRadius: 30,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          ● {online} Técnicos Online
        </div>
      </div>

      {/* MAPA */}

      <div
        style={{
          flex: 1,
          overflow: "hidden",
          borderRadius: 20,
          border: "1px solid #E5E7EB",
        }}
      >
        <MapContainer
          center={[-29.1680, -51.1800]}
          zoom={12}
          style={{
            width: "100%",
            height: "760px",
          }}
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {tecnicos.map((tec) => (
            <div key={tec.id}>
              <Circle
                center={[tec.latitude, tec.longitude]}
                radius={100}
                pathOptions={{
                  color: tec.online ? "#16A34A" : "#DC2626",
                  fillColor: tec.online ? "#22C55E" : "#EF4444",
                  fillOpacity: 0.18,
                  weight: 2,
                }}
              />

              <Marker
                position={[tec.latitude, tec.longitude]}
                icon={obterIcone(tec)}
              >
                <Popup>
                  <div style={{ minWidth: 220 }}>

                    <h3 style={{ margin: 0, color: "#0F2D73" }}>
                      👨‍🔧 {tec.nome}
                    </h3>

                    <hr />

                    <p><strong>Status:</strong> {tec.status}</p>

                    <p>
                      <strong>Online:</strong>{" "}
                      {tec.online ? "🟢 Sim" : "🔴 Não"}
                    </p>

                    <p>
                      <strong>Bateria:</strong> {tec.bateria}%
                    </p>

                    <p>
                      <strong>Precisão:</strong> {tec.precisao} m
                    </p>

                    <p>
                      <strong>Velocidade:</strong>{" "}
                      {(Number(tec.velocidade || 0) * 3.6).toFixed(1)} km/h
                    </p>

                    <p>
                      <strong>Última atualização:</strong>
                    </p>

                    <p>
                      {new Date(
                        tec.ultimaAtualizacao
                      ).toLocaleString("pt-BR")}
                    </p>

                  </div>
                </Popup>
              </Marker>
            </div>
          ))}
                  </MapContainer>
      </div>
    </div>
  );
}