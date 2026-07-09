export default function NOCBar() {

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
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "📱 APP",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "🖥 WEB",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "📺 TV",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "⚙ API",
      status: "ONLINE",
      cor: "#22C55E",
    },

    {
      nome: "💾 DATABASE",
      status: "ONLINE",
      cor: "#22C55E",
    },

  ];

  return (

    <div
      style={{

        display:"grid",

        gridTemplateColumns:"repeat(8,1fr)",

        gap:12,

      }}
    >

      {itens.map(item=>(

        <div
          key={item.nome}
          style={{

            background:"#071F55",

            borderRadius:18,

            padding:14,

            textAlign:"center",

            border:`2px solid ${item.cor}`,

            boxShadow:"0 8px 20px rgba(0,0,0,.25)",

          }}
        >

          <div
            style={{

              color:"#FFFFFF",

              fontWeight:800,

              fontSize:15,

            }}
          >
            {item.nome}
          </div>

          <div
            style={{

              marginTop:8,

              color:item.cor,

              fontWeight:900,

              fontSize:18,

            }}
          >
            ● {item.status}
          </div>

        </div>

      ))}

    </div>

  );

}