import { useEffect, useState } from "react";

import arsLogo from "../../assets/logos/ars.png";
import veloxLogo from "../../assets/logos/velox.png";

export default function TopBar() {

  const [hora, setHora] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setHora(new Date());

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return (

    <div
      style={{

        height:"100%",

        background:
          "linear-gradient(90deg,#071B52,#10358D,#071B52)",

        borderRadius:22,

        display:"grid",

        gridTemplateColumns:"240px 1fr 260px",

        alignItems:"center",

        padding:"0 25px",

        boxShadow:"0 15px 35px rgba(0,0,0,.35)",

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
            width:70,
          }}
        />

        <div>

          <div
            style={{
              color:"#FFF",
              fontWeight:900,
              fontSize:28,
            }}
          >
            ARS
          </div>

          <div
            style={{
              color:"#CBD5E1",
              fontSize:14,
            }}
          >
            Tecnologia
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
            fontSize:38,
            fontWeight:900,
            letterSpacing:1,
          }}
        >
          VELOX TELECOM
        </div>

        <div
          style={{
            color:"#CBD5E1",
            marginTop:3,
            fontSize:16,
          }}
        >
          CENTRO DE OPERAÇÕES
        </div>

        <div
          style={{
            color:"#22C55E",
            fontSize:48,
            fontWeight:900,
            marginTop:5,
          }}
        >
          {hora.toLocaleTimeString("pt-BR")}
        </div>

      </div>

      {/* DIREITA */}

      <div
        style={{
          display:"flex",
          justifyContent:"flex-end",
          alignItems:"center",
          gap:20,
        }}
      >

        <div
          style={{
            color:"#22C55E",
            fontWeight:800,
            fontSize:18,
            lineHeight:1.7,
            textAlign:"right",
          }}
        >
          🟢 FIREBASE<br/>
          🛰️ GPS<br/>
          🌐 WEB
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