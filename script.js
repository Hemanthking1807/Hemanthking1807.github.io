const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.opacity = 1;
  });
}, {threshold: .08});
document.querySelectorAll('.section, .project-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transition = 'opacity .7s ease, transform .25s ease';
  observer.observe(el);
});
