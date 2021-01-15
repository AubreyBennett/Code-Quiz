const initials = document.getElementById('initials');
const saveScore = document.getElementById('saveScore');

initials.addEventListener('keyup', () => {
    console.log(initials.value);

    saveScore.disabled = !initials.value;
});

saveHighScore = e => {
    console.log('clicked on the save button');
    e.preventDefault();
}