import React from 'react'; 
import Chart from '../../components/Chart/Chart';
import ChoixRepr from '../../components/ChoixRepr/ChoixRepr';
import './Affichagegraphe.css';
import {userData} from '../../Data';
import FilterForm from '../../components/FilterForm/FilterForm';
import LineChart from '../../components/Chart/LineChart';

function Affichagegraphe() {
    
  
  return (
    <div className='Affichagegraphe'>
      <div className="Représentation">
      <h1 className="formeTitel">Représentation Graphique</h1>
      {/* <Chart data={userData}  grid dataKey='KWh'/> */}
      <LineChart/>
      </div>
      
    </div>
  )
}

export default Affichagegraphe;