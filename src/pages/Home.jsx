import Dashboard from "./Dashboard";
import Tecnicos from "./Tecnicos";
import NovoTecnico from "./NovoTecnico";
import Servicos from "./Servicos";
import TVPanel from "./TVPanel";
import Comunicacao from "./Comunicacao";

export default function Home({ pagina, setPagina }) {

  switch (pagina) {

    case "dashboard":
      return (
        <Dashboard
          setPagina={setPagina}
        />
      );

    case "tecnicos":
      return (
        <Tecnicos
          setPagina={setPagina}
        />
      );

    case "novoTecnico":
      return (
        <NovoTecnico
          setPagina={setPagina}
        />
      );

    case "servicos":
      return (
        <Servicos
          setPagina={setPagina}
        />
      );

    case "mapa":
      return (
        <Dashboard
          setPagina={setPagina}
        />
      );

    case "producao":
      return (
        <Dashboard
          setPagina={setPagina}
        />
      );

    case "tv":
      return <TVPanel />;

    case "comunicacao":
      return <Comunicacao />;

    case "relatorios":
      return (
        <h1
          style={{
            color: "#0F2D73",
            fontSize: 34,
          }}
        >
          📄 Relatórios
        </h1>
      );

    case "estoque":
      return (
        <h1
          style={{
            color: "#0F2D73",
            fontSize: 34,
          }}
        >
          📦 Estoque
        </h1>
      );

    case "config":
      return (
        <h1
          style={{
            color: "#0F2D73",
            fontSize: 34,
          }}
        >
          ⚙️ Configurações
        </h1>
      );

    default:
      return (
        <Dashboard
          setPagina={setPagina}
        />
      );

  }

}