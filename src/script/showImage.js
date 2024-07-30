const imageBox = document.querySelector(".image-box");
const imageName = document.querySelector("#image-name");

function getURLParams(){
    const URLParams = new URLSearchParams(window.location.search);
    const id = URLParams.get("id");
    return id
}




async function getImages(){
    const id = getURLParams();
    const response = await fetch(`https://maratur.onrender.com/images?id=${id}`);
    const data = await response.json();


    const image = document.createElement("img");
    const backButton = document.createElement("a");

    image.setAttribute("src", data[0].image_path);
    image.setAttribute("class", "attractive-image");
    backButton.setAttribute("class", "back-button");
    backButton.setAttribute("href", `showAttractive.html?id=${data[0].cod_attractive}&origin=searchAttractive.html`);
    
    imageName.innerText = data[0].name;
    backButton.innerText = "Voltar";

    imageBox.appendChild(image);
    imageBox.appendChild(backButton);



}



getImages();