var boundaries = document.querySelectorAll(".boundary,.movingbox1,.movingbox2,.movingbox3,.movingbox4,.movingbox5,.movingbox6,.movingbox7,.movingbox8,.movingbox9,.movingbox10,.movingbox11,.movingbox12,.movingbox13,.movingbox14,.movingbox15,.movingbox16");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var win = true;

  start.addEventListener("mouseover", function() {
    document.getElementById("status").innerHTML = "Flytt musepekeren over til E for å vinne spillet";
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", function() {
        win = false;
        document.body.style.backgroundColor = "red";
        document.body.style.backgroundColor = "#B22222";
        document.getElementById("status").innerHTML = "Du tapte! Trykk på start på nytt knappen for å starte på nytt";
      });
    }
    
  });

end.addEventListener("mouseover", function() {
  if (win == true) {
    document.body.style.backgroundColor = "green";
    document.body.style.backgroundColor = "#32CD32";
    document.getElementById("status").innerHTML = "Du vant!";
  }
  win = true;
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


function refreshPage(){
    window.location.reload();
}
