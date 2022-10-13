function calculatrice() {

    let choix;
    do {
        choix = prompt("Choisissez votre opération : \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division");
        parseInt(choix);


    } while (choix == "" || choix == null || choix != 1 && choix != 2 && choix != 3 && choix != 4);

    let premierNombre;
    let deuxiemeNombre;

    do {
        premierNombre = prompt("Choisissez un premier nombre.");
        parseInt(premierNombre);
    } while (premierNombre == "" || premierNombre == null || isNaN(premierNombre));


    do {
        deuxiemeNombre = prompt("Choisissez un second nombre.");
        parseInt(deuxiemeNombre);
    } while (deuxiemeNombre == "" || deuxiemeNombre == null || isNaN(deuxiemeNombre));

    let resultat;

    switch (choix) {
        case "1":
            resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case "2":
            resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case "3":
            resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case "4":
            resultat = division(premierNombre, deuxiemeNombre);
            break;
        default:
            alert("Une erreur est survenue mais je ne sais pas pourquoi.");
            break;
    };

    alert("Le résultat de votre opération est : " + resultat);
};

calculatrice();

function addition(nombreA, nombreB) {
   let total = nombreA + nombreB;
    return total;
};

function multiplication(nombreA, nombreB) {
    let total = nombreA * nombreB;
    return total;
};

function soustraction(nombreA, nombreB) {
    let total = nombreA - nombreB;
    return total;
};

function division(nombreA, nombreB) {
    let total = nombreA / nombreB;
    return total;
};


/*function division(nombreA, nombreB) {
    while (nombreB == 0) {
        alert("Attention, vous n'avez pas le droit de diviser par zéro.");
    }
    let total = nombreA / nombreB;
    return total;
}*/



/*function division(nombreA, nombreB) {
    if (nombreB == 0) {
        alert("Attention, vous n'avez pas le droit de diviser par zéro.");
    } else {
        let total = nombreA / nombreB;
    return total;
    };
};*/

