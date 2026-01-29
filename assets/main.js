document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-scroll-target]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-scroll-target');
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
