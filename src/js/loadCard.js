import {getDatalocalStorage} from './uploadLocalStorage.js';
import {templateCard} from './template.js';

const mapForCards =  ()=>{
    let coutriesCards =getDatalocalStorage().map(element => {
        return {
            "urlImage" :element["flags"]["png"],
            "nameOfficial": element["name"]["official"]    
        }
        
    }  )

    return coutriesCards  ;
}



const mapForOneCard =(nameCountry)=>{
    let coutrieCard =getDatalocalStorage()
    .filter(element => element["name"]["official"].toLowerCase() ==nameCountry.toLowerCase())
    .map(element => {
        return {
            "urlImage" :element["flags"]["png"],
            "nameOfficial": element["name"]["official"] ,
            "capitalCountry" :element["capital"][0]  ,
            "region" :element["region"]
        }
        
    }  )

    console.log(coutrieCard) ;

    return coutrieCard  ;
}


const load = (data) =>{
    const containerCards = document.querySelector(".containerCards");

    data.forEach(element => {
        let renderedTemplate= templateCard(element.urlImage,element.nameOfficial)
        containerCards.innerHTML += renderedTemplate
        
    });



    // si hay un evento de targeta alguien le da click
    document.querySelectorAll(".targeta").forEach(tarjeta => {
        tarjeta.addEventListener("click", (e) => {
            const tarjetaPadre = e.target.closest(".targeta");
            console.log(tarjetaPadre);
            window.location.href = "info.html";

        });
    });



    

}




load(mapForCards())

export {
    mapForOneCard
}



