import { useEffect, useState } from "react";
import "../styles/dashboard.css";

import ExecutivePanel from "../components/dashboard/ExecutivePanel";
import DashboardMap from "../components/dashboard/DashboardMap";
import AlertsPanel from "../components/dashboard/AlertsPanel";
import ProductionChart from "../components/dashboard/ProductionChart";
import TechnicianTable from "../components/dashboard/TechnicianTable";
import WeatherCard from "../components/dashboard/WeatherCard";

import DashboardService from "../services/DashboardService";

function DashboardCard({
  titulo,
  valor,
  subtitulo,
  cor,
  icone,
  progresso,
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 22,
        padding: 24,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8,
          height: "100%",
          background: cor,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
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
              fontSize: 34,
              fontWeight: 800,
              color: "#071B52",
            }}
          >
            {valor}
          </div>
        </div>

        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: cor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 34,
            color: "#FFF",
            boxShadow: `0 10px 25px ${cor}55`,
          }}
        >
          {icone}
        </div>
      </div>

      <div
        style={{
          marginTop: 22,
          height: 8,
          borderRadius: 20,
          background: "#EEF2F7",
        }}
      >
        <div
          style={{
            width: progresso,
            height: "100%",
            borderRadius: 20,
            background: cor,
          }}
        />
      </div>

      <div
        style={{
          marginTop: 12,
          color: "#64748B",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {subtitulo}
      </div>
    </div>
  );
}

export default function Dashboard() {

  const [dashboard, setDashboard] = useState({
    tecnicos: [],
    servicos: [],
    alertas: [],
    gps: [],
    producao: [],
  });

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirDashboard(setDashboard);

    return () => unsubscribe();

  }, []);

  const online =
    dashboard.tecnicos.filter((t) => t.online).length;

  const producaoTotal =
    dashboard.tecnicos.reduce(
      (total, t) => total + (t.producao || 0),
      0
    );

  return (

    <div className="dashboardPage">

      <ExecutivePanel />

      <section className="cards">

        <DashboardCard
          titulo="👷 Técnicos Online"
          valor={online}
          subtitulo={`${dashboard.tecnicos.length} cadastrados`}
          cor="#22C55E"
          icone="👷"
          progresso="100%"
        />

        <DashboardCard
          titulo="📋 Serviços"
          valor={dashboard.servicos.length}
          subtitulo="Serviços cadastrados"
          cor="#2563EB"
          icone="📋"
          progresso="100%"
        />

        <DashboardCard
          titulo="💰 Produção"
          valor={`R$ ${producaoTotal.toLocaleString("pt-BR")}`}
          subtitulo="Produção acumulada"
          cor="#10B981"
          icone="💰"
          progresso="100%"
        />

        <DashboardCard
          titulo="🚨 Alertas"
          valor={dashboard.alertas.length}
          subtitulo="Alertas ativos"
          cor="#EF4444"
          icone="🚨"
          progresso="100%"
        />

      </section>
            <section className="dashboardGrid">

        <DashboardMap />

        <AlertsPanel />

      </section>

      {/* PRODUÇÃO + CLIMA */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 20,
          marginTop: 25,
          alignItems: "stretch",
        }}
      >

        <ProductionChart />

        <WeatherCard />

      </section>

      {/* TÉCNICOS */}

      <section
        style={{
          marginTop: 25,
        }}
      >

        <TechnicianTable />

      </section>

    </div>

  );

}