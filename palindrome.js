function palindrome(str) {

    var len = str.length
    var mid = Math.floor(len/2)

    //console.log(mid)
    for ( var i = 0; i < mid; i++ ) {
        //console.log(str[i] + " " + str[len - 1 - i]) //Sub-unit testing? :p
        if (str[i] != str[len - 1 - i]) { 
            
            
            return false            
        }
    }

    return true
}
module.exports = palindrome

console.log(palindrome("rac123321car"))


