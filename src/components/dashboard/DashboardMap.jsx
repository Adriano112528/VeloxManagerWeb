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

import TecnicoPopup from "../TecnicoPopup";

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

  iconSize: [36,58],

  iconAnchor: [18,58],

});

const iconeOffline = new L.Icon({

  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize:[36,58],

  iconAnchor:[18,58],

});

function obterIcone(tecnico){

  return tecnico.online

    ? iconeOnline

    : iconeOffline;

}

function AjustarMapa({tecnicos}){

  const map = useMap();

  useEffect(()=>{

    const validos = tecnicos.filter(

      t=>t.latitude!=null && t.longitude!=null

    );

    if(validos.length===0) return;

    if(validos.length===1){

      map.setView(

        [

          Number(validos[0].latitude),

          Number(validos[0].longitude)

        ],

        15

      );

      return;

    }

    const bounds =

      L.latLngBounds(

        validos.map(t=>([

          Number(t.latitude),

          Number(t.longitude),

        ]))

      );

    map.fitBounds(

      bounds,

      {

        padding:[80,80],

      }

    );

  },[map,tecnicos]);

  return null;

}

export default function DashboardMap(){

  const [tecnicos,setTecnicos]=

    useState([]);

  useEffect(()=>{

    const gpsRef=

      ref(

        realtimeDb,

        "gps"

      );

    const unsubscribe=

      onValue(

        gpsRef,

        snapshot=>{

          if(!snapshot.exists()){

            setTecnicos([]);

            return;

          }

          const dados=

            snapshot.val();

          const lista=

            Object.entries(dados).map(

              ([id,tecnico])=>({

                id,

                ...tecnico,

              })

            );

          setTecnicos(lista);

        }

      );

    return ()=>unsubscribe();

  },[]);

  const lista=

    useMemo(

      ()=>tecnicos.filter(

        t=>t.latitude && t.longitude

      ),

      [tecnicos]

    );
      return (

    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFFFF",
        borderRadius: 22,
        overflow: "hidden",
        boxShadow:
          "0 15px 35px rgba(0,0,0,.18)",
      }}
    >

      <MapContainer

        center={[-29.1680,-51.1800]}

        zoom={13}

        zoomControl={false}

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

        {

          lista.map((tec)=>(

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

                  fillOpacity:.20,

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

                  offset={[0,-38]}

                >

                  <strong>

                    {tec.nome}

                  </strong>

                </Tooltip>

                <Popup>

                  <TecnicoPopup

                    tecnico={tec}

                  />

                </Popup>

              </Marker>

            </div>

          ))

        }

      </MapContainer>

    </div>

  );

}
