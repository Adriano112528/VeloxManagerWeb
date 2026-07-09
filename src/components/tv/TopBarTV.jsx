import { useEffect, useState } from "react";

export default function TopBarTV() {

  const [agora, setAgora] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setAgora(new Date());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div
      style={{

        height:70,

        background:"linear-gradient(90deg,#071B49,#0F2D73)",

        borderRadius:18,

        display:"flex",

        justifyContent:"space-between",

        alignItems:"center",

        padding:"0 24px",

        color:"#FFFFFF",

        boxShadow:"0 8px 20px rgba(0,0,0,.25)",

      }}
    >

      <div>

        <div
          style={{
            fontSize:28,
            fontWeight:900,
          }}
        >
          🛰️ VELOX TELECOM
        </div>

        <div
          style={{
            color:"#A5B4FC",
            fontSize:14,
          }}
        >
          Centro Operacional • Monitoramento em Tempo Real
        </div>

      </div>

      <div
        style={{
          textAlign:"right",
        }}
      >

        <div
          style={{
            fontSize:15,
            color:"#CBD5E1",
          }}
        >
          {agora.toLocaleDateString("pt-BR",{
            weekday:"long",
            day:"2-digit",
            month:"long",
            year:"numeric",
          })}
        </div>

        <div
          style={{
            fontSize:34,
            fontWeight:900,
            color:"#22C55E",
          }}
        >
          {agora.toLocaleTimeString("pt-BR")}
        </div>

      </div>

    </div>

  );

}