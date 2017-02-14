# quick-bounce

A reverse-proxy implementation using bouncy to host sub-domains on the same machine on different ports

## Features

* Easy to configure sub-domains with minimal detail specified as a JSON file
* Map your websites with just one line!

## How to Use

*Require* **quick-bounce** and invoke `bounce` with name of the configuration file and a port number.

    var quickBounce = require('quick-bounce');
    quickBounce.bounce('configs.json', 80);

The above two lines are enough to host all the websites mentioned in the configuration file on port *80*.

A configuration file can look like

    {
        "websites": [
            {
                "app-name": "root",
                "host": "www.example.com",
                "port": "8080"
            },
            {
                "app-name": "one",
                "host": "one.example.com",
                "port": "8081"
            },
            {
                "app-name": "two",
                "host": "two.example.com",
                "port": "8082"
            }
        ]
    }

You can also refer to the [example](example), which has basically the same code as shown above as that is all there is you need to do.

## Dependencies

* bouncy

## To-do

* Multiple domain names to one website
