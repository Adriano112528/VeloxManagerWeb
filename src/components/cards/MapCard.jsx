import { MapContainer, TileLayer } from "react-leaflet";

function MapCard() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: 25,
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        marginBottom: 20,
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
        <h2
          style={{
            margin: 0,
            color: "#071B52",
          }}
        >
          🗺️ Mapa dos Técnicos
        </h2>

        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          <span>🟢 Online</span>
          <span>🟡 Deslocamento</span>
          <span>🔵 Atendimento</span>
          <span>🔴 Offline</span>
        </div>
      </div>

      <div
        style={{
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[-29.1678, -51.1794]}
          zoom={9}
          style={{
            height: "450px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default MapCard;