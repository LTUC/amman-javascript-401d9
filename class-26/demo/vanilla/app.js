let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('wordsInput');
input.addEventListener('change', e => {
    console.log(e.target.value);
    state.words = e.target.value;
});


function handleClick(e) {
    e.preventDefault();
    state.words = state.words
        .split('')
        .reverse()
        .join('');

    render();
}

function init() {
    state.clicks = 0;
    state.words = 'nothing to see here';

    render();
}

function render() {
    document.getElementById('words').textContent = state.words;
}

init();