function calculerIMC() {
    let taille = prompt("Quelle est votre taille en mètres ?");
    let poids = prompt("Quelle est votre poids en kilogrammes ?");
    let IMC = poids / taille / taille;
    let messageNormal = "Votre IMC est de " + IMC + " et vous êtes normal.";
    let messageSousPoids = "Votre IMC est de " + IMC + " et vous êtes en sous-poids.";
    let messageSurPoids = "Votre IMC est de " + IMC + " et vous êtes en sur-poids.";
    if (IMC < 18.5) {
        alert(messageSousPoids);
    }
    else if ((IMC >= 18.5) && (IMC < 25)) {
        alert(messageNormal);
    }
    else if (IMC >= 25) {
        alert(messageSurPoids);
    }
};
calculerIMC();









//function abracadabra() {
    //let prenom  = prompt("Quel est votre prénom ?");
    //let nom     = prompt("Quel est votre nom ?");
    //let age     = prompt("Quel est votre âge ?");
    //alert("Vous êtes " + prenom + " " + nom + " et vous avez " + age + " ans, espèce de gros naze.");
//};
//abracadabra();