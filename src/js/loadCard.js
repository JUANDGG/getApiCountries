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


const mapForCountries = (countryName) => {
    let myCountries = mapForCards().filter(country => country["nameOfficial"].toLowerCase().includes(countryName));
    return  countryName.length ==0 ? mapForCards() :  myCountries;
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

    containerCards.innerHTML ="";
    data.forEach(element => {
        let renderedTemplate= templateCard(element.urlImage,element.nameOfficial)
        containerCards.innerHTML += renderedTemplate
        
    });

}






export {
    mapForCards,
    mapForOneCard,
    load ,
    mapForCountries
}



