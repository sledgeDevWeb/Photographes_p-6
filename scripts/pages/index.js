// async function getPhotographers() {
//     // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
//     // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
//     let photographers = [
//         {
//             "name": "Ma data test",
//             "id": 1,
//             "city": "Paris",
//             "country": "France",
//             "tagline": "Ceci est ma data test",
//             "price": 400,
//             "portrait": "EllieRoseWilkens.jpg"
//         },
//         {
//             "name": "Autre data test",
//             "id": 2,
//             "city": "Londres",
//             "country": "UK",
//             "tagline": "Ceci est ma data test 2",
//             "price": 500,
//             "portrait": "account.png"
//         },
//     ]
//     // et bien retourner le tableau photographers seulement une fois récupéré
//     return ({
//         photographers: [...photographers, ...photographers, ...photographers]})
// }

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");
//       // Récupération des données depuis le fichier photographers.json
//   const response = await fetch('./data/photographers.json')
//   const data = await response.json()

//     photographers.forEach((photographer) => {
//         const photographerModel = photographerTemplate(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// }

// async function init() {
//     // Récupère les datas des photographes
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
// }

// init();


// Import du modèle de photographe depuis le fichier photographersFactory.js
// import { photographerTemplate } from './templates/photographersFactory.js'

// Fonction asynchrone pour récupérer et afficher les photographes
// async function fetchAndDisplayPhotographers() {
    
  // Récupération des données depuis le fichier photographers.json
  const getPhotographers = async function(){
   const reponse2 = await fetch('./data/photographers.json');
   const data = await reponse2.json();
  
//    console.log(...data.photographers);
   return data;
   
   
}
// reponse();

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();


//   const response = await fetch('./data/photographers.json')
//   const mydata = await response.json()


//   for (let i = 0; i <mydata .length; i++) {
//     const Myphotographe = mydata[i];

   


//     const photoElement = document.createElement("article");

//     const nomElement = document.createElement("h2");
//     nomElement.innerText = article.name;
    
    
    
    
//     photographersSection.appendChild(photoElement);
//     photoElement.appendChild(nomElement);
//   }




//   // Extraction de la liste des photographes depuis les données
//   const photographers = data.photographers

//   // Parcours de la liste des photographes
//   for (const photographer of photographers) {
//     // Création d'un modèle de photographe en utilisant le template
//     const photographerModel = photographerTemplate(photographer)

//     // Obtention de l'élément HTML correspondant au photographe
//     const photographerDOM = photographerModel.getPhotographerDOM()

//     // Ajout de l'élément HTML au sein de l'élément avec la classe 'hero'
//     document.querySelector('.hero').appendChild(photographerDOM)
//   }
// }
// // Appel de la fonction pour récupérer et afficher les photographes
// fetchAndDisplayPhotographers()