// DESAFIO [1]

let soma = 0
let k = 0

for(let indice = 18; k < indice; k++ ) {
    soma += k
}

console.log(soma)

// DESAFIO [2]

fibonnaci = (fibonacci_length, fibonacci_number) => {
    fibonacci_arr = [0,1]

    for(let i = 0; i < 20; i++) {
        let fibonacci_arr_sum = fibonacci_arr[fibonacci_arr.length-1] + fibonacci_arr[fibonacci_arr.length-2]
        fibonacci_arr.push(fibonacci_arr_sum)
    }
    
    if(fibonacci_arr.includes(fibonacci_number)) {
        console.log('Pertence a sequência.')
    }
    console.log('Não pertence a sequência.')
}

fibonnaci(20, 5)

// DESAFIO [3]

a = 1, 3, 5, 7, _9__

b = 2, 4, 8, 16, 32, 64, __128__

c =  0, 1, 4, 9, 16, 25, 36, __49__

d =  4, 16, 36, 64, __100__

e = 1, 1, 2, 3, 5, 8, __13__

f = 2,10, 12, 16, 17, 18, 19, __200__


// DESAFIO [4]

'Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?'

'Resposta: O carro e o caminhão estarão a mesma distância de ribeirão preto, 60.9km de distância. Para chegar a conclusão, usamos ribeirão como ponto de referência, por conta dos pedágios, a distância se torna a mesma.'

// DESAFIO [5]

stringreverse = (string) => {
    stringreverse_arr = []
    for(let i = string.length-1; i >= 0; i--) {
        stringreverse_arr.push(string[i])
    }
    let newstring = stringreverse_arr.join('')
    console.log(newstring)
}

stringreverse('rotation')
