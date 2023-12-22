// const corp = [...document.querySelectorAll('.bouton')];
let boby = document.body;
let entre = document.querySelector('.entre');
let num_un = document.querySelector('.num_un');
let num_deux = document.querySelector('.num_deux');
let num_trois = document.querySelector('.num_trois');
let ron_un = document.querySelector('.ron_un');
let ron_deux = document.querySelector('.ron_deux');
let ron_trois = document.querySelector('.ron_trois');
num_un.addEventListener("click", function() {
    ron_un.setAttribute("style", "display:block");
    ron_deux.setAttribute("style", "display:none !important");
    ron_trois.setAttribute("style", "display:none !important");

})
num_deux.addEventListener("click", function() {
    ron_un.setAttribute("style", "display:none");
    ron_deux.setAttribute("style", "display:block !important");
    ron_trois.setAttribute("style", "display:none");


})

num_trois.addEventListener("click", function() {
    ron_deux.setAttribute("style", "display:none");
    ron_un.setAttribute("style", "display:none");
    ron_trois.setAttribute("style", "display:block !important");


})



// const listKeycode = corp.map(corps => corps.dataset.key);
// document.addEventListener('keydown', (e) => {

//     const valeur = e.keyCode.toString();
//     calculer(valeur)
// })

// document.addEventListener('click', (e) => {
// const valeur = e.target.dataset.key;
// calculer(valeur)
// console.log(ron_Deux);
// })

// const calculer = (valeur) => {
// if (listKeycode.includes(valeur)) {
//     switch (valeur) {
//         case '103':
//             entre.textContent ='';
//             break;
//             case '110':
//             entre.textContent ='';
//             break;
//             case '13':
//                 const calcul = eval (entre.textContent);
//                 entre.textContent = calcul;
//                 break;
//                 default:
//                     const indexKeycode = listKeycode.indexOf(valeur);
//                     const corps = corp[indexKeycode];
//                     entre.textContent += corps.innerHTML;
//     }
//  }
// }
