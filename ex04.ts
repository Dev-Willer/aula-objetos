type TCarro = {
    modelo: string
    marca: string
    ano: number
    cor?: string     
}

const carro: TCarro = {
    modelo: 'Uno',
    marca: 'Fiat',
    ano: 2011,
    cor: 'vermelho'
}

console.log(carro.modelo);
