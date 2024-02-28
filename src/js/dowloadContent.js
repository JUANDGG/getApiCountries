
import {uriConexion}  from "../../persistence/conexion.js";



const httpRequest = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request error: ${respuesta.status}`);
    }
    return await response.json();
}

const request = httpRequest(uriConexion);

export {
    request
}