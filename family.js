document.querySelectorAll('.family-node').forEach(n=>{
  n.addEventListener('click',()=>{
    n.classList.toggle('open');
    // 3d touch effect
    n.animate([{transform:'scale(0.98)'},{transform:'scale(1)'}],{duration:200,easing:'ease-out'});
  })
});
