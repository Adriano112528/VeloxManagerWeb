function Footer() {
  return (
    <div
      style={{
        marginTop: 25,
        background: "#111827",
        color: "#D1D5DB",
        borderRadius: 18,
        padding: "18px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        boxShadow: "0 10px 25px rgba(0,0,0,.25)",
      }}
    >
      <div>
        <strong>Velox Manager Enterprise</strong>
        <div
          style={{
            marginTop: 5,
            fontSize: 13,
            color: "#9CA3AF",
          }}
        >
          © 2026 ARS Tecnologia • Todos os direitos reservados
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 30,
          fontSize: 14,
        }}
      >
        <div>
          <strong>Versão</strong>
          <br />
          2.0 Enterprise
        </div>

        <div>
          <strong>Firebase</strong>
          <br />
          🟢 Online
        </div>

        <div>
          <strong>API</strong>
          <br />
          🟢 Conectada
        </div>

        <div>
          <strong>Última Atualização</strong>
          <br />
          {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default Footer;