const button = document.querySelector("#button-search");
const cardContent = document.querySelector(".card-content");



function getURL(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const regionName = urlSearchParams.get("regionName").replace(" ", "+");
    const url =  `https://maratur.onrender.com/region?regionName=${regionName}`;
    return url

}


async function getAttractive(){
    const response = await fetch(getURL());
    const data = await response.json();
    return data
}


async function showAttractive(){
    const result = await getAttractive();

    result.map(elem => {
        const divCard = document.createElement("div");
        const title = document.createElement("H2");
        const type = document.createElement("p");
        const region = document.createElement("p");
        const city = document.createElement("p");
        const link = document.createElement("a");

        divCard.setAttribute("class", "box-card");
        title.setAttribute("class", "title-card");
        type.setAttribute("class", "type-card");
        region.setAttribute("class", "region-card");
        city.setAttribute("class", "city-card");

        

        title.innerText = elem.name;
        type.innerText = `Tipo: ${elem.type}`;
        region.innerText =`Região: ${elem.region}`;
        city.innerText = `Cidade: ${elem.city}`;


        link.appendChild(title);
        link.setAttribute("href", `showAttractive.html?id=${elem.id}`) 
        divCard.appendChild(link);
        divCard.appendChild(type);
        divCard.appendChild(region);
        divCard.appendChild(city);    

        cardContent.appendChild(divCard)
    });
    
}


showAttractive();







