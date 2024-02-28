import { load, mapForCountries, mapForCards } from "./loadCard.js";
import {getInformationTargetEvent} from "./sweetAlert.js";
document.addEventListener("DOMContentLoaded", () => {

    load(mapForCards());
    getInformationTargetEvent();

    const search = document.querySelector("#searchCountry");

    let typingTimer;  
    const doneTypingInterval = 50;  

    search.addEventListener("input", () => {
        clearTimeout(typingTimer);  
        typingTimer = setTimeout(() => {
            let countryName = search.value.trim().toLowerCase();
            if (countryName === "") {
                load(mapForCards());

            } else {
                load(mapForCountries(countryName));  

            }
        }, doneTypingInterval);

        setTimeout(() => {
            getInformationTargetEvent();
        },1000)

        
    });
});



