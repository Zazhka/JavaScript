'use strict';

function checkSpam(str) {
    str = str.toLowerCase();

    return (str.includes("viagra") || str.includes("xxx"));

}

// alert( checkSpam('viagra') );