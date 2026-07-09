import { FaMedal, FaArrowUp } from "react-icons/fa";

function Ranking() {
  const ranking = [
    {
      posicao: 1,
      nome: "Carlos",
      producao: 18,
      percentual: 100,
      cor: "#FACC15",
    },
    {
      posicao: 2,
      nome: "João",
      producao: 15,
      percentual: 83,
      cor: "#C0C0C0",
    },
    {
      posicao: 3,
      nome: "Marcos",
      producao: 13,
      percentual: 72,
      cor: "#F97316",
    },
    {
      posicao: 4,
      nome: "Ana",
      producao: 11,
      percentual: 61,
      cor: "#3B82F6",
    },
    {
      posicao: 5,
      nome: "Pedro",
      producao: 10,
      percentual: 55,
      cor: "#22C55E",
    },
  ];

  return (
    <div
      style={{
        background: "#FFF",
        borderRadius: 18,
        padding: 18,
        boxShadow: "0 10px 25px rgba(0,0,0,.10)",
      }}
    >
      {/* CABEÇALHO */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              color: "#071B52",
              fontSize: 18,
            }}
          >
            🏆 Ranking
          </h3>

          <div
            style={{
              color: "#64748B",
              fontSize: 12,
              marginTop: 3,
            }}
          >
            Produção do dia
          </div>
        </div>

        <FaMedal color="#F59E0B" size={22} />
      </div>

      {ranking.map((item) => (
        <div
          key={item.posicao}
          style={{
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: item.cor,
                  color: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: 13,
                }}
              >
                {item.posicao}
              </div>

              <span
                style={{
                  fontWeight: "bold",
                  color: "#071B52",
                  fontSize: 14,
                }}
              >
                {item.nome}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "#16A34A",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              <FaArrowUp size={11} />

              {item.producao}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 8,
              background: "#E5E7EB",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${item.percentual}%`,
                height: "100%",
                background: item.cor,
                borderRadius: 20,
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