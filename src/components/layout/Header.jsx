import {
  FaBell,
  FaUserCircle,
  FaBars,
  FaSearch,
} from "react-icons/fa";

function Header({ open, setOpen }) {
  return (
    <header
      style={{
        height: 82,
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        borderBottom: "1px solid #E5E7EB",
        boxShadow: "0 4px 18px rgba(0,0,0,.06)",
        zIndex: 20,
      }}
    >
      {/* ESQUERDA */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 46,
            height: 46,
            border: "none",
            borderRadius: 12,
            background: "#EEF3F9",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          <FaBars />
        </button>

        <div>
          <h2
            style={{
              margin: 0,
              color: "#071B52",
            }}
          >
            Velox Manager Enterprise
          </h2>

          <div
            style={{
              color: "#64748B",
              marginTop: 4,
              fontSize: 14,
            }}
          >
            Centro de Operações • Dashboard Executivo
          </div>
        </div>
      </div>

      {/* CENTRO */}

      <div
        style={{
          width: 420,
          position: "relative",
        }}
      >
        <FaSearch
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "#94A3B8",
          }}
        />

        <input
          placeholder="Pesquisar técnico, cliente, protocolo..."
          style={{
            width: "100%",
            height: 48,
            borderRadius: 14,
            border: "1px solid #E5E7EB",
            paddingLeft: 45,
            fontSize: 15,
            outline: "none",
            background: "#F8FAFC",
          }}
        />
      </div>

      {/* DIREITA */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 25,
        }}
      >
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            fontSize: 22,
          }}
        >
          <FaBell />

          <div
            style={{
              position: "absolute",
              right: -3,
              top: -3,
              width: 10,
              height: 10,
              background: "#EF4444",
              borderRadius: "50%",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FaUserCircle
            size={38}
            color="#2563EB"
          />

          <div>
            <div
              style={{
                fontWeight: "bold",
                color: "#071B52",
              }}
            >
              Adriano Rodrigues
            </div>

            <div
              style={{
                color: "#64748B",
                fontSize: 13,
              }}
            >
              Administrador
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;