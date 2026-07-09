import { useEffect, useState } from "react";
import { ouvirServicos, criarServico } from "../services/ServicosService";

export default function Servicos() {

  const [servicos, setServicos] = useState([]);

  useEffect(() => {

    const unsubscribe = ouvirServicos(setServicos);

    return () => unsubscribe();

  }, []);

  async function novaOS() {

    await criarServico({

      cliente: "Cliente Teste",

      endereco: "Rua das Flores, 100",

      cidade: "Caxias do Sul",

      tecnico: "",

      tecnicoId: "",

      tipo: "Instalação",

      status: "Pendente",

      valorProducao: 100,

      criadoEm: new Date(),

    });

  }

  return (

    <div
      style={{
        padding: 30,
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >

        <h1
          style={{
            margin: 0,
            color: "#0F2D73",
          }}
        >
          📋 Ordens de Serviço
        </h1>

        <button
          onClick={novaOS}
          style={{
            background: "#2563EB",
            color: "#FFF",
            border: "none",
            borderRadius: 14,
            padding: "14px 24px",
            cursor: "pointer",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          + Nova Ordem de Serviço
        </button>

      </div>

      <div
        style={{
          background: "#FFF",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
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

              <th style={{ padding: 18 }}>Cliente</th>

              <th>Endereço</th>

              <th>Cidade</th>

              <th>Status</th>

              <th>Técnico</th>

              <th>Valor</th>

            </tr>

          </thead>

          <tbody>

            {servicos.map((item) => (

              <tr
                key={item.id}
                style={{
                  borderBottom: "1px solid #E5E7EB",
                }}
              >

                <td style={{ padding: 18 }}>
                  {item.cliente}
                </td>

                <td>{item.endereco}</td>

                <td>{item.cidade}</td>

                <td>{item.status}</td>

                <td>{item.tecnico || "-"}</td>

                <td>
                  R$ {item.valorProducao}
                </td>

              </tr>

            ))}

            {servicos.length === 0 && (

              <tr>

                <td
                  colSpan="6"
                  style={{
                    padding: 60,
                    textAlign: "center",
                    color: "#64748B",
                  }}
                >
                  Nenhuma Ordem de Serviço cadastrada.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}