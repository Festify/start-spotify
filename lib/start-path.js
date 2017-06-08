const cp = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = function (path) {
    return new Promise((res, rej) => {
        fs.access(path, fs.constants.X_OK, err => {
            if (err) {
                return rej({msg: "File does not exist!", reason: "ENOTFOUND"});
            }

            cp.execFile(path, (err, result) => {
                if (err) {
                    return rej(err);
                }

                result.disconnect();
                return res();
            });
        });
    });
};