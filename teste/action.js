// JavaScript para dispositivos móveis
document.querySelectorAll('.pagina1, .pagina2, .pagina3, .pagina4').forEach(item => {
    item.addEventListener('click', () => {
        const descricao = item.querySelector('.descricao, .descricao2, .descricao3, .descricao4');
        descricao.classList.toggle('show'); // Alterna a visibilidade
    });
});

