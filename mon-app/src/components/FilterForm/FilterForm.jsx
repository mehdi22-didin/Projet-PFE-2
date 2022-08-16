import React, {useState, useEffect} from 'react';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {indicColumns2} from '../../Data';
import DataTable from '../DataTable/DataTable';

function FilterForm() {
  const [data_table, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() =>{getData();})
  const getData = async() =>{
    await fetch("http://127.0.0.1:8000/GazIndic/generic/article/")
    .then((data1) => data1.json())
    .then((data2) => setData(data2));
  }

  function search(rows){
    const result = rows.filter((row) => row.name.toLowerCase().includes(q));
    return result


  }
  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
      </div>
        
      {/* <DataTable data={search(data_table)}/> */}
      <DataGrid
        rows={search(data_table)}
        columns={indicColumns2}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='indic_table'/> 
      
   
    </div>
    
  )
}

export default FilterForm