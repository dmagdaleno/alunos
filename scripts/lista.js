let alunos = JSON.parse(localStorage.getItem('alunos'))

let lista = document.getElementById('lista-alunos')

for(let aluno of alunos) {
    let item = document.createElement('li')
    let texto = aluno.nome + ' - ' + aluno.idade + ' - ' + aluno.email
    let textoItem = document.createTextNode(texto)
    item.appendChild(textoItem)
    lista.appendChild(item)
}