// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validação básica de formulário
const form = document.querySelector('form');
form?.addEventListener('submit', function(e) {
  const nome = form.querySelector('input[name="nome"]');
  const email = form.querySelector('input[name="email"]');
  const mensagem = form.querySelector('textarea[name="mensagem"]');

  if (!nome.value || !email.value || !mensagem.value) {
    e.preventDefault();
    alert('Por favor, preencha todos os campos.');
  }
});

// Animação ao rolar (fade-in)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.card, .section, .sobre-text').forEach(el => {
  observer.observe(el);
});