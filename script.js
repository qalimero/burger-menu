console.log('connecté'); 

//Je selectionne et je stock les éléments necessaires
//L'icone burger
const icone = document.querySelector('.navbar-mobile i');
//La div modal
const modal = document.querySelector('.modal');
// Je soumets l'icone à une action au clique
icone.addEventListener('click', function(){
    console.log('icone cliquée');
    //Alterner les class
    icone.classList.toggle('fa-times');
    modal.classList.toggle('change-modal');
});
