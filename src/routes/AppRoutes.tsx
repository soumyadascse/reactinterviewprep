import {
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import TopicPage from "../pages/TopicPage";
import Playground from "../pages/Playground";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<MainLayout />}
      >

        <Route
          index
          element={<Home />}
        />

        <Route
          path="/topic/:topic"
          element={<TopicPage />}
        />

        <Route
          path="/playground"
          element={<Playground />}
        />

      </Route>

    </Routes>
  );
}