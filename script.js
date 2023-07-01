const button = document.querySelector('.botaoEnviar');
const input = document.querySelector('.caixaDeTexto');
const listaCompleta = document.querySelector('.Tabela');

let minhaListaDeItens = [];

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    });
    input.value ="";

    mostrarTarefa();
}

function mostrarTarefa(){

    let novaLi = '';

    minhaListaDeItens.forEach((item, index) =>{

        novaLi = novaLi + `
            <li class="ListaDeIntens ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="Imagem-de-checado" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash-bin.png" alt="Imagem-do-lixo" onclick="deletarItem(${index})">
            </li>
        `

    })

listaCompleta.innerHTML = novaLi;

localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));

}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1);
    mostrarTarefa();
}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;
    mostrarTarefa();
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista');

    if(tarefasLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasLocalStorage);
    }
    mostrarTarefa();
}

recarregarTarefas();
button.addEventListener('click',adicionarNovaTarefa);