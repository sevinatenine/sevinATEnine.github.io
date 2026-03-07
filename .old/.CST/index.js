/****************************************************************************************************

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

****************************************************************************************************/



  function loginWithGithub() {
    window.location = 'https://github.com/login/oauth/authorize?client_id=3d48caccf78efb63a147';  
  }



    var password = null;
    var username = null;
    // let users = {
    //   'c@d3N': '(0d3r_4_L1FE',
    //   '$|m0n': 'Dev',
    //   '70DD': 'yesn\'t',
    //   '$@wy3|-': 'dogecoin',
    //   'c2@r@': 'unicute',
    //   'm0m': '0m0',
    //   'd@d': 'ipv4',
    //   'TigerShark6471': '13243546',
    //   'dev_testing': 'devs only',
    //   'Ethan':'123',
    //   'root': 'go awwaaaayyyyy now!!!',
    //   '(@2v1n': 'is a nerd',
    //   'Calvin':'123',
    //   'Charlie':'123',
    //   'Ethan':'123',
    //   'Luke':'123',
    //   'Luka':'123',
    //   'Nico':'123',
    //   'samil':'123',
    //   'Shaurya':'123',
    //   'Calvin':'123',
    //   'Guest':'123',
    //   'S':'123',
    //   '123':'123',
    //   'Cole':'123',
    // };

    let banned = {
      'c@d3N': false,
      '$|m0n': false,
      '$@wy3|-':false,
      '70DD': false,
      '$@wy3|-': false,
      'GUesT_1.0': false,
      'c2@r@': false,
      'm0m': false,
      'd@d': false,
      'TigerShark6471': false,
      'dev testing': false,
      'Ethan':false,
      'root': false,
      'Calvin':false,
      'Charlie':false,
      'Ethan':false,
      'Luke':false,
      'Luka':false,
      'Nico':false,
      'Samil':false,
      'Shaurya':false,
      'Calvin':false,
      'Guest':false,
      'S':false,
      '123':false,
      'Cole':false,
    };

    let keys = {
      "sxdft677uyhDr567yuHG67yuhgr4567YGT%^&Tyht67uTghjuytghiu9oires8uj(ghbjnkvyuunbuhivtfghJGtyhgUhsxdcvbnMJHYGTFDCvbhjgytfyydrfdesw#$%TYhgfcdrtgfttfgrt*gfdesr6tyuHygt56r6tYGGftrtyuHgtfr56ujhgfrTtyujhgtfr67654edvbhjhumnhyg=dfgyhdfvgyhbgffvbnujiuyredcfvgbhnjkewrfd7yuh3eyudhjnaweufuhdbnjsugfvbhgfdsxdcfvgbhhgfd,ngfthjhgfd?tghutrs78etnvyerhsuokhfyrsertghjytdryihubyusftewgufdsghr8w76t87&tghejaugfgehjksDJFH&*jkerabhynh jiotrf#gbhnfeajskbhn skjhrushyvrukshbfjkwiujkmjhnfgb fxvhgsgyruo&uihiulkh&*uiUbhjkHhufieahbudiaeroyfnhjid8u78yY8iweafUjyhjskrgresugfvnuersgfgvhbuyefrtgbhsjuythgrfedcvbghytrfdjhbgv": {"user":"root", "info":"GO AWAAYYYYY SAWYER!!"},
      "6iugfeyornutepridutpveiorutiopuYYYIURYorinuHRIUNbtunasrtioU PTIOuarpiotuIRTurUUUUiyr6^^%Er7iboyp3nuqw9e[U RB&Y BpuYEruiYriu98b&H(*NIupTiouaNPOTINUP(*^^^TYUT(iijii=rthzijthiOUH puoiUPioU poiguiogfudfipogugPNNYBNHUOGYTYHJUY&T^YGHJKIUYHJNKHUYHJBYGHBJYGHBfiduyfuiBYOV F(G*&YSR&*(T*^y &O*ESFB YS*&yer9thuie8thiuuuY *RY&*T(&^V*^% YTUGJUT&^IRGKVHYUT^&IGHJ<EUYO&S*TLUG<HJyrto768t uGLYEOBS*^R&GKUYHJUYT&E^UYGKHJ<KUTO^UYKG<JHLYUTOUYGJ<KYUTI^UYKGHJ<KUYTI^KYGH<YKUT^KYGMHJ<KUTYGuuyu ifgu   r uiht huiru tuirti  rt   rtu tuir tpuiertiuerptiudfjkn yG>N HRUr uilrtiureptiouPIOUPIUIOUUUUUIO Utio wruts89e5a": {"user":"$|m0n", "info":"Login for Simon"},
      "08v5n7w0ebt86r be6tnw47e85ri7 uygtw67qygkrt67ewygqhfsuyt76ugkrwhlasyot6crgkefhwyit6auyt7i6qerwuy a7bv68teiqwyuadstoiyugesdxhgoiuadfyoba7fiwvoye87rudshvwberi7uydthw48eirusbgo8w t7eri ot78riduytoieg7t86wy4eulr7645o7rtyeow86t78reysgip6erliudisdju50f3h948er7g6958w7noetirubwy4 958eruthwe78riutyo48eriudto7yuhriy8p78yiuhliyo7yluio67yliuhliy78pb reitbuywertid ;uei;hrt;urwjuhbnhyhnjujmiujnmuewrypt io uerpwoitwjtrhuyuiewr87ty9iuhk.jiur8rhjkiu8uieo897uih897riuyhi89uihelrpt7h8 iuept89iueper8t9uoiufuprofdgks.jgdksflgj;id lstfujgs.rtret rjtkyj;rtkyjr;tkljyrkltjytlkr jy krtl jykrtlyjkrltjyklrtj lnk": {"user":"c@d3N", "info":"Login for Caden"},
    }
    // fetch('https://api.ipify.org?format=json')
    var users = {};

    const init = async () => {
      var response = await fetch("./users.json");
      var data = await response.json();
      users = data;
    };
    
    (async () => {
      await init();
    })();
    function initial() {
      document.getElementById('file-input').addEventListener('change', handleFileSelect, false);


      


    }
    
    function handleFileSelect(event) {
      const reader = new FileReader()
      reader.onload = handleFileLoad;
      reader.readAsText(event.target.files[0])
    }
    
    function handleFileLoad(event) {
      datakey = event.target.result;
      if(keys[datakey]!="" && keys[datakey]!=undefined && keys[datakey]!=null) {
        sessionStorage.setItem('permittedTerminalCST', 'affirmed');
        sessionStorage.setItem("userTerminalCST",keys[datakey]["user"]);
        location.replace("./terminal.html");
      } else {
        document.getElementById('incorrect').style.display = 'block';
      }
    }
    async function useUrl(url){
      const response = await fetch(url);
      var data = await response.text();
      console.log(data);
      ipAddress = (data.replace('{','').replace('}',''));
      window.sessionStorage.setItem('IPv4', (ipAddress));
      return ipAddress;
    }





    // fetch('./bannedUsers.txt')
    // .then(response => response.text())
    // .then(text => console.log("|"+text+"|"))
   
    // ban-$|m0n=false,
    // ban-c@d3N=false,
    // ban-70DD=false,
    // ban-$@wy3|-=false

    async function signin() {
      const secondUsernames = {
        "17513719":{
          "username":["$|m0n"],
          "notes":"mac chrome"
        },
        "17373562":{
          "username":["$|m0n", "$@wy3|-"],
          "notes":"mac safari"
        },
        "17378395":{
          "username":["$@wy3|-"],
          "notes":"mac chrome"
        },
        "256776303038":{
          "username":["$|m0n"],
          "notes":"mac chrome 2"
        },
        "undefined":{
          "username":["Unknown"],
          "notes":"Unknown"
        },
        undefined:{
          "username":["Unknown"],
          "notes":"Unknown"
        }
      }

      // console.log(String(secondUsernames[String(getUID())]['username']));


    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
    .then(FingerprintJS => FingerprintJS.load());

    // Get the visitor identifier when you need it.
    fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId;
      console.log(visitorId);
    });


      var password = document.getElementById('password');
      var username = document.getElementById('username');
      var tempUser = username.value;

      

      await fetch('./bannedUsers.txt')
      .then(response => response.text())
      // .then(text => console.log(text.split('\n'))
      .then(text => {
        console.log((text.split('\n')).filter(item => item !== ''));
        var items = text.split('\n').filter(item => item !== '');
        console.log(tempUser);
        console.log(items.includes(tempUser));
        if (items.includes(tempUser)) {
          location.href="./blocked.html";
        }
      })
      var lockdownModeEnabled = false;
      await fetch('./getLockdown.php')
        .then(response => response.text())
        .then(text => {
          if(text=="true") {
            sessionStorage.setItem('permittedTerminalCST', 'denied');
            location = "./lockdown.html";
            lockdownModeEnabled = true;
            return 0;
          };
      });
      
      if (username.value == "root") {
        document.getElementById('noroot').style.display = 'block';
        return 0;
      }

      
      var userData = users[username.value];
      if ((userData != undefined && userData["password"] == document.getElementById("password").value)&& (!banned[username.value]) && !lockdownModeEnabled) {
        try {
        await fetch(('./logLoginAttempt.php?trueUsername='+String(usernames[String(uid)]['users'])+'&trueUsername2='+String(secondUsernames[String(getUID())]['username'])+"&loginUsername="+username.value+"&browser="+String(String(usernames[String(uid)]['browser']))+"&os="+String(usernames[String(uid)]['os'])))
        .then(response => response.text())
        // .then(text => console.log(text.split('\n'))
        .then(text => {

          var parts = window.location.search.substr(1).split("&");
          var $_GET = {};
          for (var i = 0; i < parts.length; i++) {
              var temp = parts[i].split("=");
              $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
          }

          if ($_GET.nextPage !== undefined) {
            location.href=$_GET.nextPage;
          } else {

            location.href="./terminal.html?loginType=standard&loginData=[none]";
          }

        })
        } catch {
          await fetch(('./logLoginAttempt.php?trueUsername=UNKNOWN&trueUsername2=UNKNOWN&loginUsername='+username.value+'&os='+(navigator.userAgent.replaceAll("(","").replaceAll(")","").replaceAll(";","").split(" ")[1])+'&browser='+(navigator.userAgent.replaceAll("(","").replaceAll(")","").replaceAll(";","").split(" ")[11])))
          .then(response => response.text())
          // .then(text => console.log(text.split('\n'))
          .then(text => {
            

            var parts = window.location.search.substr(1).split("&");
            var $_GET = {};
            for (var i = 0; i < parts.length; i++) {
                var temp = parts[i].split("=");
                $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
            }

            if ($_GET.nextPage !== undefined) {
              location.href=$_GET.nextPage;
            } else {

              location.href="./terminal.html?loginType=standard&loginData=[none]";
            }

          });
        }
        sessionStorage.setItem('permittedTerminalCST', 'affirmed');
        sessionStorage.setItem("userTerminalCST", username.value);
        localStorage.setItem('permittedTerminalCST', 'affirmed');
        localStorage.setItem("userTerminalCST", username.value);
        window.sessionStorage.googleLogin = false;
        document.getElementById('success').style.display = 'block';
        document.getElementById('incorrect').style.display = 'none';
        document.getElementsByTagName('button')[0].onclick = '';
        console.log((useUrl('https://api.ipify.org?format=json')+', {"username":"'+username.value+'"}'));
        console.log(window.sessionStorage.getItem('IPv4')+', "username":"'+username.value+'"')
        try {
          document.getElementById('ipAddress').innerHTML = (window.sessionStorage.getItem('IPv4')+', "username":"'+username.value+'"');
        }catch{}
        
        
      } else {
        document.getElementById('incorrect').style.display = 'block';
        password.value = '';
        username.value = '';
        sessionStorage.setItem('permittedTerminalCST', 'denied');
      }
    }
    

    document.getElementById('password').addEventListener("keydown", function(event) {
      if (event.key == "Enter") {
        signin();
      } 
    });

    document.getElementById('username').addEventListener("keydown", function(event) {
      if (event.key == "Enter") {
        signin();
      } 
    });
