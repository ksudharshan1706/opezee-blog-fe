import Topbar from "./componants/topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import { useContext } from "react";
import { Context } from "./context/Context";
import Contactus from "./pages/contactus/Contactus";
import About from "./pages/aboutus/About";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={user ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={user ? <Single /> : <Login />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/contact" element={user ? <Contactus /> : <Login />} />
        <Route path="/about" element={user ? <About /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
