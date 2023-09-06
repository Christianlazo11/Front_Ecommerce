import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./pages/Home";
import { NavigationBar } from "./components/navbar/NavigationBar";
import { Login } from "./pages/Login";
function App() {


  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
