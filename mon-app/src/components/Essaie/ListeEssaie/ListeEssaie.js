import React from 'react';
import './ListeEssaie.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {essaieColumns} from '../../../Data';
import { essaieRows} from '../../../Data';

function ListeEssaie() {
  return (
    <div>
        <DataGrid
        rows={essaieRows}
        columns={essaieColumns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='essaieTable'/>
        
        
    </div>
  )
}

export default ListeEssaie