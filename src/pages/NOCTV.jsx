import TopBar from "../components/tv/TopBar";
import NOCBar from "../components/dashboard/NOCBar";
import StatusBar from "../components/tv/StatusBar";

import TVMap from "../components/tv/TVMap";
import TVAlerts from "../components/tv/TVAlerts";
import TVRanking from "../components/tv/TVRanking";
import TVProduction from "../components/tv/TVProduction";
import TVWeather from "../components/tv/TVWeather";
import NewsTicker from "../components/tv/NewsTicker";

export default function NOCTV() {

  return (

    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",

        background:
          "linear-gradient(180deg,#02102D,#08245D)",

        display: "grid",

        gridTemplateRows:
          "110px 70px 95px 1fr 45px",

        gap: 12,

        padding: 12,

        boxSizing: "border-box",
      }}
    >

      <TopBar />

      <NOCBar />

      <StatusBar />

      <div
        style={{
          display: "grid",

          gridTemplateColumns: "74% 26%",

          gap: 12,

          overflow: "hidden",
        }}
      >

        <TVMap />

        <div
          style={{
            display: "grid",

            gridTemplateRows:
              "1fr 1fr 1fr 1fr",

            gap: 12,

            overflow: "hidden",
          }}
        >

          <TVAlerts />

          <TVRanking />

          <TVProduction />

          <TVWeather />

        </div>

      </div>

      <NewsTicker />

    </div>

  );

}