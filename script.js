const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`), {
        method: 'GET'
        Headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then ((Response) => Response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.especie;
        status.innerHTML
    }).
}

botao.onclick = pegarPersonagem;