import { useEffect, useState } from "react";

import DashboardService from "../../services/DashboardService";

import arsLogo from "../../assets/logos/ars.png";
import veloxLogo from "../../assets/logos/velox.png";

export default function TopBar() {

  const [hora, setHora] = useState(new Date());

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const timer = setInterval(() => {

      setHora(new Date());

    },1000);

    const unsubscribe =
      DashboardService.ouvirTecnicos(setTecnicos);

    return ()=>{

      clearInterval(timer);

      unsubscribe();

    };

  },[]);

  const online =
    tecnicos.filter(t=>t.online).length;

  const offline =
    tecnicos.length-online;

  return(

    <div
      style={{

        background:
        "linear-gradient(90deg,#071A49,#0F2D73,#071A49)",

        borderRadius:28,

        padding:"20px 30px",

        display:"grid",

        gridTemplateColumns:"260px 1fr 320px",

        alignItems:"center",

        border:"1px solid rgba(255,255,255,.08)",

        boxShadow:"0 20px 50px rgba(0,0,0,.35)",

      }}
    >

      {/* ESQUERDA */}

      <div
        style={{

          display:"flex",

          alignItems:"center",

          gap:18,

        }}
      >

        <img

          src={arsLogo}

          alt="ARS"

          style={{

            width:75,

          }}

        />

        <div>

          <div
            style={{

              color:"#FFFFFF",

              fontWeight:900,

              fontSize:30,

            }}
          >
            ARS
          </div>

          <div
            style={{

              color:"#CBD5E1",

              fontSize:16,

            }}
          >
            Technology
          </div>

        </div>

      </div>

      {/* CENTRO */}

      <div
        style={{

          textAlign:"center",

        }}
      >

        <div
          style={{

            color:"#FFFFFF",

            fontSize:42,

            fontWeight:900,

            letterSpacing:1,

          }}
        >

          VELOX TELECOM

        </div>

        <div
          style={{

            color:"#CBD5E1",

            marginTop:6,

            fontSize:18,

          }}
        >

          CENTRO DE OPERAÇÕES

        </div>

        <div
          style={{

            marginTop:12,

            color:"#22C55E",

            fontSize:60,

            fontWeight:900,

            letterSpacing:2,

          }}
        >

          {hora.toLocaleTimeString("pt-BR")}

        </div>

        <div
          style={{

            color:"#FFFFFF",

            marginTop:6,

            fontSize:18,

          }}
        >

          {hora.toLocaleDateString("pt-BR")}

        </div>

      </div>

      {/* DIREITA */}

      <div
        style={{

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

        }}
      >

        <div>

          <Status titulo="🟢 Firebase"/>
          <Status titulo="🟢 GPS"/>
          <Status titulo="🟢 Web"/>
          <Status titulo="🟢 Android"/>

          <div
            style={{

              marginTop:12,

              color:"#FFFFFF",

              fontSize:18,

              fontWeight:700,

            }}
          >

            👷 {online} Online

          </div>

          <div
            style={{

              color:"#CBD5E1",

              fontSize:17,

            }}
          >

            🔴 {offline} Offline

          </div>

        </div>

        <img

          src={veloxLogo}

          alt="Velox"

          style={{

            width:90,

          }}

        />

      </div>

    </div>

  );

}

function Status({

  titulo,

}){

  return(

    <div
      style={{

        color:"#22C55E",

        fontWeight:700,

        marginBottom:5,

        fontSize:16,

      }}
    >

      {titulo}

    </div>

  );

}