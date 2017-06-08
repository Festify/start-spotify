const os = require('os');

let platform;
switch (os.platform()) {
    case 'darwin':
        platform = require('lib/macos');
        break;
    case 'win32':
        platform = require('lib/win');
        break;
    default:
        throw "Unsupported platform!"
}

module.exports = platform;