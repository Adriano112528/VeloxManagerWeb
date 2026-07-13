import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  ScrollText,
  Settings,
} from "lucide-react";

const itens = [

  {
    id: "dashboardMaster",
    nome: "Dashboard",
    icone: <LayoutDashboard size={22} />,
  },

  {
    id: "empresas",
    nome: "Empresas",
    icone: <Building2 size={22} />,
  },

  {
    id: "usuarios",
    nome: "Usuários",
    icone: <Users size={22} />,
  },

  {
    id: "permissoes",
    nome: "Permissões",
    icone: <Shield size={22} />,
  },

  {
    id: "auditoria",
    nome: "Auditoria",
    icone: <ScrollText size={22} />,
  },

  {
    id: "configMaster",
    nome: "Configurações",
    icone: <Settings size={22} />,
  },

];

export default function MenuAdmin({

  pagina,

  setPagina,

}) {

  return (

    <div

      style={{

        width:260,

        background:"#071B52",

        borderRadius:22,

        padding:20,

        color:"#FFF",

      }}

    >

      <h2

        style={{

          marginTop:0,

          marginBottom:25,

          textAlign:"center",

        }}

      >

        👑 MASTER

      </h2>

      {

        itens.map((item)=>(

          <div

            key={item.id}

            onClick={()=>setPagina(item.id)}

            style={{

              display:"flex",

              alignItems:"center",

              gap:15,

              padding:15,

              marginBottom:10,

              borderRadius:14,

              cursor:"pointer",

              background:

                pagina===item.id

                ? "#2563EB"

                : "transparent",

            }}

          >

            {item.icone}

            <span>

              {item.nome}

            </span>

          </div>

        ))

      }

    </div>

  );

}