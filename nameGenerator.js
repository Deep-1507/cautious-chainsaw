function NameGenerator(){
// For First string
var firstString;

var randomInt1 = Math.floor(Math.random() * 3)+1;

switch (randomInt1) {
    case 1:
        firstString="Crazy";
        break;

        case 2:
            firstString="Amazing";
            break;

            case 3:
        firstString="Fire";
        break;
}

// For Second String
var secondString;

var randomInt2 = Math.floor(Math.random() * 3)+1;

switch (randomInt2) {
    case 1:
        secondString="Engine";
        break;

        case 2:
            secondString="Foods";
            break;

            case 3:
        secondString="Garments";
        break;
}

// For Third String
var thirdString;

var randomInt3 = Math.floor(Math.random() * 3)+1;

switch (randomInt3) {
    case 1:
        thirdString="Bros";
        break;

        case 2:
            thirdString="Limited";
            break;

            case 3:
        thirdString="Hub";
        break;
}

// Final Output

var Output = "Your Bussiness Name is: " + firstString + " " +secondString + " " +thirdString;
console.log(Output);

var outputh1 = document.getElementById("GeneratedName");
outputh1.textContent = Output;

}