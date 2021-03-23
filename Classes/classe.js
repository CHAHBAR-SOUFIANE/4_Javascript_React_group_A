class Ligne{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(nom, longueur){
        this.nom = nom;
        this.longueur = longueur;
    }
    
    taille(){document.getElementById('p1').innerHTML +=
        'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'};
}

let geo1 = new Ligne('Chahbar', 7);
let geo2 = new Ligne('Laila', 5);
geo1.taille();
geo2.taille();