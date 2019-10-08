'use strict';
function readNumber() {
    let number;
    do{
        number = prompt("Введите число:", 0);
        if ( number === null || number === "" ) return null;
    } while ( !isFinite(number) );
    return +number;
}

alert( readNumber() );
