function RecentActivities() {
  const atividades = [
    {
      hora: "15:02",
      tecnico: "Carlos Oliveira",
      acao: "Finalizou instalação",
      cliente: "Empresa Alfa",
      cor: "#16A34A",
      icone: "✅",
    },
    {
      hora: "14:58",
      tecnico: "João Silva",
      acao: "Chegou ao cliente",
      cliente: "Residencial Vista",
      cor: "#2563EB",
      icone: "📍",
    },
    {
      hora: "14:53",
      tecnico: "Marcos Souza",
      acao: "Iniciou instalação",
      cliente: "Loja Centro",
      cor: "#F59E0B",
      icone: "🛠️",
    },
    {
      hora: "14:49",
      tecnico: "Ana Pereira",
      acao: "Em deslocamento",
      cliente: "Bairro São José",
      cor: "#8B5CF6",
      icone: "🚗",
    },
    {
      hora: "14:40",
      tecnico: "Pedro Lima",
      acao: "Finalizou manutenção",
      cliente: "Condomínio Itália",
      cor: "#10B981",
      icone: "✔️",
    },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: 22,
        boxShadow: "0 12px 30px rgba(0,0,0,.10)",
        border: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              color: "#071B52",
            }}
          >
            📋 Atividades Recentes
          </h2>

          <div
            style={{
              color: "#64748B",
              marginTop: 5,
              fontSize: 13,
            }}
          >
            Atualização em tempo real
          </div>
        </div>

        <div
          style={{
            background: "#ECFDF5",
            color: "#16A34A",
            padding: "8px 14px",
            borderRadius: 10,
            fontWeight: "bold",
          }}
        >
          AO VIVO
        </div>
      </div>

      {atividades.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "14px 0",
            borderBottom:
              index !== atividades.length - 1
                ? "1px solid #EEF2F7"
                : "none",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: item.cor,
              color: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 22,
            }}
          >
            {item.icone}
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontWeight: "bold",
                color: "#071B52",
              }}
            >
              {item.tecnico}
            </div>

            <div
              style={{
                color: "#475569",
                marginTop: 3,
              }}
            >
              {item.acao}
            </div>

            <div
              style={{
                color: "#94A3B8",
                fontSize: 13,
                marginTop: 4,
              }}
            >
              {item.cliente}
            </div>
          </div>

          <div
            style={{
              color: "#64748B",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {item.hora}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivities;