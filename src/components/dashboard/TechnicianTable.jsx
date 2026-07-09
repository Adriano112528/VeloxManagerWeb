import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { realtimeDb } from "../../firebase";

export default function TechnicianTable() {
  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {
    const gpsRef = ref(realtimeDb, "gps");

    const unsubscribe = onValue(gpsRef, (snapshot) => {
      if (!snapshot.exists()) {
        setTecnicos([]);
        return;
      }

      const dados = snapshot.val();

      const lista = Object.entries(dados).map(([id, tecnico]) => ({
        id,
        ...tecnico,
      }));

      setTecnicos(lista);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: 25,
        marginTop: 25,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: 20,
          color: "#0F2D73",
        }}
      >
        👷 Técnicos em Campo
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#F8FAFC",
            }}
          >
            <th style={th}>Técnico</th>
            <th style={th}>Status</th>
            <th style={th}>GPS</th>
            <th style={th}>Velocidade</th>
            <th style={th}>Bateria</th>
            <th style={th}>Precisão</th>
            <th style={th}>Última Atualização</th>
          </tr>
        </thead>

        <tbody>
          {tecnicos.map((tec) => (
            <tr
              key={tec.id}
              style={{
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <td style={td}>
                <strong>{tec.nome}</strong>
              </td>

              <td style={td}>
                <span
                  style={{
                    background: tec.online ? "#22C55E" : "#EF4444",
                    color: "#FFF",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  {tec.status}
                </span>
              </td>

              <td style={td}>
                {tec.online ? "🟢 Online" : "🔴 Offline"}
              </td>

              <td style={td}>
                {(Number(tec.velocidade || 0) * 3.6).toFixed(1)} km/h
              </td>

              <td style={td}>
                {tec.bateria}%
              </td>

              <td style={td}>
                {tec.precisao} m
              </td>

              <td style={td}>
                {new Date(
                  tec.ultimaAtualizacao
                ).toLocaleString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {tecnicos.length === 0 && (
        <div
          style={{
            marginTop: 20,
            textAlign: "center",
            color: "#64748B",
            fontSize: 16,
          }}
        >
          Nenhum técnico encontrado.
        </div>
      )}
    </div>
  );
}

const th = {
  padding: 16,
  textAlign: "left",
  color: "#64748B",
  fontSize: 15,
  fontWeight: "bold",
};

const td = {
  padding: 16,
  fontSize: 15,
  color: "#1E293B",
};