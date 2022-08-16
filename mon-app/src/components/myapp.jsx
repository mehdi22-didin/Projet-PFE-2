import React from 'react';
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import '../app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Indicateur from "../pages/Indicateur/Indicateur";
import Creatindic from "../pages/CreatIndic/Creatindic";
import Affichagegraphe from "../pages/afficheGraphe/Affichagegraphe";
import Dashbord from "../pages/Dashbord/Dashbord";
import Essaie from "../pages/Essaie/Essaie";
import Utilisateurs from "../pages/Utilisateurs/Utilisateurs";


function Myapp() {
  return (
    <Router>
      <Topbar />
      <div className="container">  
        <Sidebar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          
          <Route path="/Indicateur" element={<Indicateur />}/>
          <Route path="/Dashbord" element={<Dashbord />}/>
          <Route path="/CreatIndic" element={<Creatindic />} />
          <Route path="/AffichageGraphe" element={<Affichagegraphe />} />
          <Route path="/Essaie" element={<Essaie />} />
          <Route path="/Utilisateurs" element={<Utilisateurs />} />
        </Routes> 
      </div> 
      </Router>
  )
}

export default Myapp