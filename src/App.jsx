import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/landing";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
