/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme


//initialisation
var Contact = {
  init: function (name, surname){
    this.name = name;
    this.surname = surname;
  },
  
  //Listing contact
  decrire: function(){
    return `Nom : ${this.name}, Prénom : ${this.surname}`;
  }
};

//contact prédéfinit
var contact1 = Object.create(Contact);
contact1.init("William", "BRUEL");

var contact2 = Object.create(Contact);
contact2.init("Benjamin", "FRANKLIN");

/*************************************************************************************************
									FONCTIONS PRINCIPALES
*************************************************************************************************/

// Présentation des options
function optionchoice()
{
  var menu = `
   			MENU 
  1 : Lister les contacts
  2 : Ajouter un contact
  0 : Quitter
   
  `;
  console.log(menu);
}

// Creation contact
function addContact(name, surname)
{
    var newContact = Object.create(Contact);

    newContact.init(name, surname);
    contacts.push(newContact);

    console.log("Contact ajouté.");
}

// Génération des contacts existent
function contactBook(contacts)
{
    console.log("Liste des contacts :");
    contacts.forEach(function(contact){
        console.log(`${contact.decrire()}`);
    });
}


/*************************************************************************************************
									CODES PRINCIPALES
*************************************************************************************************/

console.log("Bienvenue dans le gestionnaire des contacts !");

var contacts = [contact1, contact2];
var choice;
    while (choice !== "0"){
      optionchoice();
      // Définition du choix
      choice = prompt("Choisissez une option");

	//Déroulement des contacts
      switch(choice) {
        case "1":
          contactBook(contacts)         
        break;

        // Ajout d'un nouveaux
        case "2":
          var name = prompt("Saisissez le nom :");
          var surname = prompt("Saisissez le prénom :");
          addContact(name, surname);
        break;

        case"0":
        break;

        //Erreur de saisit
        default:
          console.log("Choix incorect.");
        break;
  }
}
// Sortie du programme
if (choice === "0"){
    console.log("Au revoir !");
}