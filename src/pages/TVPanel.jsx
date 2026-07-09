import "../styles/tv.css";

import TopBar from "../components/tv/TopBar";
import NOCBar from "../components/dashboard/NOCBar";
import StatusBar from "../components/tv/StatusBar";
import NewsTicker from "../components/tv/NewsTicker";

import TVMap from "../components/tv/TVMap";
import TVAlerts from "../components/tv/TVAlerts";
import TVRanking from "../components/tv/TVRanking";
import TVProduction from "../components/tv/TVProduction";
import TVWeather from "../components/tv/TVWeather";

export default function TVPanel() {

  return (

    <div
      className="tv"
      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(180deg,#02102D,#08245D)",

        padding: 20,

        boxSizing: "border-box",

      }}
    >

      {/* TOPO */}

      <TopBar />

      <div style={{ height: 15 }} />

      {/* NOC */}

      <NOCBar />

      <div style={{ height: 15 }} />

      {/* STATUS */}

      <StatusBar />

      <div style={{ height: 20 }} />

      {/* CONTEÚDO */}

      <div
        style={{

          display: "grid",

          gridTemplateColumns: "70% 30%",

          gap: 20,

          height: "calc(100vh - 330px)",

        }}
      >

        {/* MAPA */}

        <div
          style={{
            height: "100%",
          }}
        >

          <TVMap />

        </div>

        {/* LATERAL */}

        <div
          style={{

            display: "grid",

            gridTemplateRows:
              "1fr 1fr 1fr 1fr",

            gap: 18,

            height: "100%",

          }}
        >

          <TVAlerts />

          <TVRanking />

          <TVProduction />

          <TVWeather />

        </div>

      </div>

      <div style={{ height: 18 }} />

      {/* RODAPÉ */}

      <NewsTicker />

    </div>

  );

}