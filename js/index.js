const contaTags = document.querySelectorAll('.conta')
const formTags = document.querySelectorAll('.form')
const removeBtn = document.getElementById('remove')
const trocaBtn = document.getElementById('troca')
const entrarBtn = document.getElementById('entrar')
const form = document.getElementById("form")

function mostraConta() { // função que mostra login com conta
    contaTags.forEach(tag => tag.classList.remove('hidden'))
}

function ocultaConta() { // função que oculta login com conta
    contaTags.forEach(tag => tag.classList.add('hidden'))
}

function mostraForm() { // função que mostra login com form
    formTags.forEach(tag => tag.classList.remove('hidden'))
}

function ocultaForm() { // função que oculta login com form
    formTags.forEach(tag => tag.classList.add('hidden'))
}

function limpaForm() {
    form[0].value = ""
    form[1].value = ""
    entrarBtn.disabled = true
}

function loginConta() { // funçào que troca para login com conta
    ocultaForm()
    mostraConta()
}

function loginForm() { // funçào que troca para login com form
    ocultaConta()
    mostraForm()
    limpaForm()
}

form.oninput = function () { // função que valida inputs e ativa o botão

    if ( (form[0].value.length > 0) && (form[1].value.length > 0) ) {
        entrarBtn.disabled = false
    }

    if ( (form[0].value.length == 0) || (form[1].value.length == 0) ) {
        entrarBtn.disabled = true
    }
}

entrarBtn.onclick = loginConta
removeBtn.onclick = loginForm
trocaBtn.onclick = loginForm