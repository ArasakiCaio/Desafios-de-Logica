const filePath = 'dicas.txt';

document.addEventListener('DOMContentLoaded', function(){
    fetch(filePath)
        .then(response => {
            if(!response.ok) {
                throw new Error ('HTTP error! status ${response.status}');
            }
            return response.text();
        })
        .then(text => {
        const elemento = document.getElementById('tips');
        if (elemento) {
            elemento.textContent = text;
        } else {
            console.error('Elemento #tips não encontrado');
        }
    })
    .catch(error => {
        console.error('Erro ao carregar as dicas', error);
        const elemento = document.getElementById('tips');
        if (elemento) {
            elemento.textContent = 'Falha ao carregar as dicas';
        }
    })
})