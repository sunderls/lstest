'use strict';
/**
 * test helper
 * @param {title} title - spec title
 * @param {function} spec - the spec function
 * it console.log the result
 */
module.exports = (title, spec) => {
    try {
        spec();
        console.log(`✓ ${title}`);
    } catch (e){
        process.exitCode = 1;
        console.log(`✘ ${title}`);
    }
};

