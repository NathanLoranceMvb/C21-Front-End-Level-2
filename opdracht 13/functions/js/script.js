let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? _Door de Dit symbool ""_ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype _integer_ waarom? omdat het een getal is vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _je geeft aan dat je variablen gaat maken_ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _17_ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de _Parameter_ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _mats_ de waarde noemen we een Atribute_ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _alert_ op het scherm met de tekst _mats_ deze tekst staan op regel _17_ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _nee tenzij je het overal veranderd_ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _het vervangt een plaatje met een ader plaatje_ en waar wordt deze in je HTML aangeroepen? _23_ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _25_ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _daar mee pak je het ID van een element_ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _het verstopt het plaatje van regel 25 en laat die van 23 zien_ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _32_ en wanneer wordt deze aangeroepen _er moet op de knop worden geklikt_ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _de parameter function rekenen_ en waar komt de waarde van getal vandaan? _de waarde van het getal komt van regel 32_ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _Een manier om een enelent te selecteren_  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _het maakt de som en berekend hem en laat de som in de html zien_ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _het antwoord veranderd_ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _44_ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _38_ en waar komt de waarde van kleur vandaan? _44_ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _44_ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _de kleur van de tekt veranderd en de text word van groote veranderd_ vul je antwoord in op de lijn
}

getName(niks);
// wat gebeurd er hierboven _het zoekt naar de naam mats_ en wanneer gebeurt dat _waneer er op geklikt wordt_ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _het werkt niet_ vul je antwoord in op de lijn.