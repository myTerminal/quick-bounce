/* global require module */

const path = require('path'),
    bouncy = require('bouncy');

module.exports.bounce = (configFileName, portNumber) => {
    const configFilePath = path.join(path.dirname(require.main.filename), configFileName),
        configs = require(configFilePath);

    bouncy(
        (req, res, bounce) => {
            const website = configs.websites
                .filter(w => w.host === req.headers.host)
                .concat({ port: configs.websites[0].port })[0];

            console.log(`Bouncing from ${req.headers.host} to ${website.port}`);
            bounce(website.port);
        }
    ).listen(portNumber);
};
