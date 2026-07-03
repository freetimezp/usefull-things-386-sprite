const sprite = document.querySelector(".sprite");
const buttons = document.querySelectorAll("[data-row]");
const slider = document.getElementById("speed");
const play = document.getElementById("play");

let paused = false;

buttons.forEach((button) => {
    button.onclick = () => {
        const row = button.dataset.row;

        sprite.style.setProperty("--row", `-${row * 275}px`);
    };
});

slider.oninput = () => {
    sprite.style.animationDuration = `${1 / slider.value}s`;
};

play.onclick = () => {
    paused = !paused;

    sprite.style.animationPlayState = paused ? "paused" : "running";

    play.innerHTML = paused ? "Play" : "Pause";
};

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;

    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    sprite.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
        scale(1.05)
    `;
});
