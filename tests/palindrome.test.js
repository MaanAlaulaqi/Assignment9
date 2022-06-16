const numbChecker = require('../services/numbChecker')
const palindrome = require('../services/palindrome')



//Palindrome Tests
//Yes
test('This should be a palindrome (true)', () => {
    expect(palindrome("racecar")).toBe(true)
})
//No
test('This should not be a palindrome (false)', () => {
    expect(palindrome("racecwar")).not.toBe(true)
})

//Random letters and numbers array 
test('Random array - Should return TRUE (23, "dw", 34, 1, 43, "wd", 32)', () => {
    expect(palindrome([23, "dw", 34, 1, 43, "wd", 32].join(''))).toBe(true)
})

test('Random array - Should return FALSE (23, "dw", 34, 1, 43, "dw", 23)', () => {
    expect(palindrome([23, "dw", 34, 1, 43, "wd", 32].join(''))).toBe(true)
})

//numbChecker tests -- Testing to see whether values entered are numbers AND bigger than 0
test('This should be false (entry: "d") ', () => {
    expect(numbChecker("dw")).toBe(false)
})

test('This should be true (entry: 1)', () => {
    expect(numbChecker(1)).toBe(true)
})

test('This should be false (entry: 0)', () =>{
    expect(numbChecker(0)).toBe(false)
})