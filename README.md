# quick-bounce

[![npm version](https://badge.fury.io/js/quick-bounce.svg)](https://badge.fury.io/js/quick-bounce)
[![npm downloads](https://img.shields.io/npm/dt/quick-bounce.svg)](https://www.npmjs.com/package/quick-bounce)  
[![Build Status](https://travis-ci.org/myTerminal/quick-bounce.svg?branch=master)](https://travis-ci.org/myTerminal/quick-bounce)
[![Code Climate](https://codeclimate.com/github/myTerminal/quick-bounce.png)](https://codeclimate.com/github/myTerminal/quick-bounce)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/quick-bounce.svg)](https://coveralls.io/r/myTerminal/quick-bounce?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/quick-bounce.svg)](https://david-dm.org/myTerminal/quick-bounce)
[![devDependency Status](https://david-dm.org/myTerminal/quick-bounce/dev-status.svg)](https://david-dm.org/myTerminal/quick-bounce#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/quick-bounce/peer-status.svg)](https://david-dm.org/myTerminal/quick-bounce#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)  
[![NPM](https://nodei.co/npm/quick-bounce.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/quick-bounce/)

A reverse-proxy implementation using bouncy to host sub-domains on the same machine on different ports

## Features

* Easy to configure sub-domains with minimal detail specified as a JSON file
* Map your websites with just one line!

## How to Use

*Require* **quick-bounce** and invoke `bounce` with the path of a configuration file and a port number.

    var quickBounce = require('quick-bounce');
    quickBounce.bounce('./configs.json', 80);

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

* [bouncy](https://www.npmjs.com/package/bouncy)

## To-do

* Multiple domain names to one website
