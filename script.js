//variaveis
let musicas = [
    {
        titulo:'BANDEIRA BRANCA',
        autor:'Tião Carreiro e Pardinho',
        src:'music/BANDEIRA BRANCA.mp3',
        img:'img/paisagem01.jpg'
    },
    {
        titulo:'RIO PRETO DE LUTO',
        autor:'Tião Carreiro e Pardinho',
        src:'music/RIO PRETO DE LUTO.mp3',
        img:'img/paisagem02.jpg'
    },
    {
        titulo:'CABELO LOIRO',
        autor:'Tião Carreiro e Pardinho',
        src:'music/CABELO LOIRO.mp3',
        img:'img/paisagem03.jpg'
    },
    
    {
        titulo:'MEU FRACASSO',
        autor:'Tião Carreiro e Pardinho',
        src:'music/MEU FRACASSO.mp3',
        img:'img/paisagem05.jpg'
    },
    {
        titulo:'ROXINHA',
        autor:'Tião Carreiro e Pardinho',
        src:'music/ROXINHA.mp3',
        img:'img/paisagem01.jpg'
    },
    {
        titulo:'TEM E NÃO TEM',
        autor:'Tião Carreiro e Pardinho',
        src:'music/TEM E NÃO TEM.mp3',
        img:'img/paisagem04.jpg'
    },
    {
        titulo:'SÓ LEMBRANÇAS',
        autor:'Rionegro e Solimões',
        src:'music/Rionegro & Solimões - Só Lembranças.mp3',
        img:'img/paisagem01.jpg'
    },

];

let indexMusica = 0;
let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.description h2');
let nomeAutor = document.querySelector('.description i');
//variaveis-fim--------------------------------------------------
//codigo main
renderizarMusica(indexMusica);

duracaoMusica.textContent = SegundosParaMinutos(Math.floor(musica.duration));
//codigo main-fim-----------------------------------------------
//Eventos
document.querySelector('.botao-play').addEventListener('click',tocarMusica);
document.querySelector('.botao-pause').addEventListener('click',pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('#setaVoltar').addEventListener('click',()=>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 6;
    }
    renderizarMusica(indexMusica);
    musica.play()
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
});

document.querySelector('#setaAvancar').addEventListener('click',()=>{
    indexMusica++;
    if(indexMusica > 6){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play()
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
});
//eventos-fim-------------------------------------------------
//Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata',()=>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeAutor.textContent = musicas[index].autor;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = SegundosParaMinutos(Math.floor(musica.duration));
    });
}
console.log(musicas[0].src)


function atualizarBarra(){
    //seleciona a barra
let barra = document.querySelector('progress');
// corrent time: estado atual   duration: duração *100(em porcentagem e concatena com '%';) vai mexer a barra de acordo com a porcentagem e a funcao Math.floor arredonda para 1 casa se for 2.89% vai ser 2%
barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
let tempoDecorrido = document.querySelector('.inicio');
tempoDecorrido.textContent = SegundosParaMinutos(Math.floor(musica.currentTime));
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function SegundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos} `
}


