const greetings = [
    "Hello!",
    "Hi!",
    "Welcome!",
    "Hey!",
    "Bonjour!",
    "Yo!",
    "Ciao!",
    "Greetings!",
    "こんにちわ！",
    "안녕하세요！",
    "どうも！",
    "Cześć!",
    "Dzień dobry!",
    "Hallo!",
    "G'day mate!",
    "你好！",
    "Hoi!",
    "Привет!",
    "Buenos dias!",
    "Xin chào!"
];

const clickSound = new Audio("/resources/audio/click.wav");
const greetingElement = document.querySelector(".greeting-text");
const menuButton = document.querySelector(".menu-button");
const demiomad = document.querySelector(".demiomad");
const menu = document.querySelector(".menu");
const counter = document.querySelector(".counter");

let isMenuOpen = false;

function initializeCounter() {
    let clicks = getClicks();
    if (clicks <= -1 || isNaN(clicks)) {
        clicks = 0;
        localStorage.setItem("clicks", "0");
    }
    counter.textContent = clicks.toString();
    return clicks;
}

function incrementClicks() {
    let item = getClicks();
    if (item <= -1 || isNaN(item)) {
        localStorage.setItem("clicks", "0");
        item = 0;
    }

    const incremented = item + 1;
    counter.textContent = incremented.toString();
    localStorage.setItem("clicks", incremented.toString());
}

function getClicks() {
    const item = localStorage.getItem("clicks");
    return parseInt(item);
}

document.addEventListener("DOMContentLoaded", () => {
    clickSound.load();

    const idx = Math.floor(Math.random() * greetings.length);
    greetingElement.textContent = greetings[idx] + " 👋";

    initializeCounter();
});

menuButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    menuButton.src = isMenuOpen ?
        "/resources/images/open.png" :
        "/resources/images/closed.png";

    menu.style.opacity = isMenuOpen ? 1 : 0;
    menu.style.translate = isMenuOpen ? "0 0" : "20px 0"
    menu.style.pointerEvents = isMenuOpen ? "auto" : "none";
    menuButton.style.rotate = isMenuOpen ? "-15deg" : "0deg";
});

demiomad.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
    incrementClicks();
});