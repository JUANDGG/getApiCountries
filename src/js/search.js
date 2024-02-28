import { load, mapForCountries, mapForCards } from "./loadCard.js";

document.addEventListener("DOMContentLoaded", () => {
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
    });
});



