import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import {userData} from '../../Data';
import {indicRows} from '../../Data';
import {indicColumns} from '../../Data';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title='Evaluation de Production' grid dataKey='KWh'/>
        <div style={{ display: 'flex', height: '60vh' }}>
        <div style={{ flexGrow: 1 }}>
        <DataGrid
        
        rows={indicRows}
        columns={indicColumns}
        pageSize={4}
        checkboxSelection
        disableSelectionOnClick
        className='indic_table'/>
        </div>
        </div>
    </div>
  )
}

export default Home