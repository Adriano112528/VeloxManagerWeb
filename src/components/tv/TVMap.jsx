import DashboardMap from "../dashboard/DashboardMap";

export default function TVMap() {

  return (

    <div
      style={{

        width:"100%",
        height:"100%",

        background:
          "linear-gradient(180deg,#081F55,#061945)",

        borderRadius:24,

        overflow:"hidden",

        display:"flex",

        flexDirection:"column",

        border:"1px solid rgba(255,255,255,.08)",

        boxShadow:
          "0 18px 45px rgba(0,0,0,.35)",

      }}
    >

      {/* CABEÇALHO */}

      <div
        style={{

          height:70,

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

          padding:"0 22px",

          background:
            "linear-gradient(90deg,#0B2F82,#123C99)",

        }}
      >

        <div>

          <div
            style={{

              color:"#FFFFFF",

              fontSize:28,

              fontWeight:900,

            }}
          >

            🛰 MAPA OPERACIONAL

          </div>

          <div
            style={{

              color:"#D7E3FF",

              marginTop:4,

              fontSize:15,

            }}
          >

            Localização em tempo real

          </div>

        </div>

        <div
          style={{

            background:"#22C55E",

            color:"#FFF",

            padding:"8px 18px",

            borderRadius:50,

            fontWeight:800,

            fontSize:18,

          }}
        >

            GPS ONLINE

        </div>

      </div>

      {/* MAPA */}

      <div
        style={{

          flex:1,

          overflow:"hidden",

        }}
      >

        <DashboardMap />

      </div>

    </div>

  );

}