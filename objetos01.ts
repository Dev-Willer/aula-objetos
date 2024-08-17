const DadosdeCompra = {
    Nome: 'Willer',
    Idade: 24,
    altura: 1.75,
    temCNH: true,
    Habilidades: ['JavaScript ', 'TypeScript ', 'php ', 'Git ']
}

const possuiCNH = DadosdeCompra.temCNH ? 'possui CNH' : 'não possui CNH'

DadosdeCompra.Nome = 'Fernanda Silva Santos' // Alterando o conteúdo da propriedade Nome
DadosdeCompra.Habilidades[1] = 'HTML' // Alterando no vetor no índice 1 o HTML
DadosdeCompra.email = 'josewiller2018@gmail.com' // Adicionando a propriedade email ao Objeto

console.log(`${DadosdeCompra.Nome} tem ${DadosdeCompra.Idade} anos, ${DadosdeCompra.altura} de altura. ${possuiCNH} e as seguintes habilidades: `) // Printando o resultado após as operações 
for( let item of DadosdeCompra.Habilidades){
    console.log(`- ${item}`);
}

const usuarios = [
    {
        nome: 'Willer',
        email: 'Willler@empresabank.com'
    },
    {
        nome: 'Maria',
        email: 'Maria@empresabank.com'
    },
    {
        nome: 'João',
        email: 'Joao@empresabank.com'
    },
    {
        nome: 'Cesar',
        email: 'Cesar@empresabank.com'
    }
]

for (let usuario of usuarios) {
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`);
}