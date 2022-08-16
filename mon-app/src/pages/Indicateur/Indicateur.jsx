import React, { Component, useState , useEffect} from 'react';
import './Indicateur.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
// import {indicRows} from '../../Data';
import {indicColumns2} from '../../Data';
import {useNavigate} from 'react-router-dom';

// import {renderTotalPrice, useDemoData } from '@mui/x-data-grid-generator';
// import FlatfileImporter from 'flatfile-csv-importer';
// import { FlatfileButton } from '@flatfile/react'

/* FlatfileImporter.setVersion(2)
const licence = '2f9147e4-dda8-4ed7-a281-69aef4634a88';

const FlatfileConfig = {
  type: "FlatFile Test",
  fields: [
    {
      label : "ID",
      key : "id",
    },
    {
      label : "Horaire",
      key : "horaire",
    },
    {
      label : "Indicateur",
      key : "Indic",
    },
    {
      label : "Valeur",
      key : "Val",
    },
    {
      label : "Réf-Enregistreur",
      key : "ref",
    },
  ]
} 
const importer = new FlatfileImporter(licence, FlatfileConfig)
importer.setCustomer(
  {userId: "12334"}
) */
/*const LaunchflatFile = () => {
  importer.requestDataFromUser().then(results =>{
    importer.displayLoader();
    setTimeout(() =>{
      importer.displaySuccess("Import Done !!!");
      console.log(JSON.stringify(results.validData, null, 2))
    }, 1500)
  })
}*/

function Indicateur() {
  

  let navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  useEffect(() =>{getData();})
  const getData = async() =>{
    await fetch("http://127.0.0.1:8000/GazIndic/article")
    .then((data) => data.json())
    .then((data) => setTableData(data))  
  }

  // const addIndic = async () => {
  //   await fetch("http://127.0.0.1:8000/GazIndic/article", {
  //     method :'POST',
  //     headers: {"Content-type":"application/json; charset=UTF-8"},
  //     body : JSON.stringify(indic)
  //   })
  //   .then((res) => {
  //     if(res.status !== 201){
  //       return
  //     }else {
  //       return res.json();
  //     }
  //   })
  //   .then((data) => {
  //     setTableData((tableData) => [...tableData], data);
  //   })
  // }
  
  return (
    <div className='indicateur'>
       <h1 className='indicTitel'>Indicateur à suivre</h1>
       <DataGrid
        rows={tableData}
        columns={indicColumns2}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='indic_table'/> 
        {/* <div className="button">
        <button className='buttonIndic' onClick={() => {navigate("/CreatIndic")}}>Créer Indicateur ou Importer Fichier</button>
        <button className='buttonIndic' onClick={() => {navigate("/AffichageGraphe")}}>Afficher Graphe</button> */}
        {/* <FlatfileButton
        settings={{
            type: "test import",
            fields: [
              {
                label : "ID",
                key : "id",
              },
              {
                label : "Horaire",
                key : "horaire",
              },
              {
                label : "Indicateur",
                key : "Indic",
              },
              {
                label : "Valeur",
                key : "Val",
              },
              {
                label : "Réf-Enregistreur",
                key : "ref",
              }
            ]
        }}
        licenseKey={"2f9147e4-dda8-4ed7-a281-69aef4634a88"}
        customer={{
            userId: "12334"
        }}
        onData={async (results) => {
          // do something with the results
          console.log(results)
        }}
        onRecordChange={ (record) =>
          {return { name: { value: record.name + " from change" }
        }}}
        onRecordInit={(record) =>
          {return { name: { value: record.name + " from init" }
        }}}
        fieldHooks={{
          /* email: (values) =>
            {return values.map(([item, index]) => [
              { value: item + ".au" },
              index
            ]);
          } 
           email: async (values) => {
            let serverResults;
            await fetch(
              "https://my-json-server.typicode.com/flatfilers/csb-api/users"
            )
              .then((response) => response.json())
              .then((json) => {
                serverResults = json.map((x) => {
                  return x.email;
                });
              });
            let changeValues = [];
            values.forEach((item) => {
              if (serverResults.includes(item[0])) {
                changeValues.push([
                  {
                    info: [
                      {
                        message:
                          "Duplicate record. This user is already in the database.",
                        level: "error"
                      }
                    ]
                  },
                  item[1]
                ]);
              }
            });
            return changeValues;
          }
        }}
        onCancel={() => {
          console.log("cancel");
        }}
        render={(_importer, launch) => {
          return <button onClick={launch}>Upload file</button>;
        }}
      /> */}
        {/* </div>   */}
    </div>
  )
} 


export default Indicateur