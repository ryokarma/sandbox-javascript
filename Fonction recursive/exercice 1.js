let monTableauAssociatif = {
    'prenom'    :   'Mark',
    'nom'   :   'Zuckerberg',
    'poste' :   'PDG de facebook'
};


function afficherTableau(tableau){
    let chaine = '';
    //let tableau;
    for (valeur in tableau) {
       chaine += (valeur + ' : ' + tableau[valeur] + '\n');
       return afficherTableau(tableau);
        };
        console.log(chaine);
};
//tableau = monTableauAssociatif;
afficherTableau(monTableauAssociatif);