

document.addEventListener("DOMContentLoaded", function () {
    test();
});
function test() {
    document.getElementById("c").innerHTML = "<caption>九九乘法表</caption>";
    for (a = 1; a <= 9; a++) {
        document.getElementById("t1").insertAdjacentHTML("BeforeEnd", "<th>" + a + "的乘數" + "</th> ");

    }
    for (a = 1; a <= 9; a++) {
        for (b = 1; b <= 9; b++) {
            document.getElementById("td" + b).insertAdjacentHTML("BeforeEnd", a + "*" + b + "=" + (a * b) + "<br>");
        }
    }
}