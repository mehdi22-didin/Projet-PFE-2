import React, {useEffect, useState} from 'react';
import { Chart as ChartJS,LineElement,PointElement, CategoryScale, LinearScale,Title,Tooltip, Legend} from 'chart.js';
import {Line} from 'react-chartjs-2';

import '../../pages/CreatIndic/Creatindic.css'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
)
const LineChart = () => {
    const [data_table, setData] = useState([]);
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [qdate, setQdate] = useState("");

  useEffect(() =>{getData();})
  const getData = async() =>{
    await fetch("http://127.0.0.1:8000/GazIndic/generic/article/")
    .then((data1) => data1.json())
    .then((data2) => setData(data2));
  }

  function searchIndic1(rows){
    const result = rows.filter((row) => row.name.toLowerCase().includes(q1));
    return result
  }
  function searchIndic2(rows){
    const result = rows.filter((row) => row.name.toLowerCase().includes(q2));
    console.log(result);
    return result
  }
  function searchdate(rows){
    const result = rows.filter((row) =>  row.horaire.toLowerCase().includes(qdate));
    console.log(result);
    return result
  }
    const data =   {
      
        labels: searchdate(data_table).map(x => x.horaire),
        datasets: [
          {
            label: 'Indicateur-1',
            data: searchIndic1(data_table).map(x => x.valeur),
            borderColor: ['rgb(255, 99, 132)'],
            backgroundColor:['rgba(255, 99, 132, 0.2)'],
            yAxisID: 'y',
        },
      {
      label: 'Indicateur-2',
      data: searchIndic2(data_table).map(x => x.valeur),
      borderColor: ['rgb(255, 205, 86)'],
      backgroundColor: ['rgba(255, 205, 86, 0.2)',],
      yAxisID: 'y1',

      }]
    }
    var options = {
        responsive : true,
        maintainAspecRatio : false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins:{
          legend: {
            position: 'top',
          },
          title: {
             display: true,
             text: 'Représentation graphique correspondant à la recherche '
             }
         },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
    }

return (
    <div>
         <div>
        <input type="text"  className='input' placeholder=" Entrer une date spécifique " value={qdate} onChange={(e) => setQdate(e.target.value)}/>
      </div>
      <div>
        <input type="text"  className='input' placeholder=" Entrer le nom d'indicateur 1 " value={q1} onChange={(e) => setQ1(e.target.value)}/>
      </div>
      <div>
        <input type="text"  className='input' placeholder=" Entrer le nom d'indicateur 2 " value={q2} onChange={(e) => setQ2(e.target.value)}/>
      </div> 
      <div style={{height:"80vh", position:'relative', marginBottom:"1%", padding:"1%"}}>
      <Line 
        data={data}
        options={options}/>

      </div>
        
    </div>
  )
}

export default LineChart