const {
    returnTwo, 
    greeting, 
    add, 
    divide,
    multiply,
    subtract
} = require("./functions.js")

test('should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

describe('should return greeting to name inputed', () => {
    test('should return greeting to name inputed', () => {
        expect(greeting('James')).toBe('Hello, James')
        
    }),
    test('should return greeting to name inputed', () => {
        expect(greeting('Jill')).toBe('Hello, Jill')
    }), 
    test('should return string', () => {
        let typedName = greeting("name")
        expect(typeof typedName).toBe('string')
    })
})
    
describe('add tests', () => {
    test('should return sum of nums', () => {
        expect(add(1, 2)).toEqual(3)
    }), 
    test('should return sum of nums', () => {
        expect(add(5, 9)).toEqual(14)
    })
})

describe('math operations with inputed numbers', () => {
    test('should return sum of nums', () => {
        expect(add(1, 2)).toEqual(3)
    }), 
    test('should return sum of nums', () => {
        expect(add(5, 9)).toEqual(14)
    }), 
    test('should return difference of nums', () => {
        expect(subtract(2, 1)).toEqual(1)
    }), 
    test('should return difference of nums', () => {
        expect(subtract(9, 5)).toEqual(4)
    }), 
    test('should return product of nums', () => {
        expect(multiply(1, 2)).toEqual(2)
    }), 
    test('should return sum of nums', () => {
        expect(multiply(5, 9)).toEqual(45)
    }), 
    test('should return quotient of nums', () => {
        expect(divide(4, 2)).toEqual(2)
    }), 
    test('should return quotient of nums', () => {
        expect(divide(90, 9)).toEqual(10)
    })
})

