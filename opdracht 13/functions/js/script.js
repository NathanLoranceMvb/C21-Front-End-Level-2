let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  Omdat het van waarde kan veranderen vul je antwoord in op de lijn
let myInt = 3; 

//Waarom staat er let voor de variabelen? want dat geeft een actie aan vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen 17 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Pelement vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde geen idee de waarde noemen we een Atribute vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een alert op het scherm met de tekst mats deze tekst staan op regel 17 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? neen vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? laten zien wat er gebeurd bij een klik en waar wordt deze in je HTML aangeroepen? 22 tot 23 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML 30 vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? het vraagt om het Id om het in de java script te kunnen gebruiken vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? Het verstopt een plaatje vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen rekenen en wanneer wordt deze aangeroepen als er in de html ook om die actie word geroepen vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan geen idee en waar komt de waarde van getal vandaan? de html vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? de som  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? de som vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? Het gaat de getallen bij elkaar optellen vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen 38 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan en waar komt de waarde van kleur vandaan? van de css vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? de size staat in de html vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? de kleur en grote veranderd vul je antwoord in op de lijn
}

getName(myStr4);
// wat gebeurd er hierboven Het zoekt een naam en wanneer gebeurt dat waneer je de website start is (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? het veranderd de text vul je antwoord in op de lijn.