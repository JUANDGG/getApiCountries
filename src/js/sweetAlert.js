import {mapForOneCard} from "./loadCard.js";


const buildSweetAlert =(UrlImage,title,capital,region)=>{
    return Swal.fire({
        imageUrl: UrlImage,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "image country",
        title ,
        text: capital,
        text: region
    
    });
}


const loadModal =(sweetAlertFunction)=>{
    
}



// event when click in the target
document.addEventListener("DOMContentLoaded", function() {
    const getInformationTargetEvent = () => {
        const elementsTarget = document.querySelectorAll(".target");

        elementsTarget.forEach(element => {
            element.addEventListener("click", (e) => {
                const targetaPadre = e.target.closest(".target");
                console.log(targetaPadre);
            });
        });
    }
    getInformationTargetEvent();
});






