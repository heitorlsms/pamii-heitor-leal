//Criação array
let cidades: string[] = ['São paulo', 'Tóquio', 'Rio de janeiro', 'Nova York', 'Brasília'];

//Função que receb array e imprime cada cidade
function listarCidades(cidade: string[]): void{
    cidades.forEach((cidade) => {
        console.log(cidade)
    });
}

listarCidades(cidades);