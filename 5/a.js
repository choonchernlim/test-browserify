var b = require( './b' );
var $ = require( 'jquery' );

var a = (function () {
    document.write( '<h1>' + b() + '</h1>' );
    document.write( '<h1>' + $( window ).width() + '</h1>' );
})();

console.log( Object.keys( window ) );
