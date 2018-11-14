/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombre = Number(prompt("Entrez un nombre :"));

for (var i = 1; i <=6; i++){

	if(nombre === solution){
		console.log("Bravo tu as trouver la solution : " + nombre);
		break;
	}

	if (nombre < solution ) {
		console.log(nombre + " est trop petit");
	} else {
		console.log(nombre + " est trop grand");
	}

	nombre = Number(prompt("Entrez un nouveau nombre :"));
	if (i ===6){
		console.log("Essaie encore .... La solution était : " + solution);
	}
}