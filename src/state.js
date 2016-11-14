'use strict';

/**
 * a helper state object
 * to parse/generate url
 */

class State {
    constructor(url) {
        this.base = '';
        this.params = {};
        this.parse(url);
    }

    // parse a url, get params
    parse(url){
        let segs = url.split('?');
        this.base = segs[0];

        if (segs.length < 2){
            return;
        }

        segs[1].split('&').forEach((chunk) => {
            let pair = chunk.split('=');
            if (pair.length){
                this.params[pair[0]] = pair[1];
            }
        });
    }

    // generate a url
    generate(){
        return this.base + '?' + Object.keys(this.params).map((key) => `${key}=${this.params[key]}`).join('&');
    }
}

if (typeof module !== 'undefined'){
    module.exports = State;
}
