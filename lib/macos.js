const as = require('node-osascript');

const START_SPOTIFY = "tell application \"Spotify\" to run";

module.exports = function() {
    return new Promise((res, rej) => {
        as.execute(START_SPOTIFY, null, (err, result) => err ? rej(err) : res());
    })
        .catch(err => {
            const e = err.indexOf('-43') !== -1 ?
                new Error("Application is not installed!", 'not_found') :
                new Error(err);
            return Promise.reject(e);
        });
};