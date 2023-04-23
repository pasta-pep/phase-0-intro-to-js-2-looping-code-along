// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
*/

/*
const gifts = ["Teddy bear", "Drone", "Doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i ++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/


function writeCards(names, events) {
const newArray = [];
    for (let i = 0; i < names.length; i ++) {
    newArray.push(`Thank you, ${names [i]}, for the wonderful ${events} gift!`);

    }
   return newArray;
}



function countDown(number) {
    while (number >= 0) {
    console.log(number--);
    
    }
}
