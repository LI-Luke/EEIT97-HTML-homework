document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("con").addEventListener("click", chkname);
    document.getElementById("con").addEventListener("click", chkPassword);
    document.getElementById("con").addEventListener("click", chkdate);
    document.getElementById("name").onblur = chkname;
    document.getElementById("idPwd").onblur = chkPassword;
    document.getElementById("date").onblur = chkdate;
});
function chkname() {
    var flag = false;
    var name = document.getElementById("name").value;
    if (name.length >= 2) {
        for (a = 0; a < name.length; a++) {
            var namecheck = name.charCodeAt(a);

            if (namecheck >= 19968 && namecheck <= 40959) {
                continue;
            }
            flag = true;
            break;
        }
        if (flag == false) {
            document.getElementById("n").innerHTML = "<img   src='../img/images.png' />正確格式";
            document.getElementById("name").style = " border: initial";
            //alert("姓名:" + name);
        } else {
            document.getElementById("n").innerHTML = "<img src=''../img/error.png'' />姓名裡含有符號、數字，字母";
            document.getElementById("name").style = " border:2px solid red";
            // alert("姓名裡含有符號、數字，字母");
        }
    }
    else if (name == "") {
        document.getElementById("n").innerHTML = "<img src='../img/error.png' />姓名不能輸入空白";
        document.getElementById("name").style = " border:2px solid red";
        //alert("姓名不能輸入空白");

    } else {
        document.getElementById("n").innerHTML = "<img src='../img/error.png' />名字要兩個字以上";
        document.getElementById("name").style = " border:2px solid red";
        //alert("名字要兩個字以上");
    }
}
function chkPassword() {
    var check = document.getElementById("idPwd").value;
    var pwd = check;
    var flag1 = false, flag2 = false, flag3 = false;
    if (check.length >= 6) {
        for (a = 0 ; a < check.length; a++) {
            var pwdchar = pwd.charAt(a).toUpperCase();
            if (pwdchar >= "A" && pwdchar <= "Z") {
                flag1 = true;
            }
            else if (pwdchar >= "0" && pwdchar <= "9") {
                flag2 = true;
            }
            else if (pwdchar == "!" || pwdchar == "@" || pwdchar == "#" || pwdchar == "$" || pwdchar == "%" || pwdchar == "^" || pwdchar == "&" || pwdchar == "*") {
                flag3 = true;
            }
            if (flag1 && flag2 && flag3) {
                break;
            }
        }
        if (flag1 && flag2 && flag3) {
            document.getElementById("p").innerHTML = "<img src='../img/images.png' />正確格式";
            document.getElementById("idPwd").style = " border: initial";
            //alert("password:" + check);

        } else {
            //alert("錯誤格式" + "要最少要包含(一個字母及一個數字及特殊符號(!@#$%^&*))");
            document.getElementById("p").innerHTML = "<img src='../img/error.png' />錯誤格式";
            document.getElementById("idPwd").style = " border:2px solid red";

        }
    } else if (check == "") {
        document.getElementById("p").innerHTML = "<img src='../img/error.png' />密碼不能輸入空白";
        document.getElementById("idPwd").style = " border:2px solid red";
        //alert("密碼不能輸入空白");
    } else {
        document.getElementById("p").innerHTML = "<img src='../img/error.png' />密碼長度不夠需要六位以上";
        document.getElementById("idPwd").style = " border:2px solid red";
        //alert("密碼長度不夠需要六位以上");
    }
}
function chkdate() {
    var date = document.getElementById("date").value;
    var d = date.split("/");
    var y1 = parseInt(d[0]);
    var m1 = parseInt(d[1]);
    var d1 = parseInt(d[2]);

    var date1 = new Date(date);
    var y = date1.getFullYear();
    var m = date1.getMonth() + 1;
    var day = date1.getDate();
    re = /\d{4}\/\d{2}\/\d{2}/;
    if (re.test(date)) {
        if (y == y1 && m == m1 && day == d1) {
            document.getElementById("da").innerHTML = "<img  src='../img/images.png' />正確格式";
            document.getElementById("date").style = " border: initial";
            //alert("日期" + date);
        } else {
            document.getElementById("da").innerHTML = "<img src='../img/error.png' />日期錯誤沒有這種日期";
            document.getElementById("date").style = " border:2px solid red";
            //alert("日期錯誤沒有這種日期");
        }
    }
    else if (date == "") {
        document.getElementById("da").innerHTML = "<img src='../img/error.png' />日期不能輸入空白";
        document.getElementById("date").style = " border:2px solid red";
        //alert("");
    } else {
        document.getElementById("da").innerHTML = "<img src='../img/error.png' />日期格式錯誤";
        document.getElementById("date").style = " border:2px solid red";
        //alert("日期長度不夠需要10位");
    }

}