const sidebar = document.querySelector('.sidebar');
let itens = document.querySelector('#itens');
let toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    const isExpanded = sidebar.classList.toggle('expanded');
    itens.style.display = isExpanded ? "block" : "none";
});