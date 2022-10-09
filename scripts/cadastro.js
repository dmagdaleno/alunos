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
}