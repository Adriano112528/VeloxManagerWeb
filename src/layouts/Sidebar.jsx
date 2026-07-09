import {
  LayoutDashboard,
  Users,
  ClipboardList,
  MapPinned,
  BarChart3,
  Boxes,
  FileText,
  Settings,
  Tv,
  Menu,
} from "lucide-react";

const menu = [
  { id: "dashboard", nome: "Dashboard", icone: <LayoutDashboard size={26} /> },
  { id: "tecnicos", nome: "Técnicos", icone: <Users size={26} /> },
  { id: "mapa", nome: "Mapa", icone: <MapPinned size={26} /> },
  { id: "servicos", nome: "Serviços", icone: <ClipboardList size={26} /> },
  { id: "producao", nome: "Produção", icone: <BarChart3 size={26} /> },
  { id: "tv", nome: "Painel TV", icone: <Tv size={26} /> },
  { id: "relatorios", nome: "Relatórios", icone: <FileText size={26} /> },
  { id: "estoque", nome: "Estoque", icone: <Boxes size={26} /> },
  { id: "config", nome: "Configurações", icone: <Settings size={26} /> },
];

export default function Sidebar({
  open,
  pagina,
  setPagina,
}) {

  return (

    <aside
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: open ? 290 : 90,
        background: "linear-gradient(180deg,#071B52,#143D8D)",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: ".35s",
        boxShadow: "8px 0 35px rgba(0,0,0,.25)",
        zIndex: 999,
      }}
    >

      <div>

        <div
          style={{
            height: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            padding: "0 25px",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >

          {open && (
            <img
              src="/logo.png"
              alt="Velox"
              style={{ width: 170 }}
            />
          )}

          <Menu
            size={28}
            style={{
              cursor: "pointer",
            }}
          />

        </div>

        <div
          style={{
            padding: "20px 16px",
          }}
        >

          {menu.map((item) => (

            <div
              key={item.id}
              onClick={() => setPagina(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "16px 18px",
                marginBottom: 10,
                borderRadius: 16,
                cursor: "pointer",
                transition: ".25s",

                background:
                  pagina === item.id
                    ? "#2563EB"
                    : "transparent",

                borderLeft:
                  pagina === item.id
                    ? "5px solid #60A5FA"
                    : "5px solid transparent",
              }}
            >

              <div
                style={{
                  width: 34,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.icone}
              </div>

              {open && (

                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  {item.nome}
                </span>

              )}

            </div>

          ))}

        </div>

      </div>
            {open && (

        <div
          style={{
            padding: 22,
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        >

          <div
            style={{
              background: "rgba(255,255,255,.08)",
              borderRadius: 18,
              padding: 18,
            }}
          >

            <div
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              🟢 Firebase Online
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                opacity: .8,
              }}
            >
              Última sincronização
              <br />
              Agora mesmo
            </div>

          </div>

          <div
            style={{
              marginTop: 20,
              textAlign: "center",
            }}
          >

            <img
              src="/ars.png"
              alt="ARS"
              style={{
                width: 140,
                marginBottom: 12,
              }}
            />

            <div
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Velox Manager
            </div>

            <div
              style={{
                fontSize: 13,
                opacity: .7,
                marginTop: 4,
              }}
            >
              Enterprise 2.0
            </div>

          </div>

        </div>

      )}

    </aside>

  );

}