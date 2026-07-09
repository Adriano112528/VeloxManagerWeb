export default function NOCBarTV() {

  const itens = [

    {
      nome: "🌐 INTERNET",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "☁ FIREBASE",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "📡 GPS",
      status: "1 ONLINE",
      cor: "#3B82F6",
    },

    {
      nome: "📱 APP",
      status: "OK",
      cor: "#F59E0B",
    },

    {
      nome: "⚙ API",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "💾 DATABASE",
      status: "OK",
      cor: "#A855F7",
    },

  ];

  return (

    <div
      style={{

        display:"grid",

        gridTemplateColumns:"repeat(6,1fr)",

        gap:10,

      }}
    >

      {itens.map((item)=>(

        <div
          key={item.nome}
          style={{

            background:"#071F55",

            border:`2px solid ${item.cor}`,

            borderRadius:14,

            padding:"10px 8px",

            textAlign:"center",

            boxShadow:"0 6px 18px rgba(0,0,0,.25)",

          }}
        >

          <div
            style={{

              color:"#FFFFFF",

              fontSize:13,

              fontWeight:800,

            }}
          >

            {item.nome}

          </div>

          <div
            style={{

              marginTop:6,

              color:item.cor,

              fontSize:18,

              fontWeight:900,

            }}
          >

            ● {item.status}

          </div>

        </div>

      ))}

    </div>

  );

}