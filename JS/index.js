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

    areaFilmes.innerHTML = '';
    mensagem.classList.add('d-none')
    
    if(listaFilmes.length === 0){
        mensagem.textContent = 'Nenhum filme encontrado.';
        mensagem.classList.remove('d-none');
        return;
    }

    //listagem dos filmes   
    for(let i =0; i < listaFilmes.length;i++){
        const filme = listaFilmes[i];

        //console.log(filme);
        //console.log(filme.titulo);

        let coluna = document.createElement('div');
        coluna.className = 'col-md-6 col-lg-4';

        let card = document.createElement('div');
        card.className =  'card movie-card';

        let cardBody = document.createElement('div');
        cardBody.className =  'card-body';

        let titulo = document.createElement('h3');
        titulo.className = 'card-title h5';
        titulo.textContent = filme.titulo;

        let genero = document.createElement('span');
        genero.className = 'badge text-bg-secondary mb-3';
        genero.textContent = filme.genero;

        let ano = document.createElement('p');
        ano.className = 'card-text mb-1';
        ano.textContent = `Ano: ${filme.ano}`;

        let avaliacao = document.createElement('p');
        avaliacao.className = 'card-text mb-1';
        avaliacao.textContent = `Avaliação ${filme.nota.toFixed(1)}`


        cardBody.appendChild(titulo)
        cardBody.appendChild(genero)
        cardBody.appendChild(ano)
        cardBody.appendChild(avaliacao)

        card.appendChild(cardBody);

        coluna.appendChild(card);

        areaFilmes.appendChild(coluna);
    }
}

// Funçao de atalho para listar todos os filmes
function listarTodos(){
    exibirFilmes(filmes);
}

function atualizarResumo(){
    let divTotal = document.querySelector('#quantidade-filmes');          
    let divMedia = document.querySelector('#media-avaliacoes'); 
    let divGeneros = document.querySelector('#contagem-generos');    
    
    divTotal.textContent = filmes.length;
    let somaNotas = 0;
    let qtdPorGenero ={
        animacao : 0,
        drama : 0 ,
        ficcaoCinetifica : 0,
        terror : 0
    }
    for(let i = 0;i < filmes.length;i++){
        somaNotas += filmes[i].nota;

        if(filmes[i].genero === 'Animação'){
            qtdPorGenero.animacao++;
        } 
         if(filmes[i].genero === 'Drama'){
            qtdPorGenero.drama++;
        } 
        if(filmes[i].genero === 'Ficção Científica'){
            qtdPorGenero.ficcaoCinetifica++;
        } 
        
        if(filmes[i].genero ==='Terror'){
            qtdPorGenero.terror++;
        }
    }
    console.log(qtdPorGenero.terror,qtdPorGenero.ficcaoCinetifica,qtdPorGenero.drama,qtdPorGenero.animacao);
    console.log(somaNotas);
    let media = filmes.length > 0 ? somaNotas  / filmes.length : 0;

    divMedia.textContent = media.toFixed(1)

    let badgeAnimacao = document.createElement('span');
    badgeAnimacao.className = 'badge text-bg-primary';
    badgeAnimacao.textContent = `Animação ${qtdPorGenero.animacao}`;

    let badgedrama = document.createElement('span');
    badgedrama.className = 'badge text-bg-success';
    badgedrama.textContent = `Drama ${qtdPorGenero.drama}`;

    let badgeFiccao = document.createElement('span');
    badgeFiccao.className = 'badge text-bg-secondary';
    badgeFiccao.textContent = `Ficçao Cientifica ${qtdPorGenero.ficcaoCinetifica}`;

    let badgeTerror = document.createElement('span');
    badgeTerror.className = 'badge text-bg-warning';
    badgeTerror.textContent = `Terror ${qtdPorGenero.terror}`;

    divGeneros.appendChild(badgeAnimacao)
    divGeneros.appendChild(badgedrama)
    divGeneros.appendChild(badgeFiccao)
    divGeneros.appendChild(badgeTerror)
}    

function buscarFilmePorTitulo(){
    let tituloBuscado = document.querySelector('#busca-titulo').value;

    console.log(tituloBuscado);

    tituloBuscado = tituloBuscado.trim().toLowerCase();

    console.log(tituloBuscado)

    let resultado = []

    for(let i = 0;i < filmes.length;i++){
        if(filmes[i].titulo.trim().toLowerCase().includes(tituloBuscado)){
            resultado.push(filmes[i]);
        }    
    }

    exibirFilmes(resultado);
}

document.querySelector('#botao-buscar').addEventListener('click',buscarFilmePorTitulo)

listarTodos();

//Atualiza os dados de resumo no carregamento da pagina
atualizarResumo();