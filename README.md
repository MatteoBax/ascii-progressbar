# ascii-progressbar
A simple graphical ascii progressbar written in JS



## Usage

```javascript
var progressbar = require('ascii-progressbar');
progressbar.setConfig(
    "text:Progress",    // text to display to the left of the progressbar
    "indicator:🟩",      // progress indicator (you can use any char also emoji)
    "pLength:10"        // Progressbar length
);
progressbar.setProgress(50); // set progress of the progressbar
```

## Installation

```
npm i ascii-progressbar
```

# Output

![alt text](https://github.com/MatteoBax/ascii-progressbar/blob/main/output.png?raw=true)