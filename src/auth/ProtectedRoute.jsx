import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({

  children,

  permissoes = [],

}) {

  const {

    usuario,

    perfil,

    loading,

  } = useAuth();

  if (loading) {

    return (

      <div
        style={{

          width: "100vw",

          height: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          fontSize: 24,

          fontWeight: "bold",

          color: "#0F2D73",

        }}
      >

        Carregando...

      </div>

    );

  }

  if (!usuario) {

    return <Navigate to="/login" replace />;

  }

  if (

    permissoes.length > 0 &&

    !permissoes.includes(perfil)

  ) {

    return (

      <div
        style={{

          width: "100vw",

          height: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          flexDirection: "column",

          background: "#EEF3F9",

        }}
      >

        <h1
          style={{

            color: "#EF4444",

          }}
        >

          Acesso Negado

        </h1>

        <p>

          Você não possui permissão para acessar esta página.

        </p>

      </div>

    );

  }

  return children;

}