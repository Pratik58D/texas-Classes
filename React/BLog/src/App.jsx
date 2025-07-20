import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import DashboardHome from "./components/Dashboard/pages/DashboardHome";
import Profile from "./components/Dashboard/pages/Profile";
import Setting from "./components/Dashboard/pages/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
