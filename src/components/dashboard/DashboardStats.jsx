function Card({
  titulo,
  valor,
  subtitulo,
  icone,
  cor,
  progresso,
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 18,
        padding: 18,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        border: "1px solid #E5E7EB",
        transition: ".25s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: cor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            fontSize: 24,
          }}
        >
          {icone}
        </div>

        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#22C55E",
          }}
        />
      </div>

      <div
        style={{
          color: "#64748B",
          fontSize: 14,
        }}
      >
        {titulo}
      </div>

      <div
        style={{
          marginTop: 8,
          fontSize: 20,
          fontWeight: "bold",
          color: "#071B52",
        }}
      >
        {valor}
      </div>

      <div
        style={{
          marginTop: 8,
          fontSize: 12,
          color: "#94A3B8",
        }}
      >
        {subtitulo}
      </div>

      <div
        style={{
          marginTop: 14,
          width: "100%",
          height: 5,
          background: "#E5E7EB",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            background: cor,
            borderRadius: 20,
          }}
        />
      </div>
    </div>
  );
}

function DashboardStats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 18,
      }}
    >
      <Card
        titulo="Técnicos Online"
        valor="20"
        subtitulo="18 ativos agora"
        icone="👷"
        cor="#2563EB"
        progresso={92}
      />

      <Card
        titulo="Serviços Hoje"
        valor="46"
        subtitulo="12 em andamento"
        icone="📋"
        cor="#16A34A"
        progresso={78}
      />

      <Card
        titulo="Finalizados"
        valor="32"
        subtitulo="70% concluídos"
        icone="✅"
        cor="#4CAF50"
        progresso={70}
      />

      <Card
        titulo="Produção"
        valor="R$ 5.420"
        subtitulo="Produção em tempo real"
        icone="💰"
        cor="#8E24AA"
        progresso={100}
      />

      <Card
        titulo="Equipes em Rota"
        valor="8"
        subtitulo="GPS Atualizado"
        icone="🚚"
        cor="#009688"
        progresso={45}
      />

      <Card
        titulo="Alertas"
        valor="3"
        subtitulo="Necessitam atenção"
        icone="🚨"
        cor="#F44336"
        progresso={35}
      />

      <Card
        titulo="GPS Online"
        valor="20"
        subtitulo="Todos conectados"
        icone="📍"
        cor="#3F51B5"
        progresso={100}
      />

      <Card
        titulo="Conectividade"
        valor="99,9%"
        subtitulo="Firebase + API"
        icone="📶"
        cor="#FB8C00"
        progresso={99}
      />
    </div>
  );
}

export default DashboardStats;