// map links open Google Maps with query
document.querySelectorAll('.map-link').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const q = e.currentTarget.dataset.q;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
    window.open(url, '_blank');
  })
});
