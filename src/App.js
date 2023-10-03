import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnonymousLayout from "./layouts/AnonymousLayout ";
import MainLayout from "./layouts/MainLayout ";
import Login from "./pages/Login";
import About from "./pages/About";
import ListUsers from "./pages/ListUsers";



function App() {
  return (
    <div className="">
     <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<ListUsers />} />  
      <Route path="about" element={<About />} />  
      </Route>
      <Route path="/login" element={<AnonymousLayout />}>
      <Route index element={<Login />} />  
      </Route>
     </Routes>
      
    </div>
  );
}

export default App;
