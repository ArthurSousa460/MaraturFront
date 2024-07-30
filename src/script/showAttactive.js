const container = document.querySelector(".container");
const titleDocument = document.querySelector("#title-document");
;

const map = L.map('map')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


function getURLParams(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");
    const origin = urlSearchParams.get("origin");
    return {
        id: id,
        origin: origin
    };
}



async function getAttractive(){
    const {id, origin} = getURLParams();
    console.log(id, origin);
    const response = await fetch(`https://maratur.onrender.com/attractive/id?id=${id}`);
    const data = await response.json();

    

    map.setView([data.latitude, data.longitude], 13);
    const marker = L.marker([data.latitude, data.longitude]);
    marker.bindPopup(`<h2>${data.name}</h2>`);
    marker.addTo(map);

    
    
    const divInfoBox = document.createElement("div");
    const divButtonBox = document.createElement("div");
    const title = document.createElement("h1");
    const type = document.createElement("p");
    const description = document.createElement("p");
    const region = document.createElement("p");
    const city = document.createElement("p");
    const buttonBack = document.createElement("a");
    const buttonImage = document.createElement("a");

    title.innerText = data.name;
    type.innerText = `Tipo: ${data.type}`;
    description.innerText=data.description;
    region.innerText = `Região: ${data.region}`;;
    city.innerText = `Cidade: ${data.city}`;
    buttonBack.innerText = "Voltar";
    buttonImage.innerText = "Imagens";
    titleDocument.innerText = data.name;

    
    divInfoBox.setAttribute("class", "info-box");
    divButtonBox.setAttribute("class", "buttons-box")

    if(origin == "searchAttractive.html"){
        buttonBack.setAttribute("href", "searchAttractive.html");
    }else{
        buttonBack.setAttribute("href", `searchRegion.html?regionName=${data.region}`);

    } 
    buttonImage.setAttribute("href", `showImage.html?id=${data.id}`);


    

    divButtonBox.appendChild(buttonBack);
    divButtonBox.appendChild(buttonImage);


    divInfoBox.appendChild(title);
    divInfoBox.appendChild(type);
    divInfoBox.appendChild(description);
    divInfoBox.appendChild(region);
    divInfoBox.appendChild(city);
    divInfoBox.appendChild(divButtonBox);

    container.appendChild(divInfoBox);

}


getAttractive();
