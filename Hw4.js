document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("li0").addEventListener("mouseover", Apple);
    document.getElementById("li1").addEventListener("mouseover", Htc);
    document.getElementById("li2").addEventListener("mouseover", Nokia);
    document.getElementById("li3").addEventListener("mouseover", OppO);
    document.getElementById("li4").addEventListener("mouseover", Samsung);
    document.getElementById("li5").addEventListener("mouseover", Sony);
    document.getElementById("li0").addEventListener("mouseout", Appleout);
    document.getElementById("li1").addEventListener("mouseout", Htcout);
    document.getElementById("li2").addEventListener("mouseout", Nokiaout);
    document.getElementById("li3").addEventListener("mouseout", OppOout);
    document.getElementById("li4").addEventListener("mouseout", Samsungout);
    document.getElementById("li5").addEventListener("mouseout", Sonyout);
    document.getElementById("prev").addEventListener("mouseover", prev);
    document.getElementById("next").addEventListener("mouseover", next);
    document.getElementById("prev").addEventListener("mouseout", prevout);
    document.getElementById("next").addEventListener("mouseout", nextout);
    document.getElementById("prev").addEventListener("click", prevclick);
    document.getElementById("next").addEventListener("click", nextclick);
    document.getElementById("m1").addEventListener("click", openWeb);
    document.getElementById("m1").addEventListener("mouseover", openWebover);
    document.getElementById("m1").addEventListener("mouseout", openWebOut);
    document.getElementById("m5").addEventListener("click", pause);
});
var jsImg = new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png");
var web = new Array("https://www.apple.com/tw//?afid=p238%7Csd9nZSawW-dc_mtid_18707vxu38484_pcrid_169699630457_&cid=aos-tw-kwgo-brand--slid-", "http://www.htc.com/tw/", "http://www.nokia.com/zh_int", "http://www.oppo.com/tw/index.html", "http://www.samsung.com/tw/", "https://www.sony.com.tw/zh");
var jsImg_len = jsImg.length;
var i = 0;
var j = 1;
function setclock() {
    document.getElementById("m1").src = "../img/" + jsImg[j];
    i++;
    j++;
    if (j >= jsImg_len) {
        j = 0;
    }
    if (i >= web.length) {
        i = 0;
    }
}
function setclock2() {
    document.getElementById("li" + i).className = "li";
    document.getElementById("li" + j).className = "lihover";
}
var b = window.setInterval(setclock2, 3000);
var a = window.setInterval(setclock, 3000);
function openWeb() {
    window.open(web[i], "_blank");
}
function openWebover() {
    clearInterval(a);
    clearInterval(b);
}
function openWebOut() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function Apple() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("li" + i).className = "li";
    document.getElementById("m1").src = "../img/1.png";
    i = 0;
    j = 1;
    document.getElementById("li" + i).className = "lihover";
}
function Htc() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("li" + i).className = "li";
    document.getElementById("m1").src = "../img/2.png";
    i = 1;
    j = 2;
    document.getElementById("li" + i).className = "lihover";

}
function Nokia() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("li" + i).className = "li";
    document.getElementById("m1").src = "../img/3.png";
    i = 2;
    j = 3;
    document.getElementById("li" + i).className = "lihover";

}
function OppO() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("li" + i).className = "li";
    document.getElementById("m1").src = "../img/4.png";
    i = 3;
    j = 4;
    document.getElementById("li" + i).className = "lihover";
}
function Samsung() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("li" + i).className = "li";
    document.getElementById("m1").src = "../img/5.png";
    i = 4;
    j = 5;
    document.getElementById("li" + i).className = "lihover";
}
function Sony() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("li" + i).className = "li";
    document.getElementById("m1").src = "../img/6.png";
    i = 5;
    j = 0;
    document.getElementById("li" + i).className = "lihover";
}
function Appleout() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function Htcout() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function Nokiaout() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);  
}
function OppOout() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function Samsungout() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function Sonyout() {
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}

function prev() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("prev").className = "m4";
}
function next() {
    clearInterval(a);
    clearInterval(b);
    document.getElementById("next").className = "m4";
}
function prevclick() {
    if (i == 0) {
        document.getElementById("li" + i).className = "li";
        j = 0;
        i = 5;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 1) {
        document.getElementById("li" + i).className = "li";
        j = 1;
        i = 0;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 2) {
        document.getElementById("li" + i).className = "li";
        j = 2;
        i = 1;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 3) {
        document.getElementById("li" + i).className = "li";
        j = 3;
        i = 2;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 4) {
        document.getElementById("li" + i).className = "li";
        j = 4;
        i = 3;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 5) {
        document.getElementById("li" + i).className = "li";
        j = 5;
        i = 4;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
}
function nextclick() {
    if (i == 0) {
        document.getElementById("li" + i).className = "li";
        i = 1;
        j = 2;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 1) {
        document.getElementById("li" + i).className = "li";
        i = 2;
        j = 3;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 2) {
        document.getElementById("li" + i).className = "li";
        i = 3;
        j = 4;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 3) {
        document.getElementById("li" + i).className = "li";
        i = 4;
        j = 5;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 4) {
        document.getElementById("li" + i).className = "li";
        i = 5;
        j = 0;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
    else if (i == 5) {
        document.getElementById("li" + i).className = "li";
        i = 0;
        j = 1;
        document.getElementById("m1").src = "../img/" + jsImg[i];
        document.getElementById("li" + i).className = "lihover";
    }
}
function prevout() {
    document.getElementById("prev").className = "m3";
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function nextout() {
    document.getElementById("next").className = "m3";
    b = window.setInterval(setclock2, 3000);
    a = window.setInterval(setclock, 3000);
}
function pause() {
    clearInterval(b);
    clearInterval(a);
}