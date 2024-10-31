const botao = document.getElementById('btn-add')

let texto = document.getElementById('texto')
let lista = document.querySelector('ol')

botao.addEventListener('click', () => {
    adicionarItem()
})

texto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        adicionarItem()
    }
})

function adicionarItem() {
    const valor = texto.value;

    if (valor) {
        let li = document.createElement("li");
        li.textContent = valor;
        lista.appendChild(li);
        texto.value = '';
    } else {
        alert('Por favor, insira um texto.');
    }
}