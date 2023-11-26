const urlApi = "https://api.kanye.rest";
let quote;

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
}

// Chame a função exibirCotacao para obter e exibir a cotação
showQuote();
// Adicionando um ouvinte de evento para o clique do botão
document.getElementById('btn-quote').addEventListener('click', showQuote);
