const uri ={
    protocol :"https",
    hostName: "restcountries.com",
    path :"v3.1/all"
};


const uriConexion  =`${uri.protocol}://${uri.hostName}/${uri.path}` ;

export {
    uriConexion
}
