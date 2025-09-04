// simple lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbClose = document.querySelector('.lb-close');
document.getElementById('gallery-grid').addEventListener('click',e=>{
  const t = e.target.closest('img'); if(!t) return;
  lbImg.src = t.dataset.src || t.src; lb.setAttribute('aria-hidden','false');
});
lbClose.addEventListener('click',()=>{lb.setAttribute('aria-hidden','true');lbImg.src='';});

// Show year in footer
document.getElementById('year').textContent = new Date().getFullYear();
