function Ranking() {
  const ranking = [
    {
      nome: "Carlos Oliveira",
      equipe: "Equipe 01",
      producao: 18,
      percentual: 100,
      cor: "#FACC15",
      medalha: "🥇",
    },
    {
      nome: "João Silva",
      equipe: "Equipe 02",
      producao: 15,
      percentual: 84,
      cor: "#D1D5DB",
      medalha: "🥈",
    },
    {
      nome: "Marcos Souza",
      equipe: "Equipe 03",
      producao: 13,
      percentual: 72,
      cor: "#F97316",
      medalha: "🥉",
    },
    {
      nome: "Ana Pereira",
      equipe: "Equipe 04",
      producao: 11,
      percentual: 61,
      cor: "#2563EB",
      medalha: "4º",
    },
    {
      nome: "Pedro Lima",
      equipe: "Equipe 05",
      producao: 10,
      percentual: 56,
      cor: "#16A34A",
      medalha: "5º",
    },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: 22,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        border: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          marginBottom: 25,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#071B52",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          🏆 Ranking de Produção
        </h2>

        <div
          style={{
            marginTop: 5,
            color: "#64748B",
            fontSize: 13,
          }}
        >
          Atualização em tempo real
        </div>
      </div>

      {ranking.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: 20,
            paddingBottom: 18,
            borderBottom:
              index !== ranking.length - 1
                ? "1px solid #EEF2F7"
                : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  width: 34,
                  textAlign: "center",
                }}
              >
                {item.medalha}
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#071B52",
                    fontSize: 15,
                  }}
                >
                  {item.nome}
                </div>

                <div
                  style={{
                    color: "#64748B",
                    fontSize: 12,
                  }}
                >
                  {item.equipe}
                </div>
              </div>
            </div>

            <div
              style={{
                color: "#071B52",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {item.producao}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 8,
              background: "#E5E7EB",
              borderRadius: 30,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${item.percentual}%`,
                height: "100%",
                background: item.cor,
                borderRadius: 30,
                transition: ".4s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ranking;