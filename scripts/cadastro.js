let alunos = JSON.parse(localStorage.getItem('alunos'))
if(alunos == null) {
    alunos = []
}

const indice = location.search.split('=')[1]
const formEdicao = indice !== undefined 
if(formEdicao) {
    preencheFormulario(indice)
}

function preencheFormulario(indice) {
    let aluno = alunos[indice]
    document.getElementById('nome').value = aluno.nome
    document.getElementById('email').value = aluno.email
    document.getElementById('idade').value = aluno.idade
    document.getElementById('sexo').value = aluno.sexo
    document.getElementById('curso-logica').checked = aluno.cursoLogica
    document.getElementById('curso-html').checked = aluno.cursoHtml
    document.getElementById('curso-js').checked = aluno.cursoJs
}

function salvar() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let idade = document.getElementById('idade').value
    let sexo = document.getElementById('sexo').value
    let foto = document.getElementById('foto').value
    let logica = document.getElementById('curso-logica').checked
    let html = document.getElementById('curso-html').checked
    let js = document.getElementById('curso-js').checked

    if(nome === undefined || nome === null || nome === '') {
        document.getElementById('erro-nome').classList.remove('fade')
        setTimeout(() => {
            document.getElementById('erro-nome').classList.add('fade')
        }, 1500)
        return
    }

    if(email === undefined || email === null || email === '') {
        document.getElementById('erro-email').classList.remove('fade')
        setTimeout(() => {
            document.getElementById('erro-email').classList.add('fade')
        }, 1500)
        return
    }
    
    let aluno = {
        nome: nome,
        email: email,
        idade: idade,
        sexo: sexo,
        foto: foto,
        cursoLogica: logica,
        cursoHtml: html,
        cursoJs: js
    }

    if(formEdicao) {
        alunos[indice] = aluno
    } else {
        alunos.push(aluno)
    }

    localStorage.setItem('alunos', JSON.stringify(alunos))

    document.getElementById('sucesso').classList.remove('fade')
    setTimeout(() => {
        document.getElementById('sucesso').classList.add('fade')
    }, 1500)

    limpaFormulario()
}

function limpaFormulario() {
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('sexo').value = ''
    document.getElementById('foto').value = ''
    document.getElementById('curso-logica').checked = false
    document.getElementById('curso-html').checked = false
    document.getElementById('curso-js').checked = false
}

function someAlerta() {
    document.getElementById('sucesso').classList.add('fade')
}