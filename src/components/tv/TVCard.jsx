export default function TVCard({

  titulo,
  subtitulo,
  children,
  altura = "100%",

}) {

  return (

    <div
      style={{

        position: "relative",

        background:
          "linear-gradient(180deg,#0B2B73,#081F55)",

        borderRadius: 28,

        padding: 24,

        height: altura,

        display: "flex",

        flexDirection: "column",

        boxSizing: "border-box",

        overflow: "hidden",

        border:
          "1px solid rgba(255,255,255,.10)",

        boxShadow:
          "0 20px 50px rgba(0,0,0,.35)",

      }}
    >

      {/* brilho superior */}

      <div
        style={{

          position:"absolute",

          top:0,

          left:0,

          right:0,

          height:4,

          background:
            "linear-gradient(90deg,#2563EB,#22C55E,#2563EB)",

        }}
      />

      {/* brilho lateral */}

      <div
        style={{

          position:"absolute",

          right:-80,

          top:-80,

          width:180,

          height:180,

          borderRadius:"50%",

          background:
            "rgba(37,99,235,.12)",

          filter:"blur(35px)",

        }}
      />

      {/* título */}

      <div
        style={{

          marginBottom:20,

        }}
      >

        <div
          style={{

            color:"#FFFFFF",

            fontSize:28,

            fontWeight:900,

            letterSpacing:1,

          }}
        >
          {titulo}
        </div>

        {subtitulo && (

          <div
            style={{

              color:"#B8C5E2",

              marginTop:6,

              fontSize:16,

            }}
          >
            {subtitulo}
          </div>

        )}

      </div>

      {/* conteúdo */}

      <div
        style={{

          flex:1,

          display:"flex",

          flexDirection:"column",

          zIndex:2,

        }}
      >

        {children}

      </div>

    </div>

  );

}