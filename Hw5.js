document.addEventListener("DOMContentLoaded", function () {
    year();
    month();
    day();
});
function year() {

    for (i = 2010; i <= 2020; i++) {

        var opt = document.createElement("option");
        opt.setAttribute("value", i);
        var optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        document.getElementById("se1").appendChild(opt);
    }
    document.getElementById("se1").addEventListener("change", day);
    document.getElementById("se1").addEventListener("change", print);
}
function month() {

    for (i = 1; i <= 12; i++) {
        var opt = document.createElement("option");
        opt.setAttribute("value", i);
        var optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        document.getElementById("se2").appendChild(opt);
    }
    document.getElementById("se2").addEventListener("change", day);
    document.getElementById("se2").addEventListener("change", print);
}
function day() {
    var y = parseInt(document.getElementById("se1").value);
    var m = parseInt(document.getElementById("se2").value);
    var d = new Date(y, m, 0).getDate();
    document.getElementById("se3").innerHTML = "";
    for (i = 1; i <= d; i++) {
        var opt = document.createElement("option");
        opt.setAttribute("value", i);
        var optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        document.getElementById("se3").appendChild(opt);
    }
    document.getElementById("se3").addEventListener("change", print);
}
function print() {
    var y = document.getElementById("se1").value
    var m = document.getElementById("se2").value
    var d = document.getElementById("se3").value
    document.getElementById("print").innerHTML = "你選擇的日期為:" + y + "年" + m + "月" + d + "日";
}