import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import NOCTV from "./pages/NOCTV";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<MainLayout />}
        />

        <Route
          path="/tv"
          element={<NOCTV />}
        />

      </Routes>

    </BrowserRouter>

  );

}