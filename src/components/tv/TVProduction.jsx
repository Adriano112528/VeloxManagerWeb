import { useEffect, useMemo, useState } from "react";
import DashboardService from "../../services/DashboardService";
import TVCard from "./TVCard";

export default function TVProduction() {

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirTecnicos(setTecnicos);

    return () => unsubscribe();

  }, []);

  const total = useMemo(() => {

    return tecnicos.reduce(

      (soma, tecnico) =>

        soma + Number(tecnico.producao || 0),

      0

    );

  }, [tecnicos]);

  const meta = 10000;

  const percentual = Math.min(

    (total / meta) * 100,

    100

  );

  return (

    <TVCard
      titulo="💰 PRODUÇÃO"
      subtitulo="Meta Diária"
    >

      <div
        style={{

          display:"flex",

          flexDirection:"column",

          justifyContent:"space-between",

          height:"100%",

        }}
      >

        <div>

          <div
            style={{

              color:"#22C55E",

              fontSize:48,

              fontWeight:900,

            }}
          >

            R$ {total.toLocaleString("pt-BR")}

          </div>

          <div
            style={{

              color:"#94A3B8",

              marginTop:8,

              fontSize:16,

            }}
          >

            Meta: R$ {meta.toLocaleString("pt-BR")}

          </div>

        </div>

        <div>

          <div
            style={{

              width:"100%",

              height:16,

              background:"#16336F",

              borderRadius:40,

              overflow:"hidden",

            }}
          >

            <div
              style={{

                width:`${percentual}%`,

                height:"100%",

                background:
                  "linear-gradient(90deg,#22C55E,#4ADE80)",

                transition:"1s",

              }}
            />

          </div>

          <div
            style={{

              marginTop:12,

              color:"#FFFFFF",

              fontWeight:700,

              fontSize:18,

              textAlign:"center",

            }}
          >

            {percentual.toFixed(1)}%

          </div>

        </div>

      </div>

    </TVCard>

  );

}