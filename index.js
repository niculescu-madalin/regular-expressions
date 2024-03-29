let btn = document.getElementById("btn");
let fulltext = document.getElementById("full-text");
let regextext = document.getElementById("regex-text");
let resultbox = document.getElementById("result")

btn.addEventListener("click", find)

function find(){  
    resultbox.innerHTML = "Potriviri <hr>";
    resultbox.style.backgroundColor = "";
    resultbox.style.color = "";

    let expresion = regextext.value;
    let text = fulltext.value;

    if(!expresion) {
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

    if(!text) {
        resultbox.innerHTML += "Campul textului de text este gol";
        return;
    }
    
    let count = 0;
    while (result = regex.exec(text)) {
        if(result){
            console.log(result, regex.lastIndex);
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


