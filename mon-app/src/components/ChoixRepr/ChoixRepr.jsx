import React,{useState} from 'react';
import './ChoixRepr.css';
import '../../pages/CreatIndic/Creatindic.css';
import Multiselect from 'multiselect-react-dropdown';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FilterForm from '../FilterForm/FilterForm';


function ChoixRepr() {
    const dataIndic = [
        {Indic : 'indic1', id : 1},
        {Indic : 'indic2', id : 2},
        {Indic : 'indic3', id : 3},
        {Indic : 'indic4', id : 4},
    ]
    const dataGraphe = [
      {Graphe : 'Graphe1', id : 1},
      {Graphe : 'Graphe2', id : 2},
      {Graphe : 'Graphe3', id : 3},
      {Graphe : 'Graphe4', id : 4},
  ]
    const [optionsIndic] = useState(dataIndic);
    const [optionsGraphe] = useState(dataGraphe);
  return (
    <div className="formeBox">
      <FilterForm/>
            <h1 className="formeTitel">Choix de Représentation </h1>
            <div className='utilisateur_name'>
              <Multiselect options={optionsIndic} displayValue="Indic" name='' placeholder='Choisir les indicateurs à afficher '/>
            </div>
            <div className='utilisateur_name'>
              <Multiselect options={optionsGraphe} displayValue="Graphe" placeholder='Choisir le type de graphe'/>
            </div>
            
            <div className='Date'> 
            <div className='utilisateur_name'>
            <Stack component="form" noValidate spacing={3}>
                <TextField
                  id="datetime-local"
                  label="Date Début"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </Stack>
            </div>
            <div className='utilisateur_name'>
            <Stack component="form" noValidate spacing={3}>
                <TextField
                  id="datetime-local"
                  label="Date Fin"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            </Stack>
            </div>
            </div>
            <button className='buttonCreat'>Valider Infos</button>

        </div>
  )
}

export default ChoixRepr