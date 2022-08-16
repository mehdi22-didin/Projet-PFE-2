export const userData = [
    {
      name: 'janv',
      KWh: 4000,
    },
    {
      name: 'févr',
      KWh: 3000,
    },
    { 
      name: 'mars',
      KWh: 2000,
    },
    {
      name: 'avr',
      KWh: 2780,
    },
    {
      name: 'mai',
      KWh: 1890,
    },
    {
      name: 'juin',
      KWh: 2390,
    },
    {
      name: 'juill',
      KWh: 3490,
    },
    {
        name: 'Aout',
        KWh: 2090,
    },
    {
        name: 'sept',
        KWh: 2580,
    },
    {
        name: 'oct',
        KWh: 2800,

    },
    {
        name: 'nov',
        KWh: 3590,
    },
    {
        name: 'déc',
        KWh: 4050,
    },
  ];  

export const indicRows = [
    // { id : '1',horaire:'22-04-2022 10:05',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '2',horaire:'22-04-2022 10:10',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '3',horaire:'22-04-2022 10:15',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '4',horaire:'22-04-2022 10:20',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '5',horaire:'22-04-2022 10:25',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '6',horaire:'22-04-2022 10:30',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '7',horaire:'22-04-2022 10:35',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '8',horaire:'22-04-2022 10:40',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '9',horaire:'22-04-2022 10:45',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '10',horaire:'22-04-2022 10:50',Indic: 'Débit_gaz', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '11',horaire:'22-04-2022 10:05' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '12',horaire:'22-04-2022 10:10' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '13',horaire:'22-04-2022 10:15' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '14',horaire:'22-04-2022 10:20' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '15',horaire:'22-04-2022 10:25' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '16',horaire:'22-04-2022 10:30' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '17',horaire:'22-04-2022 10:35' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '18',horaire:'22-04-2022 10:40' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '19',horaire:'22-04-2022 10:45' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '20',horaire:'22-04-2022 10:50' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},
    // { id : '21',horaire:'22-04-2022 10:55' ,Indic: 'Niveaux_Ballan', Val: '200', Réf_enreg:'DA-25234'},

  ];
export const indicColumns = [
    { field: 'ID', 
    headerName: 'ID', 
    width: 120, 
    editable: true, },
    {
      field: 'Horaire',
      headerName: 'Horaire',
      width: 250,
      editable: true,
    },
    {
      field: 'Indicateur',
      headerName: 'Indicateur',
      width: 200,
      editable: true,
    },
    {
      field: 'Valeur',
      headerName: 'Valeur',
      width: 200,
      editable: true,
    },
    {
      field: "Réf_Enregistreur\r",
      headerName: 'Réf_Enregistreur',
      width: 200,
      editable: true,
    },
  ];

  export const indicColumns2 = [
    { field: 'id', 
    headerName: 'ID', 
    width: 120, 
    editable: true, },
    {
      field: 'horaire',
      headerName: 'Horaire',
      width: 250,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Indicateur',
      width: 200,
      editable: true,
    },
    {
      field: 'valeur',
      headerName: 'Valeur',
      width: 200,
      editable: true,
    },
    {
      field: 'enregistreur',
      headerName: 'Réf_Enregistreur',
      width: 200,
      editable: true,
    },
    {
      field: 'code_couleur',
      headerName: 'Code_Couleur',
      width: 200,
      editable: true,
    },
  ];

  export const essaieColumns = [
    { field: 'id', 
    headerName: 'ID', 
    width: 120, 
    editable: true, },
    {
      field: 'début',
      headerName: 'Date Début',
      width: 250,
      editable: true,
    },
    {
      field: 'fin',
      headerName: 'Date Fin',
      width: 250,
      editable: true,
    },
    {
      field: 'équipe',
      headerName: " Qui fait l'essaie ?",
      width: 200,
      editable: true,
    },
    {
      field: 'nomMatérielle',
      headerName: 'Nom de matérielle',
      width: 200,
      editable: true,
    },
    {
      field: 'référenceMatérielle',
      headerName: 'Réf_Matérielle',
      width: 200,
      editable: true,
    },
    {
      field: 'état',
      headerName: "Etat d'essaie ",
      width: 200,
      editable: true,
    },
  ];
  export const essaieRows = [
    { id : '1',dateDébut:'22-04-2022 10:00',dateFin:'23-04-2022 10:00',equipeEssaie: 'Mehdi Bouzelak , Lajroud Mezianne', matérielleName: 'Matérielle-1', matérielleRef:'Référence-1',etatEssaie:'Completed'},
  ];
