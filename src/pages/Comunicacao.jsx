import { useEffect, useMemo, useState } from "react";
import { ouvirTecnicos } from "../services/TecnicosService";

export default function Comunicacao() {

  const [pesquisa, setPesquisa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tecnicos, setTecnicos] = useState([]);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {

    const unsubscribe =
  ouvirTecnicos((lista) => {

        setTecnicos(lista);

        if (!selecionado && lista.length > 0) {
          setSelecionado(lista[0]);
        }

      });

    return () => unsubscribe();

  }, []);

  const lista = useMemo(() => {

    return tecnicos.filter((t) => {

      const nome =
        (t.nome || "").toLowerCase();

      return nome.includes(
        pesquisa.toLowerCase()
      );

    });

  }, [pesquisa, tecnicos]);

  function abrirWhatsApp(texto) {

    if (!selecionado) return;

    const telefone =
      (selecionado.telefone || "")
      .replace(/\D/g, "");

    if (!telefone) {

      alert("Telefone não cadastrado.");

      return;

    }

    window.open(

      `https://wa.me/55${telefone}?text=${encodeURIComponent(texto)}`,

      "_blank"

    );

  }

  return (

    <div
      style={{
        padding:30,
      }}
    >

      <h1
        style={{
          color:"#0F2D73",
          fontSize:34,
          marginBottom:10,
        }}
      >
        💬 Central de Comunicação
      </h1>

      <p
        style={{
          color:"#64748B",
          marginBottom:30,
        }}
      >
        Comunicação em tempo real com os técnicos.
      </p>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"340px 1fr",
          gap:25,
        }}
      >

        <div
          style={{
            background:"#FFF",
            borderRadius:20,
            padding:20,
            boxShadow:"0 10px 25px rgba(0,0,0,.08)",
          }}
        >

          <input
            value={pesquisa}
            onChange={(e)=>setPesquisa(e.target.value)}
            placeholder="Pesquisar técnico..."
            style={{
              width:"100%",
              padding:14,
              borderRadius:12,
              border:"1px solid #CBD5E1",
              marginBottom:20,
            }}
          />

          <div
            style={{
              display:"grid",
              gap:12,
              maxHeight:600,
              overflowY:"auto",
            }}
          >

            {lista.map((tec)=>(

              <div

                key={tec.id}

                onClick={()=>setSelecionado(tec)}

                style={{

                  padding:16,

                  borderRadius:14,

                  cursor:"pointer",

                  border:

                    selecionado?.id===tec.id

                    ? "2px solid #2563EB"

                    : "1px solid #E5E7EB",

                  background:

                    selecionado?.id===tec.id

                    ? "#EFF6FF"

                    : "#FFF",

                }}

              >

                <strong>

                  👷 {tec.nome}

                </strong>

                <div
                  style={{
                    marginTop:8,
                    fontSize:14,
                    color:"#64748B",
                  }}
                >
                  {tec.online ? "🟢 Online" : "🔴 Offline"}
                </div>

                <div
                  style={{
                    marginTop:5,
                    fontSize:13,
                  }}
                >
                  📱 {tec.telefone || "Não informado"}
                </div>

                <div
                  style={{
                    marginTop:5,
                    fontSize:13,
                  }}
                >
                  👥 {tec.equipe || "-"}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div
          style={{
            background:"#FFF",
            borderRadius:20,
            padding:25,
            boxShadow:"0 10px 25px rgba(0,0,0,.08)",
          }}
        >

          {selecionado && (

            <>
                          <h2
                style={{
                  marginTop: 0,
                  color: "#0F2D73",
                }}
              >
                👷 {selecionado.nome}
              </h2>

              <p>🟢 {selecionado.online ? "Online" : "Offline"}</p>

              <p>📱 {selecionado.telefone || "Não informado"}</p>

              <p>👥 {selecionado.equipe || "-"}</p>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                  marginTop: 25,
                }}
              >

                <button
                  style={botaoVerde}
                  onClick={() =>
                    abrirWhatsApp(
                      "🌞 Bom dia, equipe! Favor dar início às atividades e manter o aplicativo Velox ativo durante todo o expediente. Bom trabalho a todos! 👷📡"
                    )
                  }
                >
                  🌞 Iniciar Atividades
                </button>

                <button
                  style={botaoVerde}
                  onClick={() =>
                    abrirWhatsApp(
                      "📞 Me ligue assim que visualizar esta mensagem."
                    )
                  }
                >
                  📞 Me Ligue
                </button>

                <button
                  style={botaoVerde}
                  onClick={() =>
                    abrirWhatsApp(
                      "🏠 Cliente ausente. Favor atualizar o status do atendimento no aplicativo e aguardar orientações da central."
                    )
                  }
                >
                  🏠 Cliente Ausente
                </button>

                <button
                  style={botaoWhats}
                  onClick={() => {

                    const telefone =
                      (selecionado.telefone || "")
                      .replace(/\D/g, "");

                    if (!telefone) {
                      alert("Telefone não cadastrado.");
                      return;
                    }

                    window.open(
                      `https://wa.me/55${telefone}`,
                      "_blank"
                    );

                  }}
                >
                  💬 Abrir Conversa
                </button>

                <a
                  href={`https://www.google.com/maps?q=${selecionado.latitude},${selecionado.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={botaoAzul}
                >
                  📍 Google Maps
                </a>

              </div>

              <div
                style={{
                  marginTop: 30,
                }}
              >

                <h3>Mensagem Personalizada</h3>

                <textarea
                  value={mensagem}
                  onChange={(e)=>setMensagem(e.target.value)}
                  rows={6}
                  style={{
                    width:"100%",
                    padding:15,
                    borderRadius:12,
                    border:"1px solid #CBD5E1",
                    resize:"none",
                  }}
                />

                <button
                  style={{
                    ...botaoAzul,
                    width:"100%",
                    marginTop:18,
                  }}
                  onClick={()=>abrirWhatsApp(mensagem)}
                >
                  📤 Enviar Mensagem
                </button>

              </div>

            </>

          )}

        </div>

      </div>

    </div>

  );

}

const botaoVerde = {

  background:"#22C55E",
  color:"#FFF",
  border:0,
  borderRadius:12,
  padding:"13px",
  cursor:"pointer",
  fontWeight:700,
  fontSize:15,

};

const botaoWhats = {

  background:"#25D366",
  color:"#FFF",
  border:0,
  borderRadius:12,
  padding:"13px",
  cursor:"pointer",
  fontWeight:700,
  fontSize:15,

};

const botaoAzul = {

  display:"block",
  textAlign:"center",
  background:"#0F2D73",
  color:"#FFF",
  border:0,
  borderRadius:12,
  padding:"13px",
  textDecoration:"none",
  cursor:"pointer",
  fontWeight:700,
  fontSize:15,

};
