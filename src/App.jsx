import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import UnderConstructionPage from "./pages/UnderConstructionPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <SideMenu />
        <Routes>
          <Route
            path="/accueil"
            element={<UnderConstructionPage title="Page d'accueil" />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/settings"
            element={<UnderConstructionPage title="Page Réglage" />}
          />
          <Route
            path="/community"
            element={<UnderConstructionPage title="Page Communauté" />}
          />
          <Route path="/" element={<Navigate to="/profile" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
