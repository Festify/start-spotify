const cp = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = function (path) {
    return new Promise((res, rej) => {
        fs.access(path, fs.constants.X_OK, hasError => {
            if (hasError) {
                return rej(new Error("File does not exist!", 'not_found'));
            }

            cp.spawn(path, { detached: true });
            res();
        });
    });
};