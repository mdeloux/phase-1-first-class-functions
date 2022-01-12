function receivesAFunction(char) {
    char();
}

function returnsANamedFunction() {
    return character;
}
function character() { }



function returnsAnAnonymousFunction() {
    return function () { };
}
