const templateCard = (Urlimg,title)=>{
    return `
        <div class="target">
            <img src="${Urlimg}" >    
            <h3 class ="titleCard">${title}</h2 >
        </div>
    `
}
export {
    templateCard
} 

