(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  function updateScroll() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? window.scrollY / scrollable * 100 : 0}%`;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    if (open) closeMenu();
    else {
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Cerrar menú');
      mobileNav.hidden = false;
      document.body.classList.add('menu-open');
    }
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 821px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  const goals = {
    fuerza: {
      heading: 'Más fuerza, con buena técnica.',
      description: 'Trabaja tus movimientos con un profesor que te guía en cada sesión y adapta el entrenamiento a tus capacidades.',
      message: 'Hola Body Power, quiero trabajar mi fuerza y agendar una clase de prueba.'
    },
    habito: {
      heading: 'Constancia que se construye contigo.',
      description: 'Entrena con una guía presente, objetivos claros y sesiones pensadas para que puedas sostener tu progreso.',
      message: 'Hola Body Power, quiero comenzar a entrenar y crear un hábito. ¿Podemos conversar?'
    },
    medir: {
      heading: 'Conoce desde dónde empiezas.',
      description: 'Consulta por la evaluación corporal con bioimpedancia y el seguimiento disponible para tu plan.',
      message: 'Hola Body Power, me interesa una evaluación corporal para conocer mi punto de partida.'
    }
  };
  const goalHeading = document.getElementById('goal-heading');
  const goalDescription = document.getElementById('goal-description');
  const goalLink = document.getElementById('goal-link');
  document.querySelectorAll('.goal-option').forEach(button => {
    button.addEventListener('click', () => {
      const goal = goals[button.dataset.goal];
      if (!goal) return;
      document.querySelectorAll('.goal-option').forEach(option => {
        const active = option === button;
        option.classList.toggle('is-active', active);
        option.setAttribute('aria-pressed', String(active));
      });
      goalHeading.textContent = goal.heading;
      goalDescription.textContent = goal.description;
      goalLink.href = `https://wa.me/56944303959?text=${encodeURIComponent(goal.message)}`;
    });
  });

  const facts = [
    'En Body Power cada alumno entrena con su profesor, salvo cuando elige la modalidad 2x1.',
    'Tu plan puede incluir mediciones de bioimpedancia para revisar cómo vas avanzando.',
    'En el mismo lugar puedes encontrar entrenamiento, estética corporal y Be You by BPower.'
  ];
  let factIndex = 0;
  document.getElementById('next-fact').addEventListener('click', () => {
    factIndex = (factIndex + 1) % facts.length;
    document.getElementById('fact-text').textContent = facts[factIndex];
    document.getElementById('fact-number').textContent = `${String(factIndex + 1).padStart(2, '0')} / 03`;
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
