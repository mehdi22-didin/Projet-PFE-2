import React from 'react';
import './Utilisateurs.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {indicRows} from '../../Data';
import {indicColumns2} from '../../Data';


function Utilisateurs() {
  return (
    <div className='utilisateurs'>
       <DataGrid
        rows={indicRows}
        columns={indicColumns2}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='indic_table'/> 
    </div>
  )
}

export default Utilisateurs