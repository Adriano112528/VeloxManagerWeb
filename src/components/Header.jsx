import { useEffect, useState } from "react";
import {
  Menu,
  Bell,
  Wifi,
  UserCircle2,
  Server,
  Activity,
} from "lucide-react";

export default function Header({ open, setOpen }) {
  const [agora, setAgora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const data = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const hora = agora.toLocaleTimeString("pt-BR");

  return (
    <header
      style={{
        height: 95,
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 35px",
        borderBottom: "1px solid #E5E7EB",
        boxShadow: "0 8px 20px rgba(0,0,0,.06)",
      }}
    >
      {/* ESQUERDA */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
        }}
      >
        <Menu
          size={30}
          style={{
            cursor: "pointer",
            color: "#0F2D73",
          }}
          onClick={() => setOpen(!open)}
        />

        <div>
          <div
            style={{
              fontSize: 31,
              fontWeight: 800,
              color: "#0F2D73",
            }}
          >
            PAINEL ADMINISTRATIVO VELOX
          </div>

          <div
            style={{
              color: "#64748B",
              marginTop: 4,
              fontSize: 15,
            }}
          >
            Centro Operacional • Monitoramento em Tempo Real
          </div>
        </div>
      </div>

      {/* CENTRO */}

      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#F8FAFC",
            padding: "12px 18px",
            borderRadius: 14,
            textAlign: "center",
            minWidth: 260,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#64748B",
            }}
          >
            DATA
          </div>

          <div
            style={{
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "capitalize",
            }}
          >
            {data}
          </div>
        </div>

        <div
          style={{
            background: "#EEF4FF",
            padding: "12px 18px",
            borderRadius: 14,
            minWidth: 150,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#64748B",
            }}
          >
            HORA
          </div>

          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#2563EB",
              fontFamily: "monospace",
            }}
          >
            {hora}
          </div>
        </div>

        <div
          style={{
            background: "#DCFCE7",
            color: "#15803D",
            padding: "14px 18px",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: "bold",
          }}
        >
          <Wifi size={18} />
          Sistema Online
        </div>

        <div
          style={{
            background: "#EFF6FF",
            color: "#2563EB",
            padding: "14px 18px",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: "bold",
          }}
        >
          <Server size={18} />
          Firebase OK
        </div>

        <div
          style={{
            background: "#FFF7ED",
            color: "#EA580C",
            padding: "14px 18px",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: "bold",
          }}
        >
          <Activity size={18} />
          20 Técnicos
        </div>
      </div>

      {/* DIREITA */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            position: "relative",
            cursor: "pointer",
          }}
        >
          <Bell
            size={26}
            color="#0F2D73"
          />

          <div
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#EF4444",
              color: "#FFF",
              fontSize: 11,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            3
          </div>
        </div>

        <div
          style={{
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#0F2D73",
            }}
          >
            Adriano Rodrigues
          </div>

          <div
            style={{
              color: "#64748B",
              fontSize: 14,
            }}
          >
            Administrador Geral
          </div>
        </div>

        <UserCircle2
          size={52}
          color="#0F2D73"
        />
      </div>
    </header>
  );
}