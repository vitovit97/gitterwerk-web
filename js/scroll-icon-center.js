document.addEventListener("DOMContentLoaded", function() {
  // Your scroll opacity code here
  const icon1 = document.getElementById('Icon-sec-2-center-1');
  const icon2 = document.getElementById('Icon-sec-2-center-2');
  const icon3 = document.getElementById('Icon-sec-2-center-3');
  const icon4 = document.getElementById('Icon-sec-2-center-4');

  window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      const icon1Start = 100;
      const icon1Range = 200;
      let opacity1 = 0;
      if (scrollTop > icon1Start) {
          opacity1 = (scrollTop - icon1Start) / icon1Range;
      }
      opacity1 = Math.max(0, Math.min(1, opacity1));
      icon1.style.opacity = opacity1; 

      const icon2Start = 200;
      const icon2Range = 200;
      let opacity2 = 0;
      if (scrollTop > icon2Start) {
          opacity2 = (scrollTop - icon2Start) / icon2Range;
      }
      opacity2 = Math.max(0, Math.min(1, opacity2));
      icon2.style.opacity = opacity2;

      const icon3Start = 300;
      const icon3Range = 200;
      let opacity3 = 0;
      if (scrollTop > icon3Start) {
          opacity3 = (scrollTop - icon3Start) / icon3Range;
      }
      opacity3 = Math.max(0, Math.min(1, opacity3));
      icon3.style.opacity = opacity3;

      const icon4Start = 400;
      const icon4Range = 200;
      let opacity4 = 0;
      if (scrollTop > icon4Start) {
          opacity4 = (scrollTop - icon4Start) / icon4Range;
      }
      opacity4 = Math.max(0, Math.min(1, opacity4));
      icon4.style.opacity = opacity4;
  });
});
