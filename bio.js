// Live age counter and summary with AD->BS approximate conversion
(function(){
  // AD birth date/time (from user)
  const start = new Date('2004-10-23T23:17:00'); // AD given by user
  const elLive = document.getElementById('age-live');
  const elSum = document.getElementById('age-summary');

  function pad(n){return String(n).padStart(2,'0')}

  // Approximate AD -> BS converter:
  // Bikram Sambat is roughly AD + 56 years and ~8-9 months.
  // For a more precise conversion use a full BS lookup table; here we provide a close estimate and the exact AD values.
  function adToBsApprox(d){
    // Add 56 years
    const y = d.getFullYear() + 56;
    // Add 8 months and adjust day
    const m = d.getMonth() + 1 + 8; // JS months 0-11, so +1 then +8
    const day = d.getDate();
    let by = y;
    let bm = m;
    if(bm > 12){
      by += Math.floor((bm-1)/12);
      bm = ((bm-1) % 12) + 1;
    }
    return {bsYear: by, bsMonth: bm, bsDay: day};
  }

  function update(){
    const now = new Date();
    let diff = Math.floor((now - start) / 1000); // seconds
    const years = Math.floor(diff / (3600*24*365.2425));
    diff -= Math.floor(years * 365.2425 * 24 * 3600);
    const months = Math.floor(diff / (3600*24*30.436875));
    diff -= Math.floor(months * 30.436875 * 24 * 3600);
    const days = Math.floor(diff / (3600*24));
    diff -= days * 3600*24;
    const hours = Math.floor(diff / 3600); diff -= hours*3600;
    const minutes = Math.floor(diff/60); diff -= minutes*60;
    const seconds = diff;

    elLive.innerHTML = `Years: <strong>${years}</strong> | Months: <strong>${months}</strong> | Days: <strong>${days}</strong><br> ${pad(hours)}:${pad(minutes)}:${pad(seconds)} (hh:mm:ss)`;

    // Summary totals
    const totalSeconds = Math.floor((new Date() - start)/1000);
    const totalMinutes = Math.floor(totalSeconds/60);
    const totalHours = Math.floor(totalMinutes/60);
    const totalDays = Math.floor(totalHours/24);
    const bs = adToBsApprox(start);
    elSum.innerHTML = `Total days: <strong>${totalDays}</strong> — Total hours: <strong>${totalHours}</strong> — Total minutes: <strong>${totalMinutes}</strong> — Total seconds: <strong>${totalSeconds}</strong><br><small>Approx BS birth date: ${bs.bsYear}-${String(bs.bsMonth).padStart(2,'0')}-${String(bs.bsDay).padStart(2,'0')} (approx)</small>`;
  }
  update();
  setInterval(update,1000);
})();
