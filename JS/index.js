const palavras = ['teste', 'teste 2', '...'];

const filme = {
    titulo: 'filme 1',
    genero: 'açao',
    ano: 2025,
    avaliacao: 7
};

console.log(filme.titulo);
console.log(palavras[1], palavras.length);

const filmes = [
    { titulo: 'Interestelar', genero: 'Ficção Científica', ano: 2014, nota: 9.2 },
    { titulo: 'Shrek', genero: 'Animação', ano: 2001, nota: 8.4 },
    { titulo: 'Corra!', genero: 'Terror', ano: 2017, nota: 8.7 },
    { titulo: 'Oppenheimer', genero: 'Drama', ano: 2023, nota: 8.9 },
    { titulo: 'Homem-Aranha no Aranhaverso', genero: 'Animação', ano: 2018, nota: 9.0 },
    { titulo: 'Duna: Parte Dois', genero: 'Ficção Científica', ano: 2024, nota: 8.8 },
    { titulo: 'Parasita', genero: 'Drama', ano: 2019, nota: 9.1 },
    { titulo: 'Um Lugar Silencioso', genero: 'Terror', ano: 2018, nota: 8.3 }
];

// funçao generica para exibir os filmes a partir de uma lista fornecida lis 
function exibirFilmes(listaFilmes) {
    let areaFilmes = document.querySelector('#lista-filmes');
    let mensagem = document.querySelector('#mensagem-listagem');
    
    if(listaFilmes.length === 0){
        mensagem.textContent = 'Nenhum filme encontrado.';
        mensagem.classList.remove('d-none');
        return;
    }
}

// Funçao de atalho para listar todos os filmes
function listarTodos(){
    exibirFilmes(filmes);
}

listarTodos();