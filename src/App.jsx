import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import CommunityPage from "./pages/CommunityPage";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <SideMenu />
        <Routes>
          <Route path="/accueil" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/" element={<Navigate to="/profile" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
