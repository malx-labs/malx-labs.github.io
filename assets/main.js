const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.menu-panel');

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    panel.classList.toggle('open');
  });

  document.querySelectorAll('.menu-panel a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      panel.classList.remove('open');
    });
  });
}

const scrollCue = document.querySelector('.scroll-cue');
if (scrollCue) {
  scrollCue.addEventListener('click', () => {
    const targetId = scrollCue.getAttribute('data-scroll-target');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

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
