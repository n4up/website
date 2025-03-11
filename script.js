// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'show' aos depoimentos visíveis
function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        if (isElementInViewport(testimonial)) {
            testimonial.classList.add('show');
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', showTestimonials);

// Executa a função ao carregar a página para verificar elementos já visíveis
window.addEventListener('load', showTestimonials);
