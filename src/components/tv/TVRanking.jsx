import { useEffect, useMemo, useState } from "react";
import DashboardService from "../../services/DashboardService";
import TVCard from "./TVCard";

export default function TVRanking() {

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirTecnicos(setTecnicos);

    return () => unsubscribe();

  }, []);

  const ranking = useMemo(() => {

    return [...tecnicos]

      .sort(

        (a, b) =>

          (b.producao || 0) -

          (a.producao || 0)

      )

      .slice(0,5);

  }, [tecnicos]);

  return (

    <TVCard
      titulo="🏆 RANKING"
      subtitulo="Top Produção do Dia"
    >

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:12,
          flex:1,
        }}
      >

        {ranking.length===0 && (

          <div
            style={{
              flex:1,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"#94A3B8",
              fontWeight:700,
              fontSize:18,
            }}
          >
            Nenhuma produção registrada
          </div>

        )}

        {ranking.map((tec,index)=>(

          <div
            key={tec.id}
            style={{

              background:"rgba(255,255,255,.05)",

              borderRadius:18,

              padding:14,

              display:"flex",

              justifyContent:"space-between",

              alignItems:"center",

              borderLeft:

                index===0

                ? "6px solid gold"

                : "6px solid #2563EB",

            }}
          >

            <div>

              <div
                style={{
                  color:"#FFFFFF",
                  fontWeight:800,
                  fontSize:17,
                }}
              >
                {index+1}º {tec.nome}
              </div>

              <div
                style={{
                  color:"#94A3B8",
                  marginTop:4,
                  fontSize:14,
                }}
              >
                {tec.equipe || "Equipe"}
              </div>

            </div>

            <div
              style={{
                color:"#22C55E",
                fontSize:22,
                fontWeight:900,
              }}
            >
              R$ {(tec.producao || 0).toLocaleString("pt-BR")}
            </div>

          </div>

        ))}

      </div>

    </TVCard>

  );

}