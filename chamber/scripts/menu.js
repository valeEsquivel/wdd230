const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const main = document.querySelector('main');

hamButton.addEventListener('click', () => {
    main.classList.toggle('open');
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    // añadir height al nav de 200px
    if (navigation.classList.contains('open')) {
        navigation.style.height = '200px';
    } else {
        navigation.style.height = '50px';
    }
});