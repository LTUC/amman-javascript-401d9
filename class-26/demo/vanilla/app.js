let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', () => {
    state.words = state.words
        .split('')
        .reverse()
        .join('');

    render();
});

let input = document.getElementById('words-input');
input.addEventListener('change', handleInput);

function handleInput(e) {
    state.words = e.target.value;
}

function init() {
    state.words = 'nothing to see here :(';
    render();
}

function render() {
    document.getElementById('words').textContent = state.words;
}

init();