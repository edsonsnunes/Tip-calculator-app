let valorConta = document.getElementById("valorConta")
let cinco = document.getElementById("cinco")
let dez = document.getElementById("dez")
let quinze = document.getElementById("quinze")
let vinteCinco = document.getElementById("vinteCinco")
let cinquenta = document.getElementById("cinquenta")
let custom = document.getElementById("custom")
let respTip = document.getElementById("respTip")
let respTotal = document.getElementById("respTotal")
let numPessoas = document.getElementById("numPessoas")
let reset = document.getElementById("reset")
let porcetagem = Number

numPessoas.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calcular(porcetagem)
    }
});

function gravaValor(valorEscolhido) {
    porcetagem = valorEscolhido
}

function calcular(porcetagem) {
    if (Number(valorConta.value) == 0 || Number(numPessoas) == 0) {
        respTip.innerHTML = `$0.00 `
        respTotal.innerHTML = `$ 0.00`
    } else {
        let res = (Number(valorConta.value) * porcetagem / 100)
        respTip.innerText = `$${res.toFixed(2)}`
        let resTot = Number(valorConta.value) + (Number(valorConta.value) * porcetagem / 100)
        let respFinal = Number(resTot / Number(numPessoas.value))
        respTotal.innerText = `$${respFinal.toFixed(2)}`
    }
}

function resetar() {
    respTip.innerText = `$0.00`
    respTotal.innerText = `$0.00`
}


cinco.addEventListener("click", () => gravaValor(5))
dez.addEventListener("click", () => gravaValor(10))
quinze.addEventListener("click", () => gravaValor(15))
vinteCinco.addEventListener("click", () => gravaValor(25))
cinquenta.addEventListener("click", () => gravaValor(50))
custom.addEventListener("change", () => gravaValor(custom.value))
reset.addEventListener("click", () => resetar())