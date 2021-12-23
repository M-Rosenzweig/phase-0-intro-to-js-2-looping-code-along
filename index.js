

function writeCards(friend, event){

    

const messages = [];

    for (let L = 0; L < friend.length; L++){
        messages.push (`Thank you, ${friend[L]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

writeCards(["Guadalupe,","Ollie","Aki"],"surprise");

function countDown (){


let countdown = 10;
while (countdown >= 0){
    console.log(countdown--);
}
}

// ja();




// const gifts = ["teddy bear","drone","doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
// debugger;
//     }
//     return gifts;
// }


// wrapGifts(gifts);







// for (let age =30; age <40; age++){
//     console.log(`I'm ${age }years old. Happy birthday to me!`)
    
// }
