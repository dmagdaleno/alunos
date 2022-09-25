let alunos = JSON.parse(localStorage.getItem('alunos'))

let tabela = document.getElementById('tabela-alunos')

alunos.forEach(function(aluno, indice) {
    let linha = tabela.insertRow()
    let nome = linha.insertCell(0)
    nome.innerHTML = aluno.nome
    let idade = linha.insertCell(1)
    idade.innerHTML = aluno.idade
    let email = linha.insertCell(2)
    email.innerHTML = aluno.email

    var img = document.createElement('img')
    img.src = './imagens/apagar.png'
    img.style.width = '15px'
    let acoes = linha.insertCell(3)
    acoes.appendChild(img)

    img.addEventListener('click', () => apagar(indice))
})

function apagar(indice) {
    alunos.splice(indice, 1)
    localStorage.setItem('alunos', JSON.stringify(alunos))
    document.location.reload()
}