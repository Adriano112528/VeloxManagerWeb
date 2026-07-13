import {
  LayoutDashboard,
  Users,
  MapPinned,
  ClipboardList,
  BarChart3,
  Tv,
  FileText,
  Boxes,
  Settings,
  Menu,
  MessageCircle,
} from "lucide-react";

const menu = [
  {
    id: "dashboard",
    nome: "Dashboard",
    icone: <LayoutDashboard size={24} />,
  },
  {
    id: "tecnicos",
    nome: "Técnicos",
    icone: <Users size={24} />,
  },
  {
    id: "mapa",
    nome: "Mapa",
    icone: <MapPinned size={24} />,
  },
  {
    id: "servicos",
    nome: "Serviços",
    icone: <ClipboardList size={24} />,
  },
  {
    id: "producao",
    nome: "Produção",
    icone: <BarChart3 size={24} />,
  },
  {
    id: "tv",
    nome: "Painel TV",
    icone: <Tv size={24} />,
  },
  {
    id: "comunicacao",
    nome: "Comunicação",
    icone: <MessageCircle size={24} />,
  },
  {
    id: "relatorios",
    nome: "Relatórios",
    icone: <FileText size={24} />,
  },
  {
    id: "estoque",
    nome: "Estoque",
    icone: <Boxes size={24} />,
  },
  {
    id: "config",
    nome: "Configurações",
    icone: <Settings size={24} />,
  },
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
        boxShadow: "8px 0 30px rgba(0,0,0,.25)",
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
            padding: "0 20px",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >

          {open && (

            <img
              src="/logo.png"
              alt="Velox"
              style={{
                width: 165,
              }}
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
            padding: 18,
          }}
        >

          {menu.map((item) => {

            const ativo =
              pagina === item.id;

            return (

              <div
                key={item.id}
                onClick={() => {

                  console.log("Mudando para:", item.id);

                  setPagina(item.id);

                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "16px 18px",
                  marginBottom: 10,
                  borderRadius: 16,
                  cursor: "pointer",
                  userSelect: "none",
                  transition: ".25s",

                  background: ativo
                    ? "#2563EB"
                    : "transparent",

                  borderLeft: ativo
                    ? "5px solid #60A5FA"
                    : "5px solid transparent",
                }}
              >

                <div
                  style={{
                    width: 30,
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

            );

          })}

        </div>

      </div>
            {open && (

        <div
          style={{
            padding: 20,
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