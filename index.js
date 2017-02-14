/* global require module */

var path = require("path"),
    bouncy = require("bouncy");

module.exports = {
    bounce: function (configFileName, portNumber) {
        var configFilePath = path.join(path.dirname(require.main.filename), configFileName),
            configs = require(configFilePath);

        bouncy(function (req, res, bounce) {
            var website = configs.websites.filter(function (w) {
                return w.host === req.headers.host;
            }).concat( {
                port: configs.websites[0].port
            })[0];

            console.log("Bouncing from", req.headers.host, "to", website.port);
            bounce(website.port);
        }).listen(portNumber);
    }
};
