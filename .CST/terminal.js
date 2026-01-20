/****************************************************************************************************

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

****************************************************************************************************/









var tempData = null;
async function getData(url) {
  let response = await fetch(url);
  let data = await response.text();
  return data;
  writeToStack("Fetch succesful.");
}

function forceDownload(blob, filename) {
  writeToStack("Forcing download...");
  var a = document.createElement('a');
  a.download = filename;
  a.href = blob;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Current blob size limit is around 500MB for browsers
function saveFunc() {
  aliases[funcToSave] = text.value.split("\n");
  writeToStack("Function saved.");
  hideEdit();
}
function hideEdit() {
  document.getElementById("editor").style.display = "none";
  writeToStack("Editor hidden.");
}
function retrieve(input) {
  switch (input) {
    case 'user': {
      tempData = sessionStorage.getItem('userTerminalCST');
      break;
    }
    case 'battery': {
      tempData = "Battery temporarily unavailable."
      break;
    }
  }
}
function downloadResource(url, filename) {
  if (!filename) filename = url.split('\\').pop().split('/').pop();
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.log(e));
    writeToStack("Resource downloaded.");
}
function ampHandle(data) {
  return data
    .split('&n')
    .join('\n')
    .split('&s')
    .join(' ')
    .split('&p')
    .join('|')
    .split('&b')
    .join('\\')
    .split('&a')
    .join('&');
}
const arrDefault = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
  '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$',
  '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[',
  ']', '{', '}', '\\', '|', ';', ':', '"', "'", ',', '<',
  '.', '>', '/', '?', '`', '~', ' '
];
function decrypt(input, key) {
  var key2 = key;
  var outputA = "";
  if (key.length != 0) {
    while (key2.length < input.length) {
      key2 += key;
    }
    for (var i = 0; i < input.length; i++) {
      outputA += arrDefault[((arrDefault.indexOf(input[i]) - arrDefault.indexOf(key2[i])) % arrDefault.length >= 0) ? (arrDefault.indexOf(input[i]) - arrDefault.indexOf(key2[i])) % arrDefault.length : arrDefault.length + (arrDefault.indexOf(input[i]) - arrDefault.indexOf(key2[i]))]
    }
    return outputA;
  }
}
function encrypt(input, key) {
  var key2 = key;
  var outputA = "";
  if (key.length != 0) {
    while (key2.length < input.length) {
      key2 += key;
    }
    for (var i = 0; i < input.length; i++) {
      outputA += arrDefault[(arrDefault.indexOf(input[i]) + arrDefault.indexOf(key2[i])) % arrDefault.length];
    }
    return outputA;
  }
}




function varHandle(data, len = -1, mode = false) {
  var outputSplit = data.slice(len + 1).split('\\');
  var final = '';
  var final2 = '';
  var isString = true;
  for (var i = 0; i < outputSplit.length; i++) {
    if (isString == true) {
      final += outputSplit[i];
      isString = !isString;
    } else {
      final += parameters[parameters.length - 1][parseFloat(outputSplit[i]) - 1];
      isString = !isString;
    }
  }
  if(final.split(" ")[0] != "|:ARR|") {
  outputSplit = final.split('|');
  isString = true;
  for (var i = 0; i < outputSplit.length; i++) {
    if (isString == true) {
      final2 += outputSplit[i];
      isString = !isString;
    } else {
      if(outputSplit[i].includes(":")) {
      var temp = outputSplit[i].split(":");
      var root = aliases[temp[0]];
      temp.reverse();
      temp.pop();
      temp.reverse();
      for(var i of temp) {
        root = root[parseInt(i)-1];
      }
      final2 += root;
      } else {
        if (typeof aliases[outputSplit[i]] == "object") {
          return aliases[outputSplit[i]];
        } else {
          final2 += aliases[outputSplit[i]];
        }
      }
      isString = !isString;
    }
  }
} else {
  return final.slice(7).split(" ").map((t) => (varHandle(t, -1, true)));
}
  if (mode === true) {
    final2 = ampHandle(final2);
  }
  return final2;
}
writeToStack("New terminal session opened.","info");
let names = {
  'c@d3N': 'ThatGuyOverThere',
  '$|m0n': 'TacoMan',
  '70|)|)': 'yes',
  'Guest': 'GUEST_USER',
  '$@wy3|-': 'Sawyer',
  'root': 'GET OFF THE ACCOUNT, SAWYER',
  'c2@r@': 'Claire',
  'm0m': "Wirz's Mom",
  'd@d': "Wirz's Dad",
  'TigerShark6471': 'TheGuyShetoldyounottoworryabout',
  'D3v_73571ng': 'GET OFF THE ACCOUNT, SAWYER',
  '(#@r2|3': 'Charlie',
  'Ethan': 'Ethan',
  '(@2v1n': 'NEEEEERRRRRRDDDDD',
}; //basic name definitions




/// ** NOTE: Stack window temp. removed! ** \\\

var aliases = {
// 'STACK':window.open('./stack.html'),
};
var tempAliases = {};
var parameters = [];
var funcToSave = "";
var text = document.getElementById("fm");
let libUrl = '';
var permitted = window.sessionStorage.getItem('permittedTerminalCST');
var command = document.getElementById('command');
var prev = document.getElementById('previous');
var cmdSplit = null;
var execWindow = [];
var clear = 0;
var foreground = 'green';
var clearMode = '';
var clearFunc = '';
var prevCommands = [""];
var historyIdx = 0;
//Just some variables
if(localStorage.getItem("custom") === null) {
  localStorage.setItem("custom","");
}

var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
  var temp = parts[i].split("=");
  $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

console.log($_GET);
try {
  if ($_GET.code.length > 5) {
    permitted = 'affirmed';
  }
} catch {

}



//#############################################//

// permitted='affirmed';

//#############################################//












/// STACK HANDLING \\\




function writeToStack(data, type = "output") {
  localStorage.setItem("terminalStack",localStorage.getItem("terminalStack") + "|" + encodeURI("<span class='"+type+"'>"+data+"</span>"));
}
function clearStack() {
  localStorage.setItem("terminalStack", "");
}



clearStack();
writeToStack('Initialized', 'important');











let password = prompt('Enter lockdown shutoff key')
if (permitted != 'affirmed') {
  document.getElementById('body').style.display = 'none';
  window.alert(
    'Sorry, but you do not have permission to use the cst terminal. Please use the sign-in on our home page to gain access.'
  );
  location.replace('./index.html');
} else {
  if (localStorage.getItem('lockdownMode') === 'active') {
    if (
      password == "lockdownCST"
    ) {
      alert('Lockdown mode lifted. Please reload this page.');
      localStorage.setItem('lockdownMode', false);
    } else {
      alert('Access denied.');
      location.href = './index.html';
    }
  }
  document.getElementById('prompt').textContent =
    'CST/' + names[sessionStorage.getItem('userTerminalCST')] + '-->';
  command.focus();
} //Access granted? Time to find out!

if ($_GET.loginType === 'google') {
  document.getElementById('prompt').textContent = `CST/${$_GET.loginData}-->`
}

async function doCommand(cmd) {
var time = 0;


  /// ADD TO HISTORY \\\

  writeToStack("<hr>")
  writeToStack(("Running command: "+document.getElementById('command').value));



  document.getElementById('prompt').textContent =
    'CST/' + names[sessionStorage.getItem('userTerminalCST')] + '-->';
  command = document.getElementById('command');
  const output = document.createElement('li');
  output.className = 'output';
  cmdSplit = cmd.split(' ');
  while (cmdSplit[0] == 'if') {
    writeToStack("Evaluating if statement...");
    var ifToAdd = document.createElement('li');
    ifToAdd.textContent =
      'CST/' +
      names[sessionStorage.getItem('userTerminalCST')] +
      '-->' +
      cmd;
    prev.appendChild(ifToAdd);
    var conditional = cmd.split('>>')[0].slice(3);
    switch (conditional.split(' ')[1]) {
      case '==': {
      }
      case '=': {
        if (
          ampHandle(varHandle(conditional.split(' ')[0])) ==
          ampHandle(varHandle(conditional.split(' ')[2]))
        ) {
          cmd = cmd.slice(6 + conditional.length);
          writeToStack("Conditional returned true. Executing next layer...");
        } else {
          cmd = '';
          writeToStack("Conditional returned false. If statement terminated.");
        }
        break;
      }
      case '!=': {
      }
      case '<>': {
        if (
          ampHandle(varHandle(conditional.split(' ')[0])) !=
          ampHandle(varHandle(conditional.split(' ')[2]))
        ) {
          cmd = cmd.slice(6 + conditional.length);
          writeToStack("Conditional returned true. Executing next layer...");
        } else {
          cmd = '';
          writeToStack("Conditional returned false. If statement terminated.");
        }
        break;
      }
      case '>': {
        if (
          parseFloat(ampHandle(varHandle(conditional.split(' ')[0]))) >
          parseFloat(ampHandle(varHandle(conditional.split(' ')[2])))
        ) {
          cmd = cmd.slice(6 + conditional.length);
          writeToStack("Conditional returned true. Executing next layer...");
        } else {
          cmd = '';
          writeToStack("Conditional returned false. If statement terminated.");
        }
        break;
      }
      case '<': {
        if (
          parseFloat(ampHandle(varHandle(conditional.split(' ')[0]))) <
          parseFloat(ampHandle(varHandle(conditional.split(' ')[2])))
        ) {
          cmd = cmd.slice(6 + conditional.length);
          writeToStack("Conditional returned true. Executing next layer...");
        } else {
          cmd = '';
          writeToStack("Conditional returned false. If statement terminated.");
        }
        break;
      }
      case '<=': {
      }
      case '!>': {
        if (
          parseFloat(ampHandle(varHandle(conditional.split(' ')[0]))) <=
          parseFloat(ampHandle(varHandle(conditional.split(' ')[2])))
        ) {
          cmd = cmd.slice(6 + conditional.length);
          writeToStack("Conditional returned true. Executing next layer...");
        } else {
          cmd = '';
          writeToStack("Conditional returned false. If statement terminated.");
        }
        break;
      }
      case '>=': {
      }
      case '!<': {
        if (
          parseFloat(ampHandle(varHandle(conditional.split(' ')[0]))) >=
          parseFloat(ampHandle(varHandle(conditional.split(' ')[2])))
        ) {
          cmd = cmd.slice(6 + conditional.length);
          writeToStack("Conditional returned true. Executing next layer...");
        } else {
          cmd = '';
          writeToStack("Conditional returned false. If statement terminated.");
        }
        break;
      }
      default: {
        writeToStack("Ivalid conditional. Terminating all processes. Search 'Error 06' in your CST manual.","error");
        output.textContent = 'Error 06: Invalid comparison operator.';
        output.className = 'error';
        return 0;
      }
    }
    cmdSplit = cmd.split(' ');
  }
  switch (cmdSplit[0]) {
    case 'self-exec': {
      break;
    }
    case 'help': {
      writeToStack("Displaying help menu.");
      output.innerHTML =
        "<ul><li>* Work in progress<li>welcome: Shows the welcome screen<li>help: Shows list of basic commands<li>docs: Shows all commands *<li>credits: Shows credits<li>echo: Prints text<li>quit or exit: Logs out of CST<li>kill: Kills the terminal and forwards to an empty page<li>clear: CLears the terminal<li>admin: Enters the root user<li>ranks: Displays list of ranks<li>users: Displays list of users<li>exec: Executes commands<li>alias [key] [value]: Makes alias<li>get-alias [key]: Gets the value of an alias<li>theme [bg] [fg]: Changes the theme<li>dowload [name] [url]: Dowloads a file from a url<li>echo [text]: Prints out text<li>save [hard|soft] [key]: Saves aliase to sessionstorge|localstorage<li>view-save [hard|soft] [key]: Views data saved by save command in sessionstorge|localstorage<li>clear-save [hard|soft|var]: Clears data saved by save command in sessionstorge|localstorage|variables<li>redirect [url]: Redirects to a url<li>exec: Runs a command set by add-exec<li>add-exec: Sets the exec command to execute a command<li>cursor [cursor]: Changes the cursor<li>watch-me: Makes a mirror<li>html [code]: Generates html<li>reset: Resets the terminal<li>throw [type] [text]: Throws an error<li>colore: Changes the default colors<li>file[name]: stores a file to alias of 'name'.<li>read: reads a file<li>anti-sawyer: VITAL TO KEEPING SAWER OFF THE TERMINAL, WE CANNOT LET SAWYER READ THIS OR HE WILL HAVE FULL ACCESS TO EVERYTHING<li>custom [command] - command is run by CTRL + m<li>open [url] [name]<li>close [tab name] - closes a tab named by the open command</ul>";
      break;
    }
    case 'read': {
      writeToStack("Awaiting file selection...");
      var file = document.createElement('input');
      file.type = 'file';
      file.click();
      file.addEventListener('change', handleFileSelect, false);
      function handleFileSelect(event) {
        writeToStack("File chosen successfully.");
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsText(event.target.files[0]);
      }

      function handleFileLoad(event) {
        var content = event.target.result;
        output.textContent = 'Contents of: ' + file.value + ':';
        output.style.color = 'white';
        output.textContent += content;
      }
      break;
    }
    case 'filter': {
      writeToStack("Awaiting fetch...");
      output.innerHTML = await fetch('https://hobbyrobot.com/cst/filterText.php?text=' + cmd.slice(7)).text();
      writeToStack("Fetch successful.");
      break;
    }
    case 'file': {
      writeToStack("Awaiting file selection...");
      var file = document.createElement('input');
      file.type = 'file';
      file.click();
      file.addEventListener('change', handleFileSelect, false);
      function handleFileSelect(event) {
      writeToStack("File chosen successfully.");
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsText(event.target.files[0]);
      }

      function handleFileLoad(event) {
        aliases[varHandle(cmdSplit[1], -1, true)] = event.target.result;
      }
      break;
    }
    case 'close': {
      aliases[cmdSplit[1]].close();
      break;
    }
    case 'delay': {
      time = parseInt(cmdSplit[1]);
      break;
    }
    case 'skip': {
      clear -= parseInt(cmdSplit[1]);
      break;
    }
    case 'push': {
      aliases[cmdSplit[1]].push(cmd.slice(6 + cmdSplit[1].length));
      break;
    }
    case 'pop': {
      aliases[cmdSplit[1]].pop();
      break;
    }
    case 'reverse': {
      aliases[cmdSplit[1]].reverse();
      break;
    }
    case 'js': {
      var p = document.createElement('button');
      p.setAttribute('onclick', varHandle(cmd, 2, true));
      document.body.appendChild(p);
      writeToStack("Executing JavaScript...");
      p.click();
      writeToStack("JavaScript executed successfully.");
      p.remove();
      break;
    }
    case '/*/': {
      command.value = '';
      return 0;
    }
    case 'view-save': {
      if (varHandle(cmdSplit[1], -1) == 'hard') {
        output.textContent = localStorage.getItem(cmdSplit[2]);
      } else if (varHandle(cmdSplit[1], -1) == 'soft') {
        output.textContent = sessionStorage.getItem(cmdSplit[2]);
      } else {
        output.textContent = 'Error 03: Invalid Parameter';
        output.className = 'error';
      }
      break;
    }
    case 'load': {
      var file = document.createElement('input');
      file.type = 'file';
      file.click();
      file.addEventListener('change', handleFileSelect, false);
      writeToStack("Awaiting file selection...");
      function handleFileSelect(event) {
        writeToStack("File chosen successfully.");
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsText(event.target.files[0]);
      }

      function handleFileLoad(event) {
        aliases[varHandle(cmdSplit[1], -1, true)] = event.target.result.split("\n");
        writeToStack("File exported to function successfully.");
        if (aliases[cmdSplit[e]].map((inp) => (inp.split(" ")[0])).includes("self-exec")) {
          clear = aliases[cmdSplit[e]].length;
          clearMode = 'multiple';
          clearFunc = cmdSplit[e];
          parameters.push(aliases[cmdSplit[e]][aliases[cmdSplit[e]].map((inp) => (inp.split(" ")[0])).indexOf("self-exec")].slice(10).split(" ").map((inp) => (ampHandle(inp))));
          writeToStack("Function execution initiating...");
        }
      }
      break;
    }
    case 'rename': {
      aliases[varHandle(cmdSplit[2], -1, true)] = aliases[varHandle(cmdSplit[1], -1, true)];
      delete aliases[varHandle(cmdSplit[1], -1, true)];
      break;
    }
    case 'new-func': {
      aliases[varHandle(cmdSplit[1], -1, true)] = [];
      funcToSave = varHandle(cmdSplit[1], -1, true)
      document.getElementById("editor").style.display = "block";
      text.focus();
      break;
    }
    case 'edit-func': {
      writeToStack("Editor opened succesfully.");
      document.getElementById("editor").style.display = "block";
      funcToSave = varHandle(cmdSplit[1], -1, true);
      text.value = aliases[varHandle(cmdSplit[1], -1, true)].join("\n");
      text.focus();
      break;
    }
    case 'colore': {
      // animation: colore-colors 5s infinite;
      writeToStack("Look at the wonderful colors!","info");
      document.getElementById('body').style.animation =
        'colore-colors 5s infinite';
      command.style.animation = 'colore-colors 5s infinite';
      document.getElementById('prompt').style.animation =
        'colore-colors 5s infinite';
      command.style.animation = 'colore-colors 5s infinite';
      break;
    }
    case 'add-from': {
      for (var i = 0; i < aliases[varHandle(cmdSplit[1], -1, true)].length; i++) {
        execWindow.push(aliases[varHandle(cmdSplit[1], -1, true)][i]);
      }
      break;
    }
    case 'add-from-if': {
      for (var i = 0; i < aliases[varHandle(cmdSplit[1], -1, true)].length; i++) {
        execWindow.push(
          'if ' +
          cmd.slice(13 + cmdSplit[1].length) +
          ' >> ' +
          aliases[varHandle(cmdSplit[1], -1, true)][i]
        );
      }
      break;
    }
    case 'pop-exec': {
      execWindow.pop();
      break;
    }
    case 'outer': {
      writeToStack("Parameters popped.");
      parameters.pop();
      break;
    }
    case 'inner': {
      writeToStack("Parameters pushed.");
      parameters.push(varHandle(cmd, 5, true).split(' '));
      break;
    }
    case 'copy': {
      window.navigator.clipboard.writeText(varHandle(cmd, 4, true));
      writeToStack("Copied to clipboard.");
      break;
    }
    case 'view-copy': {
      await navigator.clipboard
        .readText()
        .then((text) => {
          output.innerText = text;
          output.className = 'output';
          writeToStack("Clipboard read successfully.");
        })
        .catch((err) => {
          writeToStack("Clipboard permissions denied.","error");
          output.innerText = ('Failed to read clipboard contents: ', err);
          output.className = 'error';
        });
      break;
    }
    case 'clear-save': {
      if (varHandle(cmdSplit[1]) == 'hard') {
        localStorage.clear();
      } else if (varHandle(cmdSplit[1]) == 'soft') {
        sessionStorage.clear();
      } else if (varHandle(cmdSplit[1]) == 'var') {
        aliases = {};
      } else {
        output.textContent = 'Error 03: Invalid Parameter';
        output.className = 'error';
        break;
      }
      writeToStack(cmdSplit[1]+" storage cleared.");
      break;
    }
    case 'echo': {
      output.innerText = varHandle(cmd, 4, true);
      writeToStack("Value returned.");
      break;
    }
    case 'watch-me': {
      var video = document.createElement('video');
      video.autoplay = 'true';
      output.appendChild(video);

      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
            writeToStack("We're watching you!","warning");
          })
          .catch(function (error) {
            console.log('Something went wrong!');
          });
      }
      break;
    }
    case 'run-html': {
      aliases[cmdSplit[1]] = window.open("");
      aliases[cmdSplit[1]].document.write(varHandle(cmdSplit[2],-1,true))
      break;
    }
    case 'cursor': {
      document.querySelector('*').style.cursor = varHandle(cmd, 6);
      writeToStack("Cursor changed successfully.");
      break;
    }
    case 'open': {
      if(cmdSplit.length == 2) {
        window.open(cmdSplit[1]);
      }else {
        aliases[cmdSplit[2]] = window.open(cmdSplit[1]);
      }
      writeToStack("Page opened.");
      break;
    }
    case 'redirect': {
      writeToStack("Redirecting...");
      location.replace(varHandle(cmd, 8, true));
      break;
    }
    case 'quit': {
      writeToStack("Logging out...");
      sessionStorage.setItem('permittedTerminalCST', 'loggedOut');
      writeToStack("Redirecting.");
      location.replace('./index.html');
      break;
    }
    case 'save': {
      if (varHandle(cmdSplit[1], -1, true) == 'hard') {
        localStorage.setItem(varHandle(cmdSplit[2], -1, true), aliases[varHandle(cmdSplit[2], -1, true)]);
        writeToStack("Data stored to localStorage.");
      } else if (varHandle(cmdSplit[1], -1, true) == 'soft') {
        if (
          aliases[varHandle(cmdSplit[2], -1, true)] == 'root' &&
          varHandle(cmdSplit[2], -1, true) == 'userTerminalCST'
        ) {
          output.textContent =
            'Stop! You may not enter the root user without permission!';
          output.className = 'fatal-error';
          writeToStack("Access to root user denied!!!","error");
          break;
        }
        sessionStorage.setItem(varHandle(cmdSplit[2], -1, true), aliases[varHandle(cmdSplit[2], -1, true)]);
        writeToStack("Data stored to sessionStorage.");
      } else {
        output.textContent = 'Errror 03: Invalid value for parameter';
        output.className = 'error';
      }
      break;
    }
    case 'add-exec': {
      execWindow.push(cmd.slice(9));
      writeToStack("Pushed to execution window.");
      break;
    }
    case 'ranks': {
      output.innerHTML =
        '<ul><li>0 | Root<li>1 | Owner<li>2 | Developer<li>3 | Admin<li>4 | Helper<li>5 | Icon<li>6 | Geek<li>7 | User<li>8 | Guest<li>9 | Banned</ul>';
        writeToStack("Ranks displayed.");
      break;
    }
    case 'users': {
      output.innerHTML =
        '<ul><li>c@d3N | Developer<li>$|m0n | Developer<li>70DD | Developer<li>GUesT_1.0 | Guest<li>root | Root<li>$@wy3|- | User<li>c2@r@ | User<li>m0m | User<li>d@d | User<li>TigerShark6471 | User<li>(#@r2|3 | Geek</ul>';
        writeToStack("Users displayed.");
      break;
    }
    case 'alias': {
      if(cmdSplit[1].includes(":")) {
        aliases[varHandle(cmdSplit[1].split(":")[0], -1, true)][parseInt(cmdSplit[1].split(":")[1]) - 1] = varHandle(
        cmd,
        cmdSplit[1].length + 6,
        true
      );
      }else {
      aliases[varHandle(cmdSplit[1], -1, true)] = varHandle(
        cmd,
        cmdSplit[1].length + 6,
        true
      );
      }
      writeToStack("Alias created successfully.");
      break;
    }
    case 'exec': {
      if (execWindow.length > 0) {
        clear = 1;
        clearMode = `single`;
        writeToStack("Executing latest...");
      } else {
        output.textContent = 'Error 04: No executables created yet.';
        output.className = 'error';
      }
      break;
    }
    case 'encrypt': {
      output.textContent = encrypt(varHandle(cmd, 8 + varHandle(cmdSplit[1], -1, true).length, true), varHandle(cmdSplit[1], -1, true))
      writeToStack("Data encrypted.");
      break;
    }
    case 'decrypt': {
      output.textContent = decrypt(varHandle(cmd, 8 + varHandle(cmdSplit[1], -1, true).length, true), varHandle(cmdSplit[1], -1, true))
      writeToStack("Data decrypted.");
      break;
    }
    case 'theme': {
      document.getElementById('body').style.backgroundColor = varHandle(cmdSplit[1], -1, true);
      command.style.background = varHandle(cmdSplit[1], -1, true);
      foreground = varHandle(cmdSplit[2], -1, true);
      document.getElementById('prompt').style.color = foreground;
      command.style.color = foreground;
      writeToStack("Theme changed.");
      break;
    }
    case 'credits': {
      output.innerHTML =
        '<ul><li>Simon & Caden: Programming<li>Todd: Graphics</ul>';
        writeToStack("Credits displayed.");
      break;
    }
    case 'clear': {
      prev.innerHTML = '';
      output.innerHTML = 'Command history cleared';
      writeToStack("Command history cleared.");
      break;
    }
    case 'exit': {
      writeToStack("Redirecting...");
      location.replace('./index.html');
      break;
    }
    case '//': {
      break;
    } //comment in CST, returns no output

    case 'kill': {
      writeToStack("Terminal killed.");
      location.replace('about:blank');
      break;
    }
    case 'docs': {
      window.open("./docs/docs.html")
        writeToStack("Documentation displayed.");
      break;
    }
    case '': {
      break;
    }
    case 'reset-stack': {
      clearStack();
      writeToStack("Stack cleared.","important");
      break;
    }
    case 'admin': {
      output.innerHTML = "<img src='./assets/rickroll.gif'>";
      writeToStack("<img src='./assets/rickroll.gif'>.");
      break;
    }
    case 'download': {
      downloadResource(varHandle(cmdSplit[1], -1, true));
      writeToStack("File downloaded.");
      break;
    }
    case 'lockdown': {
      if (sessionStorage.getItem('userTerminalCST') == 'root') {
        output.textContent = 'Lockdown mode activated.';
        output.className = 'important';
        localStorage.setItem('lockdownCST', varHandle(cmdSplit[1], -1, true));
        localStorage.setItem('lockdownMode', 'active');
        writeToStack("Lockdown mode activated.","important");
      } else {
        output.textContent = 'Error 02: User lacking root priveleges.';
        output.className = 'error';
      }
      break;
    }
    case 'switch-user': {
      if (sessionStorage.getItem('userTerminalCST') == 'root') {
        sessionStorage.setItem('userTerminalCST', varHandle(cmdSplit[1], -1, true));
        output.textContent = 'User switched successfully.';
        output.className = 'important';
        writeToStack("User switched to "+sessionStorage.getItem("userTerminalCST")+" successfully.","important");
      } else {
        output.textContent = 'Error 02: User lacking root priveleges.';
        output.className = 'important';
      }
      break;
    }
    case 'welcome': {
      output.innerHTML =
        '<ul>Welcome to the CST Command Line<li>The CST was created by (@d3n, (#@r2|3, $|m0n, and 70DD<ul>';
        writeToStack("Welcome displayed.");
      break;
    }
    case 'html': {
      output.innerHTML = varHandle(cmd, 4, true);
      output.className = 'html';
      writeToStack("HTML produced successfully.");
      break;
    }
    case 'throw': {
      output.className = varHandle(cmdSplit[1], -1, true);
      output.innerText = varHandle(cmd, varHandle(cmdSplit[1], -1, true).length + 6, true);
      writeToStack("Message thrown.");
      break;
    }
    case 'reset': {
      prev.innerHTML = '';
      localStorage.clear();
      sessionStorage.clear();
      document.getElementById('body').style.backgroundColor = 'black';
      command.style.background = `black`;
      foreground = `green`;
      output.innerHTML = 'Command line reset';
      output.className = 'important';
      writeToStack("Command line has been reset.","important");
      break;
    }
    case 'drop': {
      delete aliases[varHandle(cmdSplit[1], -1, true)];
      writeToStack("Alias deleted successfully.");
      break;
    }
    case 'import-alias': {
      if (varHandle(cmdSplit[2], -1, true) == 'hard') {
        aliases[varHandle(cmdSplit[1], -1, true)] = localStorage.getItem(varHandle(cmdSplit[3], -1, true));
      } else if (varHandle(cmdSplit[2], -1, true) == 'soft') {
        aliases[varHandle(cmdSplit[1], -1, true)] = sessionStorage.getItem(varHandle(cmdSplit[3], -1, true));
      } else if (varHandle(cmdSplit[2], -1, true) == 'var') {
        aliases[varHandle(cmdSplit[1], -1, true)] = aliases[varHandle(cmdSplit[3], -1, true)];
      } else if (varHandle(cmdSplit[2], -1, true) == 'encrypt') {
        aliases[varHandle(cmdSplit[1], -1, true)] = encrypt(cmd.slice(23+cmdSplit[1].length+cmdSplit[3].length), varHandle(cmdSplit[3], -1, true));
      } else if (varHandle(cmdSplit[1], -1, true) == 'decrypt') {
        aliases[varHandle(cmdSplit[1], -1, true)] = decrypt(cmd.slice(23+cmdSplit[1].length+cmdSplit[3].length), varHandle(cmdSplit[3], -1, true));
      } else if (varHandle(cmdSplit[2], -1, true) == 'get') {
        if (varHandle(cmdSplit[3], -1, true) == "battery") {
          await navigator.getBattery()
            .then(function (battery) {
              aliases[varHandle(cmdSplit[1], -1, true)] = Math.round(battery.level * 100);

            })
            .catch(function () {
              output.textContent = 'Error 05: failed to read battery level';
              output.className = 'error';
            });
        } else {
          retrieve(varHandle(cmdSplit[3], -1, true));
          aliases[varHandle(cmdSplit[1], -1, true)] = tempData;
        }
      } else {
        output.className = 'error';
        output.textContent = 'Error 03: Invalid value for parameter.';
        break;
      }
      output.textContent = 'Alias imported successfully';
      writeToStack("Alias imported successfully.");
      break;
    }
    case 'clear-exec': {
      execWindow = [];
      writeToStack("Execution window cleared.");
      break;
    }
    case 'export-exec': {
      aliases[varHandle(cmdSplit[1], -1, true)] = execWindow;
      execWindow = [];
      writeToStack("Function exported.");
      break;
    }
    case '$': {
      try {
        clear = aliases[varHandle(cmdSplit[1], -1, true)].length;
        clearMode = 'multiple';
        clearFunc = varHandle(cmdSplit[1], -1, true);
        parameters.push(cmd.slice(cmdSplit[1].length + 3).split(' '));
        for (var i = 0; i < parameters[parameters.length - 1].length; i++) {
          parameters[parameters.length - 1][i] = ampHandle(
            parameters[parameters.length - 1][i]
          );
        }
        writeToStack("Function execution initiating...");
      } catch(error) {
        output.innerHTML = ("Error 7: Invalid function");
        output.className = "error"
      }
      break;
    }
    case 'view-func': {
      var funcToRead = aliases[varHandle(cmdSplit[1], -1, true)];
      output.innerHTML = '<ul>';
      if (cmdSplit.length == 2) {
        for (var i = 0; i < funcToRead.length; i++) {
          output.innerHTML +=
            '<li>' +
            funcToRead[i].split('&').join('&amp;').split('<').join('&lt;') +
            '</li>';
          //output.innerHTML += funcToRead[i].split("<").join("&lt;").split("&").join("&amp;");
          //output.innerHTML += "</p/>";
        }
      } else {
        for (var i = 0; i < funcToRead.length; i++) {
          output.innerHTML +=
            '<li>' +
            cmd.slice(11 + cmdSplit[1].length) + funcToRead[i].split('&').join('&amp;').split('<').join('&lt;') +
            '</li>';
          //output.innerHTML += funcToRead[i].split("<").join("&lt;").split("&").join("&amp;");
          //output.innerHTML += "</p/>";
        }
      }
      output.innerHTML += '</ul>';
      writeToStack("Function displayed.");
      break;
    }
    case 'custom': {
      localStorage.setItem("custom",cmd.slice(7));
      break;
    }
    case 'import': {
      writeToStack("Library importing...");
      var e;
      if (cmdSplit.length === 2) {
        e = 1;
      } else {
        e = 2;
      }
      aliases[varHandle(cmdSplit[e], -1, true)] = (
        await getData('./libraries/' + varHandle(cmdSplit[1], -1, true) + '.cst')
      ).split('\n');
      writeToStack("Library imported.");
      if (aliases[cmdSplit[e]].map((inp) => (inp.split(" ")[0])).includes("self-exec")) {
        clear = aliases[cmdSplit[e]].length;
        clearMode = 'multiple';
        clearFunc = cmdSplit[e];
        parameters.push(aliases[cmdSplit[e]][aliases[cmdSplit[e]].map((inp) => (inp.split(" ")[0])).indexOf("self-exec")].slice(10).split(" ").map((inp) => (ampHandle(inp))));
        writeToStack("Function execution initiating...");
      }
      break;
    }
    case 'anti-sawyer': {
      output.classname =
        'fatal-error';
      output.className = varHandle(cmdSplit[1], -1, true);
      window.alert(
        'Your computer may have been compromised, you have been hacked.'
      );
      // var audio = new Audio('assets/Alert.wav');
      // audio.play();
      window.location.href = 'https://theannoyingsite.com/';
      writeToStack("Sawyer alert! Sawyer alert!","error");
      break;
    }
    case 'starwars-cont.': {
        output.innerHTML = '________________\n/               \\';
      break;
      }
      // case 'i-ready': {
      // output.innerHTML = data:image/jpeg;base64,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
      // output.innerHTML = https://media.makeameme.org/created/yes-no-iready-nc237h.jpg
      // output.innerHTML = https://i.redd.it/av6x4eicj1071.jpg
      // output.innerHTML = https://media.makeameme.org/created/iready-my-new-59ef81.jpg
      // writeToStack("Vengence against I-Ready has been acheved!!!")
      // break;
      // }
      //Commented out by @Cesium72
      //I think whoever wrote this was trying to make images, but they forgot to include <img> and quotes around the URLs.
    default: {
      if (cmd[0] == '$') {
        try {
        clear = aliases[varHandle(cmdSplit[0].slice(1), -1, true)].length;
        clearMode = 'multiple';
        clearFunc = varHandle(cmdSplit[0].slice(1), -1, true);
        parameters.push(cmd.slice(cmdSplit[0].length + 1).split(' '));
        parameters[parameters.length - 1].map((i) => (ampHandle(i)))
        writeToStack("Function execution initiating...");
      } catch(error) {
        output.innerHTML = ("Error 07: Invalid function");
        output.className = "error"
      }
    } else {
        output.textContent = "Error 01: Invalid command.";
        output.className = "error";
    }
    break;
    }
  }


  /// ADD TO STACK \\\

  if(output.className != "error") {
    writeToStack('[Command executed with no errors]', 'info');
  } else {
    writeToStack(('Command executed with the following errors:<br>'+output.innerHTML), 'error');
  }



  const add = document.createElement('li');
  add.textContent =
    'CST/' +
    names[sessionStorage.getItem('userTerminalCST')] +
    '-->' +
    cmd;
  add.className = 'output';
  if (cmd.split(' ')[0] == '//') {
    add.className = 'comment';
  } else {
    add.style.color = foreground;
  }
  prev.appendChild(add);
  if (output.className == 'output') {
    output.style.color = foreground;
  }
  prev.appendChild(output);
  prevCommands.push(cmd);
  historyIdx++;
  if (clear === 0) {
    command.value = '';
  }
  if (clear != 0) {
    if (clearMode == 'single') {
      command.value = execWindow[execWindow.length - 1];
      writeToStack("Single-line executional executed.");
    } else {
      command.value = aliases[clearFunc][aliases[clearFunc].length - clear];
      writeToStack("Executing next line of function...");
    }
    clear -= 1;
    if (clear == 0 && clearMode == `multiple`) {writeToStack("Function complete.");}
    window.setTimeout((() => {doCommand(command.value)}),time);
  }
}
command.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    event.preventDefault();
    doCommand(command.value);
  } else if (event.key == 'ArrowUp') {
    event.preventDefault();
    if(historyIdx > 0) {
    historyIdx--;
    command.value = prevCommands[historyIdx];
    }
    writeToStack("Returning to previous command...");
    command.focus();
  } else if (event.key == 'ArrowDown') {
    event.preventDefault();
    if(historyIdx < prevCommands.length) {
    historyIdx++;
    command.value = prevCommands[historyIdx];
    if(command.value == "undefined") {
      command.value = "";
    }
    }
  } else if (event.ctrlKey && event.key == ".") {
    event.preventDefault();
    if (typeof command.selectionStart == "number") {
      command.selectionStart = command.selectionEnd = command.value.length;
  }
  }else if (event.ctrlKey && event.key == ",") {
    event.preventDefault();
    if (typeof command.selectionStart == "number") {
      command.selectionStart = command.selectionEnd = 0;
  }
  }else if (event.ctrlKey && event.key == "/") {
    event.preventDefault();
    window.open("./terminal.html");
    prev.innerHTML += "<li class='important'>New terminal opened.</li>";
  }else if (event.ctrlKey && event.key == "w") {
    event.preventDefault();
    if(window.confirm("Close terminal?") == true) {
      window.close();
    }
  }else if (event.ctrlKey && event.key == "m") {
    event.preventDefault();
    doCommand(localStorage.getItem("custom"));
  } else if(event.key.length == 1){
  prevCommands[prevCommands.length-1] = command.value + event.key;
  }else if(event.key == "Backspace"){
  prevCommands[prevCommands.length-1] = command.value.substr(0,command.value.length - 1);
  }else if (event.ctrlKey && event.key == "q") {
    event.preventDefault();
    doCommand("quit");
  }else if (event.ctrlKey && event.key == "M" && event.shiftKey) {
    event.preventDefault();
    command.value = localStorage.getItem("custom");
  }
});
