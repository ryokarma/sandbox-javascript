let monTableauAssociatif = {
    'prenom'    :   'Mark',
    'nom'   :   'Zuckerberg',
    'poste' :   'PDG de facebook'
};


function afficherTableau(tableau){
    let chaine = '';
    //let tableau;
    for (const valeur in tableau) {
       chaine += (valeur + ' : ' + tableau[valeur] + '\n');
        };
        console.log(chaine);
};
//tableau = monTableauAssociatif;
afficherTableau(monTableauAssociatif);