

export function sum(a: number, b: number) {
    return a + b
}
export function multi(a: number, b: number) {
    return a * b
}
export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.filter(m => m !== '' && m !== '-')
        .map(m => m
            .replace('!','')
            .replace('.','')
            .replace(',','')
        )
}
