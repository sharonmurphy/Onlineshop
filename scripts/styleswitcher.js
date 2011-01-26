function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

        function lichtaus() {
                if(getActiveStyleSheet() == "standart"){
                        setActiveStyleSheet('lichtaus');
                }
		else if(getActiveStyleSheet() == "lichtaus"){
			setActiveStyleSheet('standart');
		}
		else if(getActiveStyleSheet() == "grosseFonts"){
			setActiveStyleSheet('lichtausG');
		}
		else if(getActiveStyleSheet() == "groessereFonts"){
			setActiveStyleSheet('lichtausGG');
		}
		else if(getActiveStyleSheet() == "lichtausG"){
			setActiveStyleSheet('grosseFonts');
		}
		else if(getActiveStyleSheet() == "lichtausGG"){
			setActiveStyleSheet('groessereFonts');
		}
        }

        function normaleF() {
                if(getActiveStyleSheet() == "grosseFonts" || getActiveStyleSheet() == "groessereFonts" || getActiveStyleSheet() == "standart"){
                        setActiveStyleSheet('standart');
                }
                else{
                        setActiveStyleSheet('lichtaus');
                }
        }
        function grosseF(){
		if(getActiveStyleSheet() == "standart" || getActiveStyleSheet() == "groessereFonts" || getActiveStyleSheet() == "grosseFonts"){
                 setActiveStyleSheet('grosseFonts');
		}
		else {
		 setActiveStyleSheet('lichtausG');
		}
                 }

        function groessereF(){
		if(getActiveStyleSheet() == "standart" || getActiveStyleSheet() == "grosseFonts" || getActiveStyleSheet() == "groessereFonts"){
                 setActiveStyleSheet('groessereFonts');
		}
		else{
			setActiveStyleSheet('lichtausGG');
		}
        }
