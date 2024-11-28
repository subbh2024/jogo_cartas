// Inicializa variáveis globais
let cartas = []; // Armazenará as cartas dinamicamente
let cartasRestantes = [];
let cartasPuxadas = 0;
let cartaAtual = null;

// Função para carregar as cartas da pasta 'cartas'
function carregarCartas() {
    // Simulação de busca automática de arquivos
    const totalCartas = 20; // Substitua pelo número total de cartas
    for (let i = 1; i <= totalCartas; i++) {
        cartas.push(`cartas/carta_${i}.png`);
    }
    cartasRestantes = [...cartas]; // Copia para embaralhar
    atualizarContagem(); // Atualiza a contagem inicial
}

// Função para puxar uma carta aleatoriamente
function puxarCarta() {
    const status = document.getElementById("status");
    const deck = document.getElementById("deck");
    const cartasContagem = document.getElementById("cartas-contagem");

    if (cartasRestantes.length > 0) {
        // Remove carta anterior
        if (cartaAtual) {
            deck.removeChild(cartaAtual);
        }

        // Sorteia uma carta aleatoriamente
        const indiceAleatorio = Math.floor(Math.random() * cartasRestantes.length);
        const cartaSorteada = cartasRestantes.splice(indiceAleatorio, 1)[0];

        // Mostra a carta sorteada
        cartaAtual = document.createElement("div");
        cartaAtual.classList.add("card");
        cartaAtual.style.backgroundImage = `url(${cartaSorteada})`;
        deck.appendChild(cartaAtual);

        // Atualiza a contagem
        cartasPuxadas++;
        atualizarContagem();
    } else {
        alert("Você já puxou todas as cartas!");
        status.textContent = "Fim do jogo!";
        cartasContagem.textContent = `Cartas puxadas: ${cartasPuxadas} | Cartas restantes: 0`;
    }
}

// Função para atualizar a contagem de cartas
function atualizarContagem() {
    const cartasContagem = document.getElementById("cartas-contagem");
    cartasContagem.textContent = `Cartas puxadas: ${cartasPuxadas} | Cartas restantes: ${cartasRestantes.length}`;
}

// Inicializa o jogo
function iniciarJogo() {
    carregarCartas(); // Carrega as cartas na memória
    document.getElementById("draw-card").addEventListener("click", puxarCarta);
}

// Executa ao carregar a página
iniciarJogo();
