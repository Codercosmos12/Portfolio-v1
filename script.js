const lenis = new lenis({
    duration: 1.2,
    smoothWheel: true,
    easing: (t) => 1 - Math.pow(1 - t, 3),
});

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf)
