import React from 'react';
import homme from '../../photos/homme.jpg';
import './Profilepage.css';



function Profilepage() {
  return (
    <div className='profile_page'>

        <div className='container Profilecontainer'>
            <form method=''>
            
                <div className='Profile_structure'>
                    <div>
                        <img src={homme} alt='homme' className='Profileimagestyle'/>
                        
                        <p className='paragraphe'>Nom et Prénom : LADJEROUD Meziane</p>
                        <p className='paragraphe'>Spécialité : Ingénieur en Informatique</p>
                        <p className='paragraphe'>Grade : Chef de service </p>
                        <p className='paragraphe'>Role : Superviseur</p>
                        <p className='paragraphe'>Email : Ladjeroud.meziane@spe.dz</p>
                        <p className='paragraphe'>N° Téléphone : +213558784512</p>
                          
                    </div>
                    <div class="topnav">
                        <a class="active" href="#">Editer Profile</a>
                        <a href="#">Notification</a>  
                    </div>
                    
                    <h1 className='EditerTitel'>Editer votre Profile ici </h1>
                    <input type="text" className='inputClasse' placeholder='   Entrer le nouveau numéro de téléphone'></input>
                    <input type="text" className='inputClasse2' placeholder='  Entrer le nouveau Email'></input>
                    <input type="file" className='inputClasse3' placeholder='Choisir une nouvel photo'></input>
                    <button className='buttonValidation'>Valider Infos</button>
                    
                </div>

            </form>

        </div>
    </div>
  )
}

export default Profilepage