function DashboardCard({
  titulo,
  valor,
  icone,
  cor,
  subtitulo,
  progresso = 0,
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 18,
        padding: 22,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        border: "1px solid #E5E7EB",
        transition: ".25s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 55,
            height: 55,
            borderRadius: 14,
            background: cor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            fontSize: 26,
          }}
        >
          {icone}
        </div>

        <div
          style={{
            width: 12,
            height: 12,
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
          fontSize: 32,
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        {valor}
      </div>

      {subtitulo && (
        <div
          style={{
            marginTop: 6,
            color: "#94A3B8",
            fontSize: 13,
          }}
        >
          {subtitulo}
        </div>
      )}

      <div
        style={{
          marginTop: 18,
          width: "100%",
          height: 7,
          background: "#E5E7EB",
          borderRadius: 30,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            background: cor,
            borderRadius: 30,
          }}
        />
      </div>
    </div>
  );
}

export default DashboardCard;