import React ,{useEffect, useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import './NouveauEssaie.css'

function NouveauEssaie(){

const [nomMatérielle, setNom] = useState("")
const [référenceMatérielle, setRéf] = useState("")
const [état, setEtat] = useState("Pas Encours")
const [début, setDateDébut] = useState("")
const [fin, setDateFin] = useState("")
const [équipe, setEquipe] = useState("")
const [users, setUser] = useState([])



useEffect(() =>{getUser();})
const getUser = async() =>{
await fetch("http://127.0.0.1:8000/GazIndic/generic/user/")
.then((data) => data.json())
.then((data) => setUser(data))  
}


const history = useNavigate();

const AddEssaieInfos = async() => {
    let formField = new FormData()

    formField.append('nomMatérielle', nomMatérielle)
    formField.append('référenceMatérielle', référenceMatérielle)
    formField.append('état', état) 
    formField.append('début', début) 
    formField.append('fin', fin) 
    formField.append('équipe', équipe) 

     
    const responseEssaie = axios.create({
      baseURL: "http://127.0.0.1:8000/GazIndic/generic/essaie/",
      withCredentials: true,
      xsrfHeaderName: 'X-CSRFToken',
      xsrfCookieName: 'csrftoken',
    })
    await responseEssaie({
      method: 'POST',
      url: "http://127.0.0.1:8000/GazIndic/generic/essaie/",
      data: formField,
    }) 
    .then((res) => {
      console.log(res.data)
      history('/Essaie')
    }) 
  }
  return (
    <div className='formeBox'>
            <h1 className="formeTitel">Programmer un Essaie </h1>
            <select name="équipe" value={équipe} onChange={(e) => setEquipe(e.target.value)} className='utilisateur_name'>
              <option>Selectioner un utilisateur</option>
              {users.map(user => <option key={user.id} value={user.username}>{user.username}</option>)}
            </select>
            {/* <div className='utilisateur_name'>
              <input type="text" name="équipe" value={équipe} placeholder=' Entrer le nom de matérielle' className='input' onChange={(e) => setEquipe(e.target.value)}/>
            </div> */}
            
            <div className='Date'> 
            <div className='utilisateur_name'>
            <Stack component="form" noValidate spacing={3}>
                <TextField
                  name='début'
                  value={début}
                  id="datetime-local"
                  label="Date Début"
                  type="datetime-local"
                  defaultValue=" "
                  onChange={(e) => setDateDébut(e.target.value)}
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
                  name='fin'
                  value={fin}
                  id="datetime-local"
                  label="Date Fin"
                  type="datetime-local"
                  onChange={(e) => setDateFin(e.target.value)}
                  defaultValue=" "
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            </Stack>
            </div>
            </div>
            <div className='utilisateur_name'>
              <input type="text" name="référenceMatérielle" value={référenceMatérielle} placeholder=' Entrer la référence matérielle' className='input' onChange={(e) => setRéf(e.target.value)}/>
            </div>
            <div className='utilisateur_name'>
              <input type="text" name="nomMatérielle" value={nomMatérielle} placeholder=' Entrer le nom de matérielle' className='input' onChange={(e) => setNom(e.target.value)}/>
            </div>
            <div className='utilisateur_name'>
            <select name="état" value={état} onChange={(e) => setEtat(e.target.value)} className='utilisateur_name'>
                <option value="">--Choisir un option--</option>
                <option value="Pas Encore" >Pas Encore</option>
                <option value="En cours" >En cours</option>
                <option value="Cloturer">Cloturer</option>
            </select>
            </div>
            

            <button className='buttonCreat' onClick={AddEssaieInfos}>Valider Infos</button>
    </div>
  )
}

export default NouveauEssaie