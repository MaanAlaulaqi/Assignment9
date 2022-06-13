
const palindrome = require('../palindrome')




//Yes
test('This should be a palindrome (true)', () => {
    expect(palindrome("racecar")).toBe(true)
})
//No
test('This should not be a palindrome (false)', () => {
    expect(palindrome("racecwar")).not.toBe(true)
})

//Random letters and numbers array 
test('Random array - Should return true', () => {
    expect(palindrome([23, "dw", 1, 34, 1, "dw", 23])).toBe(true)
})