import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <SideMenu />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
