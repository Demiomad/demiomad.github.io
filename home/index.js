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
    "どうも！",
    "Cześć!",
    "Dzień dobry!",
    "Hallo!",
    "G'day mate!",
    "你好！",
    "Hoi!",
    "Привет!",
    "Buenos dias!"
]

document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document
        .querySelector(".greeting");

    greetingElement.textContent = greetings[Math.floor(
        Math.random() * greetings.length)];
})