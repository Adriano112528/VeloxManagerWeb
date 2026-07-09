import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";

export default function StatusBar() {

  const [tecnicos, setTecnicos] = useState([]);
  const [producao, setProducao] = useState([]);
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {

    const stopTecnicos =
      DashboardService.ouvirTecnicos(setTecnicos);

    const stopProducao =
      DashboardService.ouvirProducao(setProducao);

    const stopAlertas =
      DashboardService.ouvirAlertas(setAlertas);

    return () => {

      stopTecnicos();
      stopProducao();
      stopAlertas();

    };

  }, []);

  const online =
    tecnicos.filter(t => t.online).length;

  const offline =
    tecnicos.length - online;

  const gps =
    tecnicos.filter(
      t => t.latitude && t.longitude
    ).length;

  const valorProducao =
    producao.reduce(
      (s, item) =>
        s + Number(item.valor || 0),
      0
    );

  const cards = [

    {
      titulo:"👷 ONLINE",
      valor:online,
      cor:"#22C55E",
      fundo:"#ECFDF5",
    },

    {
      titulo:"🔴 OFFLINE",
      valor:offline,
      cor:"#EF4444",
      fundo:"#FEF2F2",
    },

    {
      titulo:"📡 GPS",
      valor:gps,
      cor:"#2563EB",
      fundo:"#EFF6FF",
    },

    {
      titulo:"💰 PRODUÇÃO",
      valor:`R$ ${valorProducao.toLocaleString("pt-BR")}`,
      cor:"#F59E0B",
      fundo:"#FFFBEB",
    },

    {
      titulo:"🚨 ALERTAS",
      valor:alertas.length,
      cor:"#8B5CF6",
      fundo:"#F5F3FF",
    },

  ];

  return (

    <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(5,1fr)",
        gap:18,
      }}
    >

      {cards.map(card=>(

        <div
          key={card.titulo}
          style={{
            background:card.fundo,
            borderRadius:22,
            padding:22,
            borderLeft:`8px solid ${card.cor}`,
            boxShadow:"0 10px 25px rgba(0,0,0,.12)",
            transition:".3s",
          }}
        >

          <div
            style={{
              color:"#475569",
              fontWeight:700,
              fontSize:17,
              letterSpacing:1,
            }}
          >
            {card.titulo}
          </div>

          <div
            style={{
              marginTop:18,
              color:card.cor,
              fontSize:42,
              fontWeight:900,
            }}
          >
            {card.valor}
          </div>

        </div>

      ))}

    </div>

  );

}