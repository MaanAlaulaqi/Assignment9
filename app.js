const prompt = require('prompt-sync')({sigint: true});
const palindrome = require('./services/palindrome.js')
const numbChecker = require('./services/numbChecker')




var numOfInputs = prompt('Enter the amount of letters/digits your palindrome query has (1~10): ')

if(isNaN(numOfInputs) || numOfInputs < 1 || numOfInputs > 10){ //Testing initial input 
    var x = 0
    while (x < 1){
        if (numbChecker(numOfInputs < 1 || numOfInputs > 10 || isNaN(numOfInputs))){
            numOfInputs = prompt('Please make sure you entered a number between 1 and 10: ')
            x = numbChecker(numOfInputs > 1 && numOfInputs < 10 && !isNaN(numOfInputs))? 1 : 0
            //console.log(x + "<-- X")
        } else x++
    }
}



var PaliArr = []


for (let i = 0; i < numOfInputs; i++) {
    PaliArr.push(prompt(`Entry for position #${i+1}: `))
}

//console.log(PaliArr.join(''))

if(palindrome(PaliArr.join(''))){ //If needed, this can be turned into a JSON object
    console.log(`\nYou've entered ${PaliArr.join('')}, and that IS INDEED a Palindrome\n`)
}else{
    console.log(`\nYou've entered ${PaliArr.join('')}, and that IS NOT a Palindrome\n`)
}

