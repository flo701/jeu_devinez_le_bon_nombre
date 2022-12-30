var number= document.querySelector(".number");
var check= document.querySelector(".fa-circle-check");
var answer= document.querySelector(".answer");
var h2= document.querySelector("h2");
var reset= document.querySelector(".fa-sharp");
var robot = getRandomNumber();
var lower = 1;
var higher = 100;

function getRandomNumber() {
    return(Math.floor(Math.random() * 100)+1);
}

check.addEventListener('click', function() {
    console.log("nombre du robot : ",robot);
    console.log("lower : ", lower);
    console.log("higher : ", higher);
    
    numberChosen = number.value;

    if (answer.innerHTML== 'Gagné !') {
        newGame()
        return
    }

    if (numberChosen < 1 || numberChosen > 100) {
        answer.innerHTML= "Veuillez saisir un nombre entre 1 et 100"; 
        answer.style.color= "red";
        return false
    }

    if (isNaN(numberChosen)) {
        answer.innerHTML= 'Oups ! Ce n\'est pas un nombre...'
        answer.style.color= 'red'
        return 'Not a Number!';
    }

    if(numberChosen != robot  ) {
        answer.innerHTML= "Perdu..."; 
        answer.style.color= "red";
        if (numberChosen > robot) {
            h2.innerHTML="Veuillez saisir un nombre entre " + lower + " et " + numberChosen ;
            higher=numberChosen;
            console.log("higher : ", higher);
        } else if (numberChosen < robot) {
            h2.innerHTML="Veuillez saisir un nombre entre " + numberChosen + " et " + higher;
            lower=numberChosen;
            console.log("lower : ", lower);
        }
    } else if (numberChosen == robot ){
        answer.innerHTML= 'Gagné !'
        answer.style.color= "green";
        answer.style.fontWeight= "bold";
    }
})

function newGame() {
    h2.innerHTML="Veuillez saisir un nombre entre 1 et 100";
    number.value="";
    answer.innerHTML="Perdu ou gagné ?";
    answer.style.color= "gray";
    answer.style.fontWeight= "normal";
    robot = getRandomNumber();
    lower = 1;
    higher = 100;
}

reset.addEventListener('click', newGame)

