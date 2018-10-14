var car = "I have a white pretty car ";
for(var i = 0 , word = '' ; i < car.length;i++){
    word += car.charAt(i);
   // alert(word.toUpperCase());
}

alert(word + " typeOf word = "+ (typeof word));




/*
// Fonction Anonyme : Avantage isoler le code , c'est une fonction qui na mas de nom :
// Une utilisation intéressante des fonctions anonymes concerne l'isolement d'une partie de votre code, le but étant d'éviter qu'une partie de votre code n'affecte tout le reste.

function askNumber() {
    var enter;
    // isNaN() renvoie true quand la variable n'est pas un nombre, et false dans le cas contraire
    while (isNaN(enter)){
        enter = parseInt(prompt("Donne un nombre"));
    }
    return enter;

}
alert('Le nombre est : '+cc+"  " + askNumber()); */
/*
(function(){
    alert("hello f anonyme");
})(); // Appel et execute directement la fonction annonyme

À titre d'information, sachez que ces fonctions immédiatement exécutées se nomment des Immediately-Invoked Function Expression, abrégées IIFE. Nous utiliserons cette abréviation dorénavant.
*/



/*
// Porter des variabless,
En javascript quand tu declares  une variable dans la boucle for, cette variable est
sera toujours accessbile mais en dehors de la boucle for contrairement aux autres langages
    la boucle for à la fin detruit toutes les variables declaree à l'interieur de la boucle.

Ce n est pas le cas pour une variable qui est declaree dans une fonction (variable locale)
accessbile uniquement que dans la fonction



En javascript il est deconseillé de creer un variable dans la boucle (entre les accolades),
    il faut les declarer dans la partie initialisation comme toto : exemple :
    for(var i = 0; i<10;i++){
        var toto = "test"; // deconseillé en javascript
    }
    plutot:

    for(var i =0, toto='test';i<10;i++){

    }

 ***  fin porte variable */
// var enter;
// do{
//     enter = prompt("entrer quelques choses");
//     if(!confirm("Vous êtes sûr?")){
//         alert("Aurevoir");
//         break;
//     }
//
// }while(!enter);
// alert(enter);



// var nick = '', nicks='', proceed = true;
//
// while (proceed) {
//     nick = prompt("Donner un prenom ");
//     if (nick) {
//         nicks += nick + " ";
//     } else {
//         alert("valeur de nick "+nick);
//         break;
//     }
// }
// alert(" Les prenoms : " + nicks);

// var number = 0, number2 = 0;
// var output1 = ++number, outpout2= number2++;
// alert("out1 = "+output1+" out2 = "+outpout2+ " number 1 = "+number+" nulber2 = "+number2);


// var userAge = parseInt(prompt("How old are you ?"));
//
// if (userAge >= 1 && userAge <= 17) {
//     alert("Vous n'êtes pas encore majeur.");
// } else if (userAge >= 18 && userAge <= 49) {
//     alert("Vous êtes majeur mais pas encore senior.");
// } else if (userAge >= 50 && userAge <= 59) {
//     alert("Vous êtes senior mais pas encore retraité");
// } else if ( userAge >= 60 && userAge <= 120) {
//     alert("Vous êtes retraité, profitez de votre temps libre ! ");
// } else if ( userAge > 120) {
//     alert(" Vous avez plus e 120 ans ou Mort !");
// } else if (userAge === 0) {
//     alert("Vous n'êtes pas encore née 0 an !");
// } else {
//     alert("Age negative  ! ");
// }