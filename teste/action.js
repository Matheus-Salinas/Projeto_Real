// JavaScript para dispositivos móveis
document.querySelectorAll('.pagina1, .pagina2, .pagina3, .pagina4').forEach(item => {
    item.addEventListener('click', () => {
        const descricao = item.querySelector('.descricao, .descricao2, .descricao3, .descricao4');
        descricao.classList.toggle('show'); // Alterna a visibilidade
    });
});

// Função para verificar se um elemento está visível na tela
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'in-view' quando o elemento entra na tela
function handleScroll() {
    const escolas = document.querySelectorAll('.Escola_1, .Escola_2, .Escola_3');
    escolas.forEach(function (escola, index) {
        if (isInViewport(escola)) {
            // Adiciona um pequeno delay com base no índice da escola (imagem)
            setTimeout(() => {
                escola.classList.add('in-view');
            }, index * 300); // Delay de 300ms entre cada imagem
        }
    });
}

// Adiciona o listener de rolagem
window.addEventListener('scroll', handleScroll);

// Chama a função imediatamente para verificar os elementos ao carregar a página
handleScroll();

