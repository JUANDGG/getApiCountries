import {mapForOneCard} from "./loadCard.js";


const buildSweetAlert = (UrlImage, title, capital, region) => {
    return Swal.fire({
        imageUrl: UrlImage,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "image country",
        title,
        text: `Capital: ${capital}\nRegion: ${region}`
    });
}


const loadModal =(nameCountry)=>{

    const countryInformation =mapForOneCard(nameCountry)
   
    buildSweetAlert(
        countryInformation[0]["urlImage"],
        countryInformation[0]["nameOfficial"],
        countryInformation[0]["capitalCountry"],
        countryInformation[0]["region"]
    )
    
}



// event when click in the target


const getInformationTargetEvent = () => {
    
    const elementsTarget = document.querySelectorAll(".target");

    elementsTarget.forEach(element => {
        
        element.addEventListener("click", (e) => {

            const cardMain = e.target.closest(".target");
            const endChild = cardMain.lastElementChild.textContent;
            console.log(endChild);
            loadModal(endChild);


        });
    });
}


export {
    getInformationTargetEvent
}












