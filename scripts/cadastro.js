const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/alunos/'

const id = location.search.split('=')[1]
const formEdicao = id !== undefined 
if(formEdicao) {
    fetch(url + id).then(function (resposta) {
        console.log('Encontrado aluno com id ' + id)
        return resposta.json()
    })
    .then(function (aluno) { 
        preencheFormulario(aluno)
    })
}

function preencheFormulario(aluno) {
    console.log('Editando aluno ' + aluno.id)
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

    let metodo
    if(formEdicao) {
        metodo = 'PUT'
        aluno.id = id
    } else {
        metodo = 'POST'
    }

    fetch(url, { 
        method: metodo, 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno)
      })
      .then(function(resposta) {
          console.log('Salvo com sucesso', resposta)
      })

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