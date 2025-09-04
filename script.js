// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  // small 3d effect
  themeToggle.animate([{transform:'rotate(-6deg)'},{transform:'rotate(6deg)'},{transform:'rotate(0)'}],{duration:600});
});

// Title rainbow hover 3d push
const mainTitle = document.getElementById('main-title');
mainTitle.addEventListener('mousemove', e=>{
  const rX = (e.clientY - window.innerHeight/2)/40;
  const rY = (e.clientX - window.innerWidth/2)/40;
  mainTitle.style.transform = `rotateX(${ -rX }deg) rotateY(${ rY }deg) translateZ(6px)`;
});
mainTitle.addEventListener('mouseleave', ()=> mainTitle.style.transform='');

// project carousel (flowing) - minimal placeholder
(function(){
  // If you add a project list, animate it here (continuous marquee)
})();
