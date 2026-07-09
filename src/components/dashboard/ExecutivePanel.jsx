import { useEffect, useState } from "react";
import {
  Server,
  Database,
  Wifi,
  Clock3,
  ShieldCheck,
  Activity,
} from "lucide-react";

import DashboardService from "../../services/DashboardService";

function StatusCard({ icon, titulo, valor, cor }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 170,
        background: "rgba(255,255,255,.10)",
        border: "1px solid rgba(255,255,255,.15)",
        borderRadius: 18,
        padding: 18,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: cor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
          }}
        >
          {icon}
        </div>

        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          {titulo}
        </div>
      </div>

      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
        }}
      >
        {valor}
      </div>
    </div>
  );
}

export default function ExecutivePanel() {
  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {
    const unsubscribe =
      DashboardService.ouvirTecnicos(setTecnicos);

    return () => unsubscribe();
  }, []);

  const online = tecnicos.filter((t) => t.online).length;

  const offline = tecnicos.length - online;

  const producao = tecnicos.reduce(
    (total, t) => total + (t.producao || 0),
    0
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0B2C73,#1E4ED8)",
        borderRadius: 24,
        padding: 28,
        color: "#FFF",
        marginBottom: 25,
        boxShadow: "0 15px 35px rgba(0,0,0,.18)",
      }}
    >
      {/* CABEÇALHO */}

      <div
        style={{
          marginBottom: 25,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          🛰️ CENTRO OPERACIONAL VELOX
        </h1>

        <div
          style={{
            marginTop: 8,
            fontSize: 17,
            opacity: 0.9,
          }}
        >
          Monitoramento em tempo real da infraestrutura e dos serviços
        </div>
      </div>

      {/* CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 18,
        }}
      >
        <StatusCard
          icon={<Server size={22} />}
          titulo="Servidor"
          valor="Online"
          cor="#22C55E"
        />

        <StatusCard
          icon={<Database size={22} />}
          titulo="Firebase"
          valor="Conectado"
          cor="#2563EB"
        />

        <StatusCard
          icon={<Wifi size={22} />}
          titulo="GPS"
          valor={`${online} Online`}
          cor="#F59E0B"
        />

        <StatusCard
          icon={<Clock3 size={22} />}
          titulo="Última Sincronização"
          valor="Agora"
          cor="#8B5CF6"
        />

        <StatusCard
          icon={<ShieldCheck size={22} />}
          titulo="Backup"
          valor="OK"
          cor="#10B981"
        />

        <StatusCard
          icon={<Activity size={22} />}
          titulo="Latência"
          valor="12 ms"
          cor="#EF4444"
        />

        <StatusCard
          icon={<Database size={22} />}
          titulo="Técnicos"
          valor={`${tecnicos.length} cadastrados`}
          cor="#06B6D4"
        />

        <StatusCard
          icon={<Activity size={22} />}
          titulo="Produção"
          valor={`R$ ${producao.toLocaleString("pt-BR")}`}
          cor="#F97316"
        />
      </div>

      {/* RESUMO */}

      <div
        style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
          borderTop: "1px solid rgba(255,255,255,.15)",
          paddingTop: 20,
        }}
      >
        <div>
          <strong>🟢 Online:</strong> {online}
        </div>

        <div>
          <strong>⚪ Offline:</strong> {offline}
        </div>

        <div>
          <strong>👷 Total:</strong> {tecnicos.length}
        </div>

        <div>
          <strong>💰 Produção:</strong> R${" "}
          {producao.toLocaleString("pt-BR")}
        </div>
      </div>
    </div>
  );
}