const consoleOutput = (text = "[NONE]", logType='info', logAuthor = window.location.href.split('/')[(window.location.href.split('/').length)-1]) => {
    var style = {
        // Remember to change these as well on module.js
        leftPrefix: "background:  #ff7b26; color: white; border-radius: 0.5rem 0 0 0.5rem; padding: 0 0.5rem",
        centerPrefix: "background:  #ff7b26; color: blue; padding: 0 0.5rem",
        rightPrefix:
        "background: #222; color: white; border-radius: 0 0.5rem 0.5rem 0; padding: 0 0.5rem; font-weight: bold",
        blank:"background: white; color: black; padding-left: 5px; font-family: monospace;"
    };

    switch(logType) {
        case "info": {
            style.centerPrefix="background:  blue; color: white; padding: 0 0.5rem";
            break;
        }
        case "error": {
            style.centerPrefix="background:  red; color: white; padding: 0 0.5rem";
            break;
        }
        case "warning": {
            style.centerPrefix="background: #ffcc00; color: white; padding: 0 0.5rem";
            break;
        }
        case "plain": {
            style.centerPrefix="background:  grey; color: white; padding: 0 0.5rem";
            break;
        }
        default: {
            style.centerPrefix="background:  grey; color: white; padding: 0 0.5rem";
        }

    }

    return [`%cCST%c${logType}%c${logAuthor} %c${text}`, style.leftPrefix, style.centerPrefix, style.rightPrefix, style.blank];
    };

function customLog(text = "[NONE]", logType='info', logAuthor = window.location.href.split('/')[(window.location.href.split('/').length)-1].split("?")[0]) {
    console.log(consoleOutput(text, logType, logAuthor)[0], consoleOutput(text, logType, logAuthor)[1], consoleOutput(text, logType, logAuthor)[2], consoleOutput(text, logType, logAuthor)[3], consoleOutput(text, logType, logAuthor)[4]);
}

function customError(text = "[NONE]", logType='error', logAuthor = window.location.href.split('/')[(window.location.href.split('/').length)-1].split("?")[0]) {
    console.log(consoleOutput(text, logType, logAuthor)[0], consoleOutput(text, logType, logAuthor)[1], consoleOutput(text, logType, logAuthor)[2], consoleOutput(text, logType, logAuthor)[3], consoleOutput(text, logType, logAuthor)[4]);
}

function customWarn(text = "[NONE]", logType='warning', logAuthor = window.location.href.split('/')[(window.location.href.split('/').length)-1].split("?")[0]) {
    console.log(consoleOutput(text, logType, logAuthor)[0], consoleOutput(text, logType, logAuthor)[1], consoleOutput(text, logType, logAuthor)[2], consoleOutput(text, logType, logAuthor)[3], consoleOutput(text, logType, logAuthor)[4]);
}

function customPlain(text = "[NONE]", logType='plain', logAuthor = window.location.href.split('/')[(window.location.href.split('/').length)-1].split("?")[0]) {
    console.log(consoleOutput(text, logType, logAuthor)[0], consoleOutput(text, logType, logAuthor)[1], consoleOutput(text, logType, logAuthor)[2], consoleOutput(text, logType, logAuthor)[3], consoleOutput(text, logType, logAuthor)[4]);
}

var CST_console = {
    log: customLog,
    error: customError,
    warn: customWarn,
    plain: customPlain,
}