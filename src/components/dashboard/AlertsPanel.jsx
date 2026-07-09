import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";

function corNivel(nivel) {
  switch ((nivel || "").toUpperCase()) {
    case "CRÍTICO":
      return "#EF4444";

    case "ATENÇÃO":
      return "#F59E0B";

    case "NORMAL":
      return "#22C55E";

    default:
      return "#2563EB";
  }
}

function iconeNivel(nivel) {
  switch ((nivel || "").toUpperCase()) {
    case "CRÍTICO":
      return "🔴";

    case "ATENÇÃO":
      return "🟡";

    case "NORMAL":
      return "🟢";

    default:
      return "🔵";
  }
}

export default function AlertsPanel() {

  const [alertas, setAlertas] = useState([]);

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirAlertas(setAlertas);

    return () => unsubscribe();

  }, []);

  const criticos =
    alertas.filter(a => a.nivel === "CRÍTICO").length;

  const atencao =
    alertas.filter(a => a.nivel === "ATENÇÃO").length;

  const normal =
    alertas.filter(a => a.nivel === "NORMAL").length;

  const informacao =
    alertas.filter(a => a.nivel === "INFORMAÇÃO").length;

  return (

    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 22,
        padding: 22,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >

      {/* CABEÇALHO */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 22,
        }}
      >

        <div>

          <h2
            style={{
              margin: 0,
              color: "#071B52",
              fontSize: 25,
            }}
          >
            🚨 Central de Alertas
          </h2>

          <div
            style={{
              marginTop: 6,
              color: "#64748B",
            }}
          >
            Eventos em tempo real
          </div>

        </div>

        <div
          style={{
            background: "#FEE2E2",
            color: "#DC2626",
            padding: "10px 18px",
            borderRadius: 12,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {alertas.length}
        </div>

      </div>

      {/* ALERTAS */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flex: 1,
          overflowY: "auto",
          maxHeight: 520,
          paddingRight: 6,
        }}
      >
                {alertas.length === 0 && (

          <div
            style={{
              textAlign: "center",
              padding: 60,
              color: "#94A3B8",
            }}
          >

            <div
              style={{
                fontSize: 70,
              }}
            >
              🔔
            </div>

            <h3
              style={{
                marginTop: 15,
                color: "#0F172A",
              }}
            >
              Nenhum alerta ativo
            </h3>

            <div>
              Os alertas aparecerão automaticamente.
            </div>

          </div>

        )}

        {alertas.map((item) => (

          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              padding: 18,
              borderRadius: 16,
              background: "#F8FAFC",
              borderLeft: `6px solid ${corNivel(item.nivel)}`,
              transition: ".25s",
            }}
          >

            <div
              style={{
                fontSize: 34,
              }}
            >
              {iconeNivel(item.nivel)}
            </div>

            <div
              style={{
                flex: 1,
              }}
            >

              <div
                style={{
                  fontWeight: "bold",
                  color: "#071B52",
                  fontSize: 16,
                }}
              >
                {item.titulo}
              </div>

              <div
                style={{
                  marginTop: 5,
                  color: "#64748B",
                }}
              >
                {item.descricao}
              </div>

            </div>

            <div
              style={{
                background: corNivel(item.nivel),
                color: "#FFF",
                padding: "8px 12px",
                borderRadius: 10,
                fontWeight: "bold",
                fontSize: 11,
                minWidth: 90,
                textAlign: "center",
              }}
            >
              {item.nivel}
            </div>

          </div>

        ))}
              </div>

      {/* RESUMO */}

      <div
        style={{
          marginTop: 20,
          background: "#F8FAFC",
          borderRadius: 16,
          padding: 18,
          border: "1px solid #E2E8F0",
        }}
      >
        <h3
          style={{
            margin: 0,
            marginBottom: 15,
            color: "#071B52",
            fontSize: 18,
          }}
        >
          📊 Resumo Operacional
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <div>
            🔴 Críticos <b>{criticos}</b>
          </div>

          <div>
            🟡 Atenção <b>{atencao}</b>
          </div>

          <div>
            🟢 Normal <b>{normal}</b>
          </div>

          <div>
            🔵 Informação <b>{informacao}</b>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            paddingTop: 15,
            borderTop: "1px solid #E2E8F0",
            textAlign: "center",
            color: "#64748B",
            fontWeight: "bold",
          }}
        >
          🔄 Atualização automática pelo Firebase
        </div>
      </div>

    </div>

  );
}