import {
  Server,
  Wifi,
  Activity,
  Database,
  MapPinned,
  Users,
} from "lucide-react";

const itens = [
  {
    titulo: "Servidor",
    valor: "ONLINE",
    cor: "#22C55E",
    icone: <Server size={28} />,
  },
  {
    titulo: "Firebase",
    valor: "Conectado",
    cor: "#3B82F6",
    icone: <Database size={28} />,
  },
  {
    titulo: "GPS",
    valor: "Ativo",
    cor: "#10B981",
    icone: <MapPinned size={28} />,
  },
  {
    titulo: "Aplicativo",
    valor: "20 Técnicos",
    cor: "#F59E0B",
    icone: <Users size={28} />,
  },
  {
    titulo: "Internet",
    valor: "100%",
    cor: "#06B6D4",
    icone: <Wifi size={28} />,
  },
  {
    titulo: "Sistema",
    valor: "Operando",
    cor: "#8B5CF6",
    icone: <Activity size={28} />,
  },
];

export default function OperationCenter() {
  return (
    <div
      style={{
        background: "#FFF",
        borderRadius: 22,
        padding: 24,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 25,
          color: "#0F2D73",
          fontSize: 28,
        }}
      >
        🖥 Centro de Monitoramento
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 18,
        }}
      >
        {itens.map((item) => (
          <div
            key={item.titulo}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 18,
              padding: 22,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: item.cor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                marginBottom: 18,
              }}
            >
              {item.icone}
            </div>

            <div
              style={{
                color: "#64748B",
                fontSize: 15,
              }}
            >
              {item.titulo}
            </div>

            <div
              style={{
                marginTop: 8,
                fontWeight: 800,
                fontSize: 22,
                color: "#071B52",
              }}
            >
              {item.valor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}