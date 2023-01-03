const readline = require('readline');
var config={"text":"Progress: ", "indicator":"=", "pLength":100};
function checkEmoji(str){
    let Emojiranges = [
        '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])'
    ];
    if (str.match(Emojiranges.join('|'))) {
        return true;
    } else {
        return false;
    }
}
function setProgress(progress){
    let space=" ";
    let r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let cursorPosition = readline.getCursorPos;
    let step=(config.pLength*progress)/100;  //pLength:100=x:progress
    let text = config.text;
    let indicator = config.indicator;
    if(checkEmoji(indicator)){
        space="  ";
    }
    readline.cursorTo(process.stdout, 0, cursorPosition);
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, cursorPosition);
    r1.write(text + " |");
    for(let i = 0; i<config.pLength; i++){
        if(i>=Math.round(step)){
            r1.write(space);
        }else{
            r1.write(indicator);
        }
    }
    r1.write("| " + progress + "%");
    r1.close();    
}
function setConfig(){
    for(let i = 0; i<arguments.length; i++){
        let splitted = arguments[i].split(":");
        if(i==3){
            config[splitted[0]] = parseInt(splitted[1])
        }else{
            config[splitted[0]] = splitted[1];
        }
    };
}
module.exports = {setProgress, setConfig};