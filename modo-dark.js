const checkButton = document.querySelector('#modo-noturno');
const body = document.querySelector('body');

checkButton.addEventListener('click', () => {
    const modo = checkButton.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', modo);
})