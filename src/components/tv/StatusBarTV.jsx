export default function StatusBarTV({

  online = 1,

  offline = 0,

  gps = 1,

  producao = 0,

  alertas = 0,

}) {

  const cards = [

    {
      titulo:"👷 ONLINE",
      valor:online,
      cor:"#22C55E",
    },

    {
      titulo:"🔴 OFFLINE",
      valor:offline,
      cor:"#EF4444",
    },

    {
      titulo:"📡 GPS",
      valor:gps,
      cor:"#3B82F6",
    },

    {
      titulo:"💰 PRODUÇÃO",
      valor:`R$ ${producao}`,
      cor:"#F59E0B",
    },

    {
      titulo:"🚨 ALERTAS",
      valor:alertas,
      cor:"#A855F7",
    },

  ];

  return (

    <div
      style={{

        display:"grid",

        gridTemplateColumns:"repeat(5,1fr)",

        gap:12,

      }}
    >

      {cards.map((card)=>(

        <div
          key={card.titulo}
          style={{

            background:"#F8FAFC",

            borderLeft:`6px solid ${card.cor}`,

            borderRadius:14,

            padding:"12px 16px",

            boxShadow:"0 8px 18px rgba(0,0,0,.08)",

          }}
        >

          <div
            style={{

              color:"#64748B",

              fontSize:13,

              fontWeight:700,

            }}
          >

            {card.titulo}

          </div>

          <div
            style={{

              marginTop:6,

              color:card.cor,

              fontSize:30,

              fontWeight:900,

            }}
          >

            {card.valor}

          </div>

        </div>

      ))}

    </div>

  );

}