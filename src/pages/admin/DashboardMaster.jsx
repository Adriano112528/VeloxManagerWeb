import MenuAdmin from "../../components/admin/MenuAdmin";
import { useState } from "react";

export default function DashboardMaster() {

  const [pagina, setPagina] =
    useState("dashboardMaster");

  return (

    <div
      style={{
        display: "flex",
        gap: 25,
      }}
    >

      <MenuAdmin
        pagina={pagina}
        setPagina={setPagina}
      />

      <div
        style={{
          flex: 1,
        }}
      >

        <h1
          style={{
            color: "#071B52",
            marginTop: 0,
            marginBottom: 30,
          }}
        >
          👑 Dashboard MASTER
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
          }}
        >

          <Card
            titulo="Empresas"
            valor="1"
            cor="#2563EB"
          />

          <Card
            titulo="Usuários"
            valor="1"
            cor="#0EA5E9"
          />

          <Card
            titulo="Técnicos Online"
            valor="0"
            cor="#22C55E"
          />

          <Card
            titulo="Licenças"
            valor="1"
            cor="#F59E0B"
          />

          <Card
            titulo="Servidor"
            valor="🟢"
            cor="#16A34A"
          />

          <Card
            titulo="Firebase"
            valor="🟢"
            cor="#EF4444"
          />

        </div>

      </div>

    </div>

  );

}

function Card({

  titulo,

  valor,

  cor,

}) {

  return (

    <div
      style={{
        background: "#FFF",
        borderRadius: 20,
        padding: 25,
        boxShadow:
          "0 12px 25px rgba(0,0,0,.08)",
      }}
    >

      <div
        style={{
          color: "#64748B",
          fontSize: 15,
        }}
      >
        {titulo}
      </div>

      <div
        style={{
          marginTop: 15,
          fontSize: 36,
          fontWeight: "bold",
          color: cor,
        }}
      >
        {valor}
      </div>

    </div>

  );

}