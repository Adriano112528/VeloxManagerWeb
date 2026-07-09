import TVCard from "./TVCard";

export default function TVWeather() {

  return (

    <TVCard
      titulo="🌦 CLIMA"
      subtitulo="Condições da Região"
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
      >

        <div>

          <div
            style={{
              fontSize: 72,
            }}
          >
            ☀️
          </div>

        </div>

        <div
          style={{
            textAlign: "right",
          }}
        >

          <div
            style={{
              color: "#FFFFFF",
              fontSize: 52,
              fontWeight: 900,
            }}
          >
            18°C
          </div>

          <div
            style={{
              color: "#CBD5E1",
              marginTop: 8,
              fontSize: 18,
            }}
          >
            Caxias do Sul
          </div>

          <div
            style={{
              color: "#94A3B8",
              marginTop: 8,
              fontSize: 16,
            }}
          >
            Céu limpo
          </div>

        </div>

      </div>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 10,
        }}
      >

        <Item
          titulo="💧"
          valor="72%"
        />

        <Item
          titulo="🌬"
          valor="9 km/h"
        />

        <Item
          titulo="☔"
          valor="0%"
        />

      </div>

    </TVCard>

  );

}

function Item({

  titulo,
  valor,

}) {

  return (

    <div
      style={{

        background:
          "rgba(255,255,255,.05)",

        borderRadius: 14,

        padding: 12,

        textAlign: "center",

      }}
    >

      <div
        style={{
          fontSize: 26,
        }}
      >
        {titulo}
      </div>

      <div
        style={{
          color: "#FFFFFF",
          marginTop: 6,
          fontWeight: "bold",
        }}
      >
        {valor}
      </div>

    </div>

  );

}