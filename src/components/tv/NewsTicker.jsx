import { useEffect, useMemo, useState } from "react";
import DashboardService from "../../services/DashboardService";

export default function NewsTicker() {

  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {

    const unsubscribe =
      DashboardService.ouvirTecnicos(setTecnicos);

    return () => unsubscribe();

  }, []);

  const mensagens = useMemo(() => {

    const lista = [];

    tecnicos.forEach((tec) => {

      if (tec.online) {

        lista.push(
          `🟢 ${tec.nome} está online`
        );

      } else {

        lista.push(
          `🔴 ${tec.nome} está offline`
        );

      }

      if ((tec.bateria || 0) < 20) {

        lista.push(
          `🔋 ${tec.nome} bateria ${tec.bateria}%`
        );

      }

      if (tec.latitude && tec.longitude) {

        lista.push(
          `📡 GPS ativo de ${tec.nome}`
        );

      }

    });

    if (lista.length === 0) {

      lista.push(
        "📡 Aguardando técnicos conectarem ao sistema..."
      );

    }

    return lista.join("   •   ");

  }, [tecnicos]);

  return (

    <div
      style={{
        background: "#041433",
        borderTop: "3px solid #2563EB",
        color: "#FFFFFF",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderRadius: 14,
        height: 48,
        display: "flex",
        alignItems: "center",
      }}
    >

      <style>

        {`

        @keyframes ticker {

          0% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(-100%);
          }

        }

        `}

      </style>

      <div
        style={{
          display: "inline-block",
          animation: "ticker 45s linear infinite",
          fontSize: 20,
          fontWeight: 700,
          paddingLeft: 30,
        }}
      >
        {mensagens}
      </div>

    </div>

  );

}