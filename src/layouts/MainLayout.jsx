import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Home from "../pages/Home";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [pagina, setPagina] = useState("dashboard");

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        background: "#EEF3F9",
      }}
    >
      {/* MENU */}

      <Sidebar
        open={sidebarOpen}
        pagina={pagina}
        setPagina={setPagina}
      />

      {/* CONTEÚDO */}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: sidebarOpen ? 290 : 90,
          transition: ".35s",
          minHeight: "100vh",
        }}
      >
        <Header
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        <main
          style={{
            flex: 1,
            padding: 25,
            background: "#EEF3F9",
            overflowY: "auto",
          }}
        >
          <Home
            pagina={pagina}
            setPagina={setPagina}
          />
        </main>
      </div>
    </div>
  );
}