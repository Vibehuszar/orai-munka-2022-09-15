import { hozzaad, atlag } from "./lista.js";


let gomb = document.getElementById("gomb");
gomb.addEventListener("click", function(){
    let szam = document.getElementById("szam");
    hozzaad(parseInt(szam));
    alert(`átlag: ${atlag()}`);
})
