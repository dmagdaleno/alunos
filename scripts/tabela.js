const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/alunos/'

fetch(url).then(function (resposta) {
    console.log('Sucesso!', resposta.status)
    return resposta.json()
})
    .then(function (alunos) {
        let tabela = document.getElementById('tabela-alunos')

        alunos.forEach(function (aluno, indice) {
            let linha = tabela.insertRow()
            let nome = linha.insertCell(0)
            nome.innerHTML = aluno.nome
            let idade = linha.insertCell(1)
            idade.innerHTML = aluno.idade
            let email = linha.insertCell(2)
            email.innerHTML = aluno.email

            var imgApagar = document.createElement('img')
            imgApagar.src = './imagens/apagar.png'
            imgApagar.style.width = '15px'
            let acoes = linha.insertCell(3)
            acoes.appendChild(imgApagar)

            var imgEditar = document.createElement('img')
            imgEditar.src = './imagens/editar.png'
            imgEditar.style.width = '15px'
            acoes.appendChild(imgEditar)

            imgApagar.addEventListener('click', () => apagar(aluno.id))
            imgEditar.addEventListener('click', () => editar(aluno.id))
        })
    })
    .catch(function (erro) {
        console.warn('Algo deu errado', erro)
    });



function editar(indice) {
    window.location.href = './cadastro.html?indice=' + indice
}

function apagar(id) {
    fetch(url + id, { method: 'DELETE' })
        .then(function(resposta) {
            console.log('Apagado com sucesso', resposta)
            document.location.reload()
        })
}