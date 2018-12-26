var tgtYear = document.getElementById("tgtYear");
var tgtMonth = document.getElementById("tgtMonth");
var tgtDay = document.getElementById("tgtDay");
console.log(tgtYear);

var leftMonth = document.getElementById("leftMonth")
var leftDays = document.getElementById("leftDays");
var leftHours = document.getElementById("leftHours");
var leftMin = document.getElementById("leftMin");
var leftSec = document.getElementById("leftSec");



// countdown to target date.

var currenTime;
var leftTime;




function updateTimer(t) {
    var now = new Date(t);
    var y = now.getFullYear();
    var mn = now.getMonth();
    var d = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    if (y > 0) {
        var div = document.createElement("div");
        div.classList.add("parts");
        var leftYear = document.createElement("input");
        leftYear.setAttribute("id", "leftYear");
        leftYear.classList.add("nums");
        var textYear = document.createElement("p");
        textYear.innerText = "year";
        div.appendChild(leftYear);

        leftYear.innerText = y;
    }
    leftMonth.innerText = mn;
    leftDays.innerText = d;
    leftHours.innerText = h;
    leftMin.innerText = m;
    leftSec.innerText = s;
}

function countDown() {
    yearVal = tgtYear.value;
    monthVal = tgtMonth.value;
    dayVal = tgtDay.value;
    var targetDate = new Date(yearVal, monthVal - 1, dayVal);

    set = setInterval(() => {
        currenTime = Date.now();
        leftTime = targetDate - currenTime;
        updateTimer(leftTime);
        countDown();
    }, 1000);
}

var goBtn = document.getElementById("goBtn");
goBtn.addEventListener("click", () => {
    console.log(targetDate);
    if (!tgtYear == "" && !tgtMonth == "" && !tgtDay == "") {
        countDown();
    }
});







