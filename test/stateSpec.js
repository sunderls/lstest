const State = require('../src/state.js');

test('should works when one param', () => {
    let state = new State('http://colla.me?a=3');
    console.assert(state.params.a === '3');
});

test('should works when two params', () => {
    let state = new State('http://colla.me?a=3&b=4');
    console.assert(state.params.a === '3');
    console.assert(state.params.b === '4');
});

test('should ignore invalid param', () => {
    let state = new State('http://colla.me?a=3&b');
    console.assert(state.params.a === '4');
    console.assert(state.params.b === undefined);
});
