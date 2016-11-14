let state = new State(window.location.href);
let prevClick = state.params.click;
let clickbutton = new ClickButton(document.querySelector('button'));

test('first click ok', () => {
    clickbutton.onClick();
    state = new State(window.location.href);
    console.assert(state.params.click * 1 === (prevClick || 0) * 1 + 1);
});


test('second click ok', () => {
    prevClick = state.params.click;
    clickbutton.onClick();
    state = new State(window.location.href);
    console.assert(state.params.click * 1 === (prevClick || 0) * 1 + 2);
});

end();
