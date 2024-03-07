//Mettre le code JavaScript lié à la page photographer.html

const paramSearch = window.location.search
const urlParams = new URLSearchParams(paramSearch)

const photographId = +urlParams.get('id')



async function getPhotographer() {

    const response = await fetch('.data/photographers.json')
    const data = await response.json()

    let myPhotographer = data.photographers.find((photographer) => {
        console.log(myPhotographer);
        return photographer.id === photographId;
        

    })


}
