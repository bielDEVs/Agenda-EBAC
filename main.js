const form = document.getElementById('form-contatos');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinhas()
    atualizaTabela()
}) 

function adicionarLinhas() {
    const inputContatos = document.getElementById('contatos');
    const inputTelefone = document.getElementById('telefone');

    if (contatos.includes(inputContatos.value)) {
        alert(`O contato: ${inputContatos.value} já foi inserido`);
    } else {
        contatos.push(inputContatos.value);
        telefone.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputContatos.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}