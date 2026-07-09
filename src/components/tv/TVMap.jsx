import DashboardMap from "../dashboard/DashboardMap";

export default function TVMap() {

  return (

    <div
      style={{

        background:
          "linear-gradient(180deg,#081F55,#0D2A6B)",

        borderRadius:28,

        padding:20,

        display:"flex",

        flexDirection:"column",

        height:"100%",

        boxShadow:"0 20px 45px rgba(0,0,0,.35)",

        border:"1px solid rgba(255,255,255,.08)",

      }}
    >

      {/* CABEÇALHO */}

      <div
        style={{

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

          marginBottom:18,

        }}
      >

        <div>

          <div
            style={{

              color:"#FFFFFF",

              fontSize:34,

              fontWeight:900,

            }}
          >
            🛰️ MAPA OPERACIONAL
          </div>

          <div
            style={{

              color:"#B8C5E2",

              marginTop:6,

              fontSize:18,

            }}
          >
            Localização em tempo real da equipe técnica
          </div>

        </div>

        <div
          style={{

            display:"flex",

            gap:12,

          }}
        >

          <div
            style={{

              background:"#16A34A",

              color:"#FFF",

              padding:"12px 22px",

              borderRadius:40,

              fontWeight:800,

              fontSize:17,

            }}
          >
            📡 GPS ONLINE
          </div>

          <div
            style={{

              background:"#2563EB",

              color:"#FFF",

              padding:"12px 22px",

              borderRadius:40,

              fontWeight:800,

              fontSize:17,

            }}
          >
            ⚡ TEMPO REAL
          </div>

        </div>

      </div>

      {/* MAPA */}

      <div
        style={{

          flex:1,

          overflow:"hidden",

          borderRadius:22,

          background:"#FFFFFF",

        }}
      >

        <DashboardMap />

      </div>

    </div>

  );

}