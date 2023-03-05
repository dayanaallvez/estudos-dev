//Vetor de elementos
const receitas = [
    {
        "titulo": "Arroz de Couve-Flor",
        "imagem": "./imagens/img-arroz.jpg",
        "preparo": "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        "ingredientes": ["Arroz", "Couve-Flor", "Cebole Média", "Azeite"]
    },
    {
        "titulo": "Bolo de Café",
        "imagem": "./imagens/img-bolo.jpg",
        "preparo": "Bata o açúcar, as gemas e o café. Adicione Farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
        "ingredientes": ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"]
    },
    {
        "titulo": "Coxinha de Brigadeiro",
        "imagem": "./imagens/img-coxinha.jpg",
        "preparo": "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe o granulado.",
        "ingredientes": ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"]
    }
]

//Funções

function getListaIngredientes(itens) {
    let lista = ""
    for (i of itens) {
        lista += `<li>${i}</li>`
    }
    return lista 
}


function getCard(receitas) {
    return(
        `<div class="card" style="width: 300px; height: 500px;">
            <img class="card-img-top" style="height: 164px;" src="${receitas.imagem}" alt="Receita de comida">
            <div class="card-body">
                <h2 class="card-title">${receitas.titulo}</h2>
                <div class="card-text">
                    <ul>${getListaIngredientes(receitas.ingredientes)}</ul>
                    <hr>
                    <p>${receitas.preparo}</p>
                </div>
            </div>
        </div>
    `
    )
}

function preencheCatalogo() {
    let card = document.getElementById("pnlCatalogo")
    card.innerHTML = receitas.map(getCard).reduce((acc, curr) => acc + curr, "")
}
