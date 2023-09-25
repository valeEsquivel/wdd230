const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const main = document.querySelector('main');
const modeButton = document.querySelector("#mode");
const subtitle = document.querySelector("#subtitle");
const card = document.querySelector(".card");

hamButton.addEventListener('click', () => {
    main.classList.toggle('open');
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "❎";
        subtitle.style.color = "#fff";
        card.style.borderColor = "#fff";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "☑️";
        subtitle.style.color = "#161613";
        card.style.borderColor = "#161613";
    }
});