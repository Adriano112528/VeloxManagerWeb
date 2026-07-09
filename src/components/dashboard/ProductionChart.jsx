import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const dados = [
  { dia: "Seg", valor: 3200 },
  { dia: "Ter", valor: 4100 },
  { dia: "Qua", valor: 3900 },
  { dia: "Qui", valor: 5200 },
  { dia: "Sex", valor: 4800 },
  { dia: "Sáb", valor: 6100 },
  { dia: "Dom", valor: 5420 },
];

export default function ProductionChart() {
  return (
    <div
      style={{
        background: "#FFF",
        borderRadius: 22,
        padding: 25,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#0F2E72",
            }}
          >
            📈 Produção da Semana
          </h2>

          <div
            style={{
              color: "#64748B",
              marginTop: 6,
            }}
          >
            Evolução financeira em tempo real
          </div>
        </div>

        <div
          style={{
            background: "#DCFCE7",
            color: "#15803D",
            padding: "10px 18px",
            borderRadius: 30,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          ▲ +18%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <AreaChart data={dados}>
          <defs>
            <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />

          <XAxis dataKey="dia" />

          <YAxis />

          <Tooltip
            formatter={(v) => [`R$ ${v}`, "Produção"]}
          />

          <Area
            type="monotone"
            dataKey="valor"
            stroke="#2563EB"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorProd)"
            dot={{
              r: 6,
              fill: "#2563EB",
            }}
            activeDot={{
              r: 9,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}