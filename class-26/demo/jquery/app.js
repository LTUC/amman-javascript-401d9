let state = {};
let source = document.getElementById('stuff-template').innerHTML;
let template = Handlebars.compile(source);

$('#clicker').on('click', () => {
    state.words = state.words
        .split('')
        .reverse()
        .join('');

    render();
});

$('#words-input').on('change', function (e) {
    state.words = $(this).val();
});

function init() {
    state.words = 'nothing to see here :(';
    render();
}

function render() {
    $('#stuff').html(template(state));
}

$(function () {
    init();
})
