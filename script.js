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


 const dot = document.querySelector(".cursor-dot")
        const orbit = document.querySelector(".cursor-orbit")

        let mouseX = 0;
        let mouseY = 0;

        let orbitX = 0;
        let orbitY = 0;


        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY
            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        });

        function animate() {
            orbitX += (mouseX - orbitX) * 0.25;
            orbitY += (mouseY - orbitY) * 0.25;

            orbit.style.left = orbitX + "px";
            orbit.style.top = orbitY + "px";

            requestAnimationFrame(animate)
        }

        animate()
