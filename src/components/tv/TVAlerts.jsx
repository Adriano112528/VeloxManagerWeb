import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";
import TVCard from "./TVCard";

export default function TVAlerts() {

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirTecnicos(setTecnicos);

    return () => unsubscribe();

  }, []);

  const alertas = [];

  tecnicos.forEach((tec) => {

    if (!tec.online) {

      alertas.push({
        cor: "#EF4444",
        icone: "🔴",
        texto: `${tec.nome} Offline`,
      });

    }

    if ((tec.bateria || 0) < 20) {

      alertas.push({
        cor: "#F59E0B",
        icone: "🔋",
        texto: `${tec.nome} bateria ${tec.bateria}%`,
      });

    }

    if (!tec.latitude || !tec.longitude) {

      alertas.push({
        cor: "#3B82F6",
        icone: "📡",
        texto: `${tec.nome} sem GPS`,
      });

    }

  });

  return (

    <TVCard
      titulo="🚨 ALERTAS"
      subtitulo="Monitoramento Inteligente"
      altura="100%"
    >

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:12,
          flex:1,
        }}
      >

        {alertas.length===0 && (

          <div
            style={{
              flex:1,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"#22C55E",
              fontWeight:900,
              fontSize:22,
            }}
          >
            ✅ Nenhum alerta
          </div>

        )}

        {alertas.map((item,index)=>(

          <div
            key={index}
            style={{

              display:"flex",

              alignItems:"center",

              gap:14,

              padding:14,

              borderRadius:16,

              background:"rgba(255,255,255,.05)",

              borderLeft:`6px solid ${item.cor}`,

            }}
          >

            <div
              style={{
                fontSize:28,
              }}
            >
              {item.icone}
            </div>

            <div
              style={{
                color:"#FFFFFF",
                fontWeight:700,
                fontSize:17,
              }}
            >
              {item.texto}
            </div>

          </div>

        ))}

      </div>

    </TVCard>

  );

}