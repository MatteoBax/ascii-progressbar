const readline = require('readline');
var config={"text":"Progress: ", "indicator":"=", "pLength":100};
function setProgress(progress){
    let r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let cursorPosition = readline.getCursorPos;
    let step=(config.pLength*progress)/100;  //pLength:100=x:progress
    let text = config.text;
    let indicator = config.indicator;
    readline.cursorTo(process.stdout, 0, cursorPosition);
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, cursorPosition);
    r1.write(text + " |");
    for(let i = 0; i<config.pLength; i++){
        if(i>=Math.round(step)){
            r1.write(" ");
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