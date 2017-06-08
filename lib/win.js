const path = require('path');
const startPath = require('./start-path');

const spotifyPath = path.join(process.env.APPDATA, 'Spotify', 'Spotify.exe');

module.exports = function () {
    return startPath(spotifyPath);
};