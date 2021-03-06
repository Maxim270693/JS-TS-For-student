import {multi, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
} )

test('sum should be correct', () =>{
    const result = sum(a,b)
    const result2 = sum(a,c)

    expect(result).toBe(3)
    expect(result2).toBe(4)
})

test('multi should be correct', () => {
    const result = multi(a,b)
    const result2 = multi(a,c)

    expect(result).toBe(2)
    expect(result2).toBe(3)
})

test('splitting should be correct',() => {
    let sent1 = 'Hello my friend'   // Зачем мы тут пишем Hello С большой буквы, если мы проверяем 10 строку
    let sent2 = 'JS - the best  programming language.'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
} )