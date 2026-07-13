export default function TecnicoPopup({ tecnico }) {

  function abrirWhatsApp(mensagem) {

    const telefone = (tecnico.telefone || "")
      .replace(/\D/g, "");

    if (!telefone) {

      alert("Telefone do técnico não cadastrado.");

      return;

    }

    const url =
      `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(
      url,
      "_blank"
    );

  }

  function mensagemPersonalizada() {

    const mensagem = prompt(
      "Digite a mensagem para o técnico:"
    );

    if (!mensagem) return;

    abrirWhatsApp(mensagem);

  }

  return (

    <div
      style={{
        minWidth: 290,
      }}
    >

      <h3
        style={{
          margin: 0,
          color: "#0F2D73",
          marginBottom: 10,
          fontWeight: 800,
        }}
      >

        👷 {tecnico.nome}

      </h3>

      <hr />

      <Linha
        titulo="Status"
        valor={tecnico.status || "Disponível"}
      />

      <Linha
        titulo="Online"
        valor={
          tecnico.online
            ? "🟢 Sim"
            : "🔴 Não"
        }
      />

      <Linha
        titulo="Equipe"
        valor={tecnico.equipe || "-"}
      />

      <Linha
        titulo="Bateria"
        valor={`${tecnico.bateria || 0}%`}
      />

      <Linha
        titulo="Precisão"
        valor={`${tecnico.precisao || 0} m`}
      />

      <Linha
        titulo="Velocidade"
        valor={`${(
          Number(tecnico.velocidade || 0) * 3.6
        ).toFixed(1)} km/h`}
      />

      <Linha
        titulo="Latitude"
        valor={Number(tecnico.latitude).toFixed(6)}
      />

      <Linha
        titulo="Longitude"
        valor={Number(tecnico.longitude).toFixed(6)}
      />

      <div
        style={{
          display: "grid",
          gap: 10,
          marginTop: 20,
        }}
      >

        <button
          onClick={() =>
            abrirWhatsApp(
              "🌞 Bom dia, equipe! Favor dar início às atividades e manter o aplicativo Velox ativo durante todo o expediente. Bom trabalho a todos! 👷📡"
            )
          }
          style={botaoVerde}
        >
          🌞 Iniciar Atividades
        </button>

        <button
          onClick={() =>
            abrirWhatsApp(
              "📞 Me ligue assim que visualizar esta mensagem."
            )
          }
          style={botaoVerde}
        >
          📞 Me Ligue
        </button>

        <button
          onClick={() =>
            abrirWhatsApp(
              "🏠 Cliente ausente. Favor atualizar o status do atendimento no aplicativo e aguardar orientações da central."
            )
          }
          style={botaoVerde}
        >
          🏠 Cliente Ausente
        </button>

        <button
          onClick={mensagemPersonalizada}
          style={botaoVerde}
        >
          ✍️ Mensagem Personalizada
        </button>
                <a
          href={`https://www.google.com/maps?q=${tecnico.latitude},${tecnico.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          style={botaoAzul}
        >
          📍 Abrir no Google Maps
        </a>

      </div>

    </div>

  );

}

function Linha({ titulo, valor }) {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #E5E7EB",
      }}
    >

      <div
        style={{
          color: "#475569",
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        {titulo}
      </div>

      <div
        style={{
          color: "#0F172A",
          fontWeight: 700,
          fontSize: 14,
          textAlign: "right",
        }}
      >
        {valor}
      </div>

    </div>

  );

}

const botaoVerde = {

  background: "#22C55E",

  color: "#FFFFFF",

  border: 0,

  padding: "12px",

  borderRadius: 10,

  cursor: "pointer",

  fontWeight: 700,

  fontSize: 14,

  transition: "0.2s",

};

const botaoAzul = {

  display: "block",

  textAlign: "center",

  background: "#0F2D73",

  color: "#FFFFFF",

  padding: "12px",

  borderRadius: "10px",

  textDecoration: "none",

  fontWeight: 700,

  fontSize: 14,

};