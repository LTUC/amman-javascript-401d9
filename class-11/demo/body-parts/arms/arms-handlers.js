'use strict';

function coverEyes(payload) {
    if (payload.brightness > 70) {
        console.log('Cover eyes with hands!!!');
    }
}

module.exports = { coverEyes };
