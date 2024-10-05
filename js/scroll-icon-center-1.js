document.addEventListener("DOMContentLoaded", function() {
    // Your scroll opacity code here
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        const button1Start = 300;
        const button1Range = 300;
        let opacity1 = 0;
        if (scrollTop > button1Start) {
            opacity1 = (scrollTop - button1Start) / button1Range;
        }
        opacity1 = Math.max(0, Math.min(1, opacity1));
        button1.style.opacity = opacity1;

        const button2Start = 600;
        const button2Range = 300;
        let opacity2 = 0;
        if (scrollTop > button2Start) {
            opacity2 = (scrollTop - button2Start) / button2Range;
        }
        opacity2 = Math.max(0, Math.min(1, opacity2));
        button2.style.opacity = opacity2;

        const button3Start = 900;
        const button3Range = 300;
        let opacity3 = 0;
        if (scrollTop > button2Start) {
            opacity3 = (scrollTop - button3Start) / button3Range;
        }
        opacity3 = Math.max(0, Math.min(1, opacity3));
        button3.style.opacity = opacity3;
    });
});
