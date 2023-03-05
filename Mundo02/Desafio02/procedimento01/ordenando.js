//Trocar os valores de duas posições 
const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]]
}

// Embaralhar os elementos do vetor com base na quantidade de trocas
const shuffle = (vetor, trocas) => {
    for (i = 0; i < trocas; i++) {
        let pos1 = Math.floor(Math.random() * vetor.length)
        let pos2 = Math.floor(Math.random() * vetor.length)
        swap(vetor, pos1, pos2)
    }

}

// Ordenar um vetor de inteiros com o algoritmo Bubble Sort
const bubble_sort = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        let status = false
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let valor = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = valor
                status = true
            }
        }
        if (status == false) {
            break
        }
    }
}

// Ordenar um vetor de inteiros com o algoritmo Selection Sort
const selection_sort = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        let menor = i
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j
            }
        }
        if (i !== menor) {
            swap(vetor, menor, i)
        }
    }
}

// Ordenar um vetor de inteiros com o algoritmo Quick Sort

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio >= fim) return
    let pivot = partition(vetor, inicio, fim)
    quick_sort(vetor, inicio, pivot - 1)
    quick_sort(vetor, pivot + 1, fim)
    return vetor
}

const partition = (vetor, inicio, fim) => {
    const pivot = vetor[inicio]
    let trocaIndice = inicio
    for (let i = inicio + 1; i <= fim; i++) {
        if (pivot > vetor[i]) {
            trocaIndice++
            if (i !== trocaIndice) {
                swap(vetor, i, trocaIndice)
            }
        }
    }
    if (trocaIndice !== inicio) {
        swap(vetor, trocaIndice, inicio)
    }
    return trocaIndice
}


// Manipulação do para manipular o DOM
function add() {
    let numero = document.getElementById("valor");
    let listaValores = document.getElementById("valores")
    if (numero.value == "") {
        alert("Digite um valor para ser adicionado!")
    } else {
        let item = document.createElement('li')
        let texto = document.createTextNode(numero.value)
        item.appendChild(texto)
        listaValores.appendChild(item)
    }
    numero.value = ""
    numero.focus()
}

function ordenar() {
    const listaValores = document.getElementById("valores")
    const listaOpcoes = document.getElementById("opcoes")
    let vetor = []

    if (listaValores.childNodes.length == 0) {
        alert("Você precisa adicionar valores para ordenar.")
    } else {
        for (let i = 0; i < listaValores.children.length; i++) {
            vetor.push(eval(listaValores.children[i].innerHTML))
        }
        switch (listaOpcoes.value) {
            case 'blubbleSort':
                bubble_sort(vetor)
                listaValores.innerHTML = vetor.map(item => `<li>${item}</li>`).join("")
                break;
            case 'selectionSort':
                selection_sort(vetor)
                listaValores.innerHTML = vetor.map(item => `<li>${item}</li>`).join("")
                break;
            case 'quickSort':
                quick_sort(vetor)
                listaValores.innerHTML = vetor.map(item => `<li>${item}</li>`).join("")
                break;
            default:
                break;
        }
    }
}

function misturar() {
    const listaValores = document.getElementById("valores")
    let vetor = []

    if (listaValores.childNodes.length == 0) {
        alert("Você precisa adicionar valores para misturar.")
    } else {
        for (let i = 0; i < listaValores.children.length; i++) {
            vetor.push(eval(listaValores.children[i].innerHTML))
        }
        let pergunta = prompt("Quantos elementos devem mudar de posiçao?")
        shuffle(vetor, pergunta)
        listaValores.innerHTML = vetor.map(item => `<li>${item}</li>`).join("")
    }
}