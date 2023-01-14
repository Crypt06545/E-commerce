import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route to='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route to='/' element={!user ? <Login /> : <Navigate to='/login' />} />
        <Route to='*' element={<Navigate to='/' />} />
      </Routes>

    </>
  )
}

export default App;