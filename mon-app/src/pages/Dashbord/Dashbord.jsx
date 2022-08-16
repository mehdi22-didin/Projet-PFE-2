import React from 'react';
import Chart from '../../components/Chart/Chart';
import './Dashbord.css';
import {userData} from '../../Data';
import Chartbar from '../../components/Chart/Chartbar';
import {useNavigate} from 'react-router-dom';
import Indicateur from '../Indicateur/Indicateur';

function Dashbord() {
  let navigate = useNavigate();
  return (
    <div className='Dashbord'>
        <div className="GrapheRecents">
          <h1 className="grapherecentsTitel">Graphes Recents</h1>
          <Chart data={userData} title='Evaluation de Indic1' grid dataKey='KWh'/>
          <Chartbar/>
          <button className='buttonGraphe' onClick={() => {navigate("/AffichageGraphe")}}>Afficher Graphe</button>   
        </div>
    </div>
  )
}

export default Dashbord