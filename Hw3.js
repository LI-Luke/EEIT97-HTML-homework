var i = 0;
document.addEventListener("DOMContentLoaded", function () {
    //var imgs = document.getElementsByTagName("img");
    var imgs = document.querySelectorAll("img.s");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].onmousemove = mouseOver;
        imgs[i].onmouseout = mouseOut;
        imgs[i].onclick = click;
    }
});
var star = ["✬您給ㄧ顆星✬", "✬✬您給二顆星✬✬", "✬✬✬您給三顆星✬✬✬", "✬✬✬✬您給四顆星✬✬✬✬", "✬✬✬✬✬您給五顆星✬✬✬✬✬"];
function click() {
    i = this.id.substr(6) - 1;
    document.getElementById("speak").innerHTML = "<sapn class='span'>" + star[i] + "</sapn>";
    document.getElementById("speak").insertAdjacentHTML("AfterEnd", "<img style='margin-left:135px;' src='../img/thank.gif' />");
    for (i = 1; i <= 5; i++) {
        document.getElementById("idstar" + i).onmouseout = false;
        document.getElementById("idstar" + i).onmousemove = false;
        document.getElementById("idstar" + i).onclick = false;
    }
}
function mouseOver() {
    i = this.id.substr(6) ;
        for (var j = 1; j <= i  ; j++) {
            document.getElementById("idstar" + j).className = "n";
        }
        document.getElementById("speak").innerHTML = "打分數中......" + (j - 1) + "!!!";
}

function mouseOut() {
    i = this.id.substr(6) ;
        for (var j = 1; j <= i  ; j++) {
            document.getElementById("idstar" + j).className = "s";
        }
        document.getElementById("speak").innerHTML = "請評分";
}