

function numbChecker(str){
    var  numCheck = true
    var NaNCheck = !isNaN(str) //True for number
    valueToReturn = false
    var zeroPlusCheck = Number(str) > 0 // Array size, should be true for a palindrome check
    if(NaNCheck == true && zeroPlusCheck == true){ 
        valueToReturn = true
    } 
    return valueToReturn

}
module.exports = numbChecker