import { useEffect, useState } from "react";

import DashboardService from "../services/DashboardService";

import {
  excluirTecnico,
} from "../services/CadastroTecnicoService";

export default function Tecnicos({ setPagina }) {

  const [tecnicos, setTecnicos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirCadastroTecnicos(setTecnicos);

    return () => unsubscribe();

  }, []);

  const lista = tecnicos.filter((t) =>

    (t.nome || "")
      .toLowerCase()
      .includes(pesquisa.toLowerCase())

  );

  return (



  <div
    style={{
      padding: 25,
    }}
  >
          {/* CABEÇALHO */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
          flexWrap: "wrap",
          gap: 15,
        }}
      >

        <div>

          <h1
            style={{
              margin: 0,
              color: "#0F2D73",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            👷 Técnicos
          </h1>

          <div
            style={{
              marginTop: 6,
              color: "#64748B",
              fontSize: 16,
            }}
          >
            Cadastro Geral de Técnicos
          </div>

        </div>

        <button
          onClick={() => setPagina("novoTecnico")}
          style={{
            background: "#2563EB",
            color: "#FFF",
            border: 0,
            borderRadius: 14,
            padding: "14px 26px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
            boxShadow: "0 10px 20px rgba(37,99,235,.25)",
          }}
        >
          + Novo Técnico
        </button>

      </div>

      {/* RESUMO */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 18,
          marginBottom: 25,
        }}
      >

        <Resumo
          titulo="Total"
          valor={tecnicos.length}
          cor="#2563EB"
        />

        <Resumo
          titulo="Online"
          valor={tecnicos.filter(t => t.online).length}
          cor="#22C55E"
        />

        <Resumo
          titulo="Offline"
          valor={tecnicos.filter(t => !t.online).length}
          cor="#EF4444"
        />

        <Resumo
          titulo="Produção"
          valor={`R$ ${tecnicos.reduce((s, t) => s + (t.producao || 0), 0)}`}
          cor="#F59E0B"
        />

      </div>

      {/* PESQUISA */}

      <div
        style={{
          background: "#FFF",
          padding: 20,
          borderRadius: 18,
          marginBottom: 20,
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >

        <input
          type="text"
          placeholder="Pesquisar técnico..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 12,
            border: "1px solid #CBD5E1",
            fontSize: 16,
            outline: "none",
          }}
        />

      </div>

      {/* TABELA */}

      <div
        style={{
          background: "#FFF",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead
            style={{
              background: "#0F2D73",
              color: "#FFF",
            }}
          >

            <tr>

              <th style={{ padding: 18 }}>Nome</th>

              <th>Equipe</th>

              <th>Status</th>

              <th>Produção</th>

              <th>GPS</th>

              <th>Ações</th>

            </tr>

          </thead>

          <tbody>
                        {lista.map((tec) => (

              <tr
                key={tec.id}
                style={{
                  borderBottom: "1px solid #E5E7EB",
                }}
              >

                <td style={{ padding: 18 }}>
                  <strong>{tec.nome}</strong>
                </td>

                <td>{tec.equipe || "-"}</td>

                <td>

                  <span
                    style={{
                      background: tec.online ? "#DCFCE7" : "#FEE2E2",
                      color: tec.online ? "#15803D" : "#DC2626",
                      padding: "7px 14px",
                      borderRadius: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {tec.online ? "🟢 Online" : "🔴 Offline"}
                  </span>

                </td>

                <td>

                  <strong>
                    R$ {(tec.producao || 0).toLocaleString("pt-BR")}
                  </strong>

                </td>

                <td>

                  {tec.gps || tec.latitude
                    ? "📍 Ativo"
                    : "⚪ Sem GPS"}

                </td>

                <td>

                  <button
  onClick={() => {

    localStorage.setItem(
      "tecnicoEditar",
      JSON.stringify(tec)
    );

    setPagina("novoTecnico");

  }}
                    style={{
                      background: "#2563EB",
                      color: "#FFF",
                      border: 0,
                      borderRadius: 8,
                      padding: "8px 14px",
                      marginRight: 8,
                      cursor: "pointer",
                    }}
                  >
                    Editar
                  </button>

                  <button
                    onClick={async () => {

                      const confirmar =
                        window.confirm(
                          `Deseja excluir ${tec.nome}?`
                        );

                      if (!confirmar) return;

                      try {

                        await excluirTecnico(
                          tec.id
                        );

                        alert(
                          "✅ Técnico excluído."
                        );

                      } catch (erro) {

                        console.error(erro);

                        alert(
                          "Erro ao excluir técnico."
                        );

                      }

                    }}
                    style={{
                      background: "#EF4444",
                      color: "#FFF",
                      border: 0,
                      borderRadius: 8,
                      padding: "8px 14px",
                      cursor: "pointer",
                    }}
                  >
                    Excluir
                  </button>

                </td>

              </tr>

            ))}

            {lista.length === 0 && (

              <tr>

                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: 60,
                    color: "#64748B",
                    fontSize: 17,
                  }}
                >
                  Nenhum técnico cadastrado.
                </td>

              </tr>

            )}
                      </tbody>

        </table>

      </div>

    </div>

  );

}

function Resumo({ titulo, valor, cor }) {

  return (

    <div
      style={{
        background: "#FFF",
        borderRadius: 18,
        padding: 22,
        borderTop: `6px solid ${cor}`,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >

      <div
        style={{
          color: "#64748B",
          fontSize: 15,
        }}
      >
        {titulo}
      </div>

      <div
        style={{
          marginTop: 10,
          fontSize: 30,
          fontWeight: 800,
          color: cor,
        }}
      >
        {valor}
      </div>

    </div>

  );

}
