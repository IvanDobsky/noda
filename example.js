var counter = 1;

function printMessage() {
    console.log("waiting for " + counter + " sec.");
    counter++;
}

var interval = setInterval(printMessage, 1000);
clearInterval(interval);