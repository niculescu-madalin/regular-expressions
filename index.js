let btn = document.getElementById("btn");
let fulltext = document.getElementById("full-text");
let regextext = document.getElementById("regex-text");
let resultbox = document.getElementById("result");
let smalltext = document.getElementById("small-text");

btn.addEventListener("click", find);

function find(){  
    resultbox.innerHTML = "Potriviri <hr>";
    resultbox.style.backgroundColor = "";
    resultbox.style.color = "";
    smalltext.style.color = "black";
    smalltext.style.backgroundColor = "white";

    let expresion = regextext.value;
    let text = fulltext.value;
    let testtext = smalltext.value;

    if(!expresion) {
        resultbox.innerHTML += "Campul text pentru pattern este gol<br> ";
        return;
    }

    let regex;
    try {
        regex = new RegExp(expresion, "g");
    } catch(e) {
        resultbox.style.backgroundColor = "rgb(185, 0, 0)";
        resultbox.style.color = "white";
        resultbox.innerHTML += "Pattern-ul este incorect";
        return;
    }

    if(regex.test(testtext)) {
        smalltext.style.backgroundColor = "green";
        smalltext.style.color = "white";
    } else {
        smalltext.style.backgroundColor = "red";
        smalltext.style.color = "white";
    }

    if(!text) {
        resultbox.innerHTML += "Campul text 2 de text este gol<br>";
        return;
    }

    let count = 0;
    while (result = regex.exec(text)) {
        if(result){
            resultbox.innerHTML += `${result} (${result.index} - ${regex.lastIndex})<br>`;
            count++ ;
        }
    }

    if(count === 0) {
        resultbox.innerHTML += "Nu s-a gasit niciun element care se potriveste cu pattern-ul";
    } else {
        resultbox.innerHTML += `<hr> Au fost gasite ${count} elemente`;
    }

}


