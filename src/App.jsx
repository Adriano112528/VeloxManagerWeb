import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";

import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./auth/Login";

import MainLayout from "./layouts/MainLayout";
import NOCTV from "./pages/NOCTV";

export default function App() {

  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>

                <MainLayout />

              </ProtectedRoute>
            }
          />

          <Route
            path="/tv"
            element={
              <ProtectedRoute>

                <NOCTV />

              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>

  );

}