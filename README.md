async-buffered-reader
=======================

Read how many bytes you want from your readable stream when they are available

> Disclaimer: this module is incredible simple, however, it does solve having to write it over and over again :)

## Usage

```
var read = require('async-buffered-reader')

read(yourOwnReadStream, 20, callback)

function callback (buffer) {
  // Only gets called when a buffer of 20 bytes is available 
}
```
