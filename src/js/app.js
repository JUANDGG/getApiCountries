

import {uri}  from "/conexion.js";
import {targetaPlantilla} from "/plantillas.js";

const uriConexion  =`${uri.protocol}://${uri.hostName}/${uri.path}`

const setLocalStorage = () =>{

}


const paraTargetas = async (url)=>{
    const datos = await peticion(url);
    let lista =datos.map(elemento => {
        return {
            "urlImage" :elemento["flags"]["png"],
            "nameOfficial": elemento["name"]["official"]    
        }
        
    }  )

    return lista  ;
}




const cargarTargeta = async(url) =>{
    const contenido = document.querySelector(".contenido");
    const fragmento = document.createDocumentFragment();
    const datos = await paraTargetas(url);

    
    datos.forEach(elemento => {
        let ele = targetaPlantilla(elemento.urlImage,elemento.nameOfficial)
        contenido.innerHTML += ele
        
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

// aqui cargo todas las targetast
cargarTargeta(uriConexion);



// aqui  voy a controlar cuando alguien le de click ala targeta


