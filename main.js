const inputEl = document.getElementById("input-el")
let hasil = ""
let angkaAcak = ""
let karakter = document.getElementById('karakter')
let i = 0
const btnGenerate = document.getElementById("btn-generate")
const btnClose = document.getElementById("btn-class")
const modalEl = document.getElementById("modal-el")


function randomize() {
    angkaAcak = ""
    i = 0
    while(i < karakter.value){
        angkaAcak += Math.random().toString(36).charAt(2); // Menghasilkan karakter acak
        i++
        inputEl.value = angkaAcak
    }
}

karakter.addEventListener("input", () => {
    if (karakter.value > 0)[
        btnGenerate.removeAttribute("disabled"),
        karakter.style.borderColor = "green"
    ]
    else {
        btnGenerate.setAttribute("disabled")
        karakter.style.borderColor = "red"
    }
})

btnGenerate.addEventListener("click", () => {
    if (parseInt(karakter.value) > 0 && parseInt(karakter.value) < 20){
        randomize()
    }
    else {
        modalEl.style.display = "block"
    }
})


btnClose.addEventListener("click", () => {
    modalEl.style.display = "none"
})