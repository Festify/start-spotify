const as = require('node-osascript');

const START_SPOTIFY = "tell application \"Spotify\" to run";

module.exports = function() {
    return new Promise((res, rej) => {
        as.execute(START_SPOTIFY, null, (err, result) => err ? rej(err) : res());
    })
        .catch(err => {
            return err.indexOf('-43') !== -1 ? Promise.reject({
                msg: "Application is not installed!",
                reason: "ENOTFOUND"
            }) : Promise.reject(err);
        });
};