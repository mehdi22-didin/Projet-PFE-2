import React  from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './app.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Indicateur from "./pages/Indicateur/Indicateur";
import Creatindic from "./pages/CreatIndic/Creatindic";
import Affichagegraphe from "./pages/afficheGraphe/Affichagegraphe";
import Dashbord from "./pages/Dashbord/Dashbord";
import Essaie from "./pages/Essaie/Essaie";
import Utilisateurs from "./pages/Utilisateurs/Utilisateurs";
import Form from "./components/Login/Login";
import Side_bar from "./components/sidebare2/side_bar";
import Sidebar3 from "./components/sidebar3/Sidebar3";
import CréerIndicateur from "./pages/Cration_indicateur/CréerIndicateur";
import Enre_numérique from "./pages/Enregistrement_numérique/Enre_numérique";






function App(){
    return (
      <Router>
        <Topbar />
        <div className="container">  
        <Sidebar3 />
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
           <Route path="/indicateur/SaisieManuelle" element={<Indicateur />}/>
           <Route path="/Essaie" element={<Essaie />} />
           <Route path="/Dashbord" element={<Dashbord />}/>
           <Route path="/Utilisateurs" element={<Utilisateurs />} /> 
           <Route path="/Login" element={<Form />} />
           <Route path="/indicateur/CreatIndic" element={<CréerIndicateur />} />
           <Route path="/indicateur/EnregistrementNum" element={<Enre_numérique />} />
           <Route path="/AffichageGraphe" element={<Affichagegraphe />} />

        </Routes>
        </div>
     </Router>
        
      
     
      // <Router> 
      // <Topbar />
      // <div className="container">  
      //   <Sidebar />
      //   <Routes> 
      //     <Route path="/Home" element={<Home />} />
      //     <Route path="/" element={<Home />} />
      //     <Route path="/Indicateur" element={<Indicateur />}/>
      //     <Route path="/Dashbord" element={<Dashbord />}/>
      //     <Route path="/CreatIndic" element={<Creatindic />} />
      //     <Route path="/AffichageGraphe" element={<Affichagegraphe />} />
      //     <Route path="/Essaie" element={<Essaie />} />
      //     <Route path="/Utilisateurs" element={<Utilisateurs />} /> 
      //     <Route path="/Login" element={<Form />} />
      //   </Routes> 
      // </div> 
      // </Router>
  )
}


export default App;
