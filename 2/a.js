var b = function () {
    return 'Hello!';
};

var a = (function () {
    document.write( '<h1>' + b() + '</h1>' );
})();

console.log( Object.keys( window ) );
