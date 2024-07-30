const form = document.querySelector(".form");
   

function getName(){
    const url = new URLSearchParams(window.location.search);
    const name = url.get("name");
    return name;
}


async function getIdAtrractive(){
    const name = getName();
    const response = await fetch(`https://maratur.onrender.com/attractive?name=${name}`);
    const data = await response.json();
    if(data.id){
        window.location.replace(`showAttractive.html?id=${data.id}&origin=searchAttractive.html`);
    }
}

function updateURL(){
    const select = document.querySelector("#select");
    const name = select.value;
    window.location.replace(`searchAttractive.html?name=${name}`);
}

form.addEventListener("submit", event =>{
    event.preventDefault();
    updateURL();
})

getIdAtrractive()




