

var Ciseau = document.getElementsByClassName("Ciseau")[0];
var Pierre = document.getElementsByClassName("Pierre")[0];
var Papier = document.getElementsByClassName("Papier")[0];
// var Img = document.getElementById("RPC-hands");
var vousImg = document.getElementById("RPC-container-img");
var OrdiImg = document.getElementById("Ordi-container-img");
var Ordi = "";
var Vous = "";
var Res = document.getElementById("resultat");
var vousScor = document.getElementById("scorevs");
var i = 0;
var y = 0;
var OrdiScor = document.getElementById("scoreordi");


// document.getElementById("resultat").innerHTML = Res;



// VARIABLE P F C ON CLICK
Pierre.addEventListener("click", function () {

    vousImg.setAttribute("src", "/medias/Pierre.jpg")
    Ordi = Math.floor(Math.random() * 3);
    Vous = 0;
    condi()
    resul()
    condi2()
});

Ciseau.addEventListener("click", function () {
    vousImg.setAttribute("src", "medias/Ciseau.jpg")
    Ordi = Math.floor(Math.random() * 3);
    Vous = 2;

    condi()
    resul()
    condi2()
});

Papier.addEventListener("click", function () {
    vousImg.setAttribute("src", "medias/Papier.jpg")
    Ordi = Math.floor(Math.random() * 3);
    Vous = 1;

    condi()
    resul()
    condi2()
});


// CONDITION POUR L ORDI
function condi() {
    if (Ordi == 0) {
        OrdiImg.setAttribute("src", "medias/Pierre.jpg");
    } else if (Ordi == 1) {
        OrdiImg.setAttribute("src", "medias/Papier.jpg");
    }
    else {
        OrdiImg.setAttribute("src", "medias/Ciseau.jpg");
    }
};

// CONDITION POUR USER
function condi2() {
    if (Vous == 0) {
        vousImg.setAttribute("src", "medias/Pierre.jpg");
    } else if (Vous == 1) {
        vousImg.setAttribute("src", "medias/Papier.jpg");
    }
    else {
        vousImg.setAttribute("src", "medias/Ciseau.jpg");
    }
};
// CONDITION RESULTAT DE TIRAGE
function resul() {
    // Ordi Pierre vs User Papier
    if (Ordi === 0 && Vous === 1) {

        Res.innerHTML = "Victoire";
        vousScor.innerHTML++;
        console.log(vousScor);


        // User Papier vs Ordi Pierre
    } else if (Ordi === 1 && Vous === 0) {

        Res.innerHTML = "Perdu";
        OrdiScor.innerHTML++;


    }
    // Ordi Papier vs User Ciseau 
    else if (Ordi === 1 && Vous === 2) {


        Res.innerHTML = "Victoire";
        vousScor.innerHTML++;
        console.log(vousScor);


    }
    // Ordi Ciseau vs User Papier
    else if (Ordi === 2 && Vous === 1) {


        Res.innerHTML = "Perdu";
        OrdiScor.innerHTML++;

    }
    // Ordi Ciseau vs User Pierre
    else if (Ordi === 2 && Vous === 0) {


        Res.innerHTML = "Victoire";
        vousScor.innerHTML++;
        console.log(vousScor);

    }
    // Ordi Pierre vs User Ciseau

    else if (Ordi === 0 && Vous === 2) {


        Res.innerHTML = "Perdu";
        OrdiScor.innerHTML++;

    }

    else {
        vousScor = 0;

        Res.innerHTML = "Egalité";


    }

};

