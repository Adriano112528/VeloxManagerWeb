function InfrastructurePanel() {
  const infraestrutura = [
    {
      titulo: "Servidor Principal",
      status: "ONLINE",
      percentual: 100,
      cor: "#22C55E",
      icone: "🖥️",
    },
    {
      titulo: "Firebase",
      status: "OPERACIONAL",
      percentual: 100,
      cor: "#2563EB",
      icone: "🔥",
    },
    {
      titulo: "API",
      status: "RESPONDENDO",
      percentual: 98,
      cor: "#06B6D4",
      icone: "🔗",
    },
    {
      titulo: "GPS",
      status: "ATIVO",
      percentual: 96,
      cor: "#F59E0B",
      icone: "📍",
    },
    {
      titulo: "Banco de Dados",
      status: "ESTÁVEL",
      percentual: 99,
      cor: "#8B5CF6",
      icone: "🗄️",
    },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: 22,
        boxShadow: "0 12px 30px rgba(0,0,0,.10)",
        alignSelf: "start",
      }}
    >
      {/* CABEÇALHO */}

      <div
        style={{
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#071B52",
          }}
        >
          🖥️ Infraestrutura
        </h2>

        <div
          style={{
            color: "#64748B",
            marginTop: 5,
          }}
        >
          Monitoramento dos serviços
        </div>
      </div>

      {infraestrutura.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: index === infraestrutura.length - 1 ? 0 : 18,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                color: "#071B52",
                fontSize: 14,
              }}
            >
              {item.icone} {item.titulo}
            </div>

            <div
              style={{
                color: item.cor,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {item.status}
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
              }}
            />
          </div>

          <div
            style={{
              marginTop: 5,
              textAlign: "right",
              fontSize: 12,
              color: "#64748B",
            }}
          >
            {item.percentual}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfrastructurePanel;