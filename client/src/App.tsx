import Login from "./routes/Login/Login";
import Search from "./routes/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router";
import UserContext from "./context/userContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
