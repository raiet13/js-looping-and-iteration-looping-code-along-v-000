// Code your solutions in this file

function printBadges(array) {
    for (let i = 0; i < array.length; i++){
      console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);  
    }
    return array;
}

function tailsNeverFails() {
    
    let times = 0;
    let message;

    while (Math.random() >= 0.5) {
        times++;
    }
    
    return message = `You got ${times} tails in a row!`;
}