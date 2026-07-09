function ActivityCard() {
  const atividades = [
    { hora: "08:15", texto: "Carlos iniciou instalação" },
    { hora: "09:02", texto: "João finalizou FTTH" },
    { hora: "09:38", texto: "Marcos iniciou manutenção" },
    { hora: "10:12", texto: "Ana chegou ao cliente" },
    { hora: "10:45", texto: "Pedro concluiu ativação" },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginTop: 0 }}>📋 Atividades Recentes</h2>

      <div style={{ flex: 1 }}>
        {atividades.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "12px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong>{item.hora}</strong>
            <div>{item.texto}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityCard;