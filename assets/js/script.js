// Smooth Scroll Navbar
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Fade-in Sections
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = {threshold:0.2,rootMargin:"0px 0px -50px 0px"};
const appearOnScroll = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader=>{appearOnScroll.observe(fader)});

// Dark Mode Toggle
const toggleBtn = document.querySelector('.dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
