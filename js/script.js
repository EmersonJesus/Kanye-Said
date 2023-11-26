const urlApi = "https://api.kanye.rest";
let quote;
const imageElement = document.getElementById('kanyeImage');
let currentImageIndex = 1;

function getRandomImage() {
    currentImageIndex = (currentImageIndex % 5) + 1; 
    const imagePath = `images/${currentImageIndex}.png`;
    imageElement.src = imagePath;
}

async function getQuote() {
    try {
        const resposta = await fetch(urlApi);

        if (resposta.ok) {
            const dados = await resposta.json();
            return dados.quote;
        } else {
            console.error("Erro ao obter a cotação:", resposta.status);
            return "Falha ao obter a cotação";
        }
    } catch (erro) {
        console.error("Erro:", erro.message);
        return "Falha ao obter a cotação";
    }
}

async function showQuote() {
    const p = document.querySelector('.quote');
    quote = await getQuote();
    p.innerText = `"${quote}"`;

    // Mudando a cor de fundo ao exibir a citação
    document.body.style.backgroundColor = getRandomColor();
    // Mudando a imagem do kanye 
    getRandomImage();
}

// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Chame a função exibirCotacao para obter e exibir a cotação
showQuote();
// Adicionando um ouvinte de evento para o clique do botão
document.getElementById('btn-quote').addEventListener('click', showQuote);
