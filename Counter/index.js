(function () {

    var hrs = document.querySelector(".hrs");
    var mins = document.querySelector(".mins");
    var sec = document.querySelector(".sec");

    var start = document.querySelector(".start");
    var reset = document.querySelector(".reset");
    var pause = document.querySelector(".pause");

    var counterTime = null;
    start.addEventListener("click", function () {

    
        if (hrs.value == "" && mins.value == "" && sec.value == "") { alert("pls Enter time"); return };
        hrs.disabled = true;
        mins.disabled = true;
        sec.disabled = true;
        start.style.display = "none"
        pause.style.display = "initial"
        function startTimer() {

            counterTime = setInterval(() => {
                Timer();
            }, 1000);
        }
        startTimer();
    })
    pause.addEventListener("click", function () {
        clearInterval(counterTime);
        start.style.display = "initial"
        start.innerHTML="Continue"
        pause.style.display = "none"
        startTimer("stop");

    })
    reset.addEventListener("click", function () {
        start.style.display = "initial";
        pause.style.display = "none";
        // Set the initial time values as needed
        hrs.value = "";
        mins.value = "";
        sec.value = "";
        hrs.disabled = false;
        mins.disabled = false;
        sec.disabled = false;
    })
    function stopTimer() {
        clearInterval(counterTime);

    };
    function Timer() {
        if (hrs.value == 0 && mins.value == 0 && sec.value == 0) {
            hrs.value = ""
            mins.value = ""
            sec.value = ""
            stopTimer();
            hrs.disabled = false;
            mins.disabled = false;
            sec.disabled = false;
            start.style.display = "initial";
            start.innerHTML="Start"
        pause.style.display = "none";
        }
        else if (sec.value != 0) {
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`
        }
        else if (mins.value != 0 && sec.value == 0) {
            sec.value = "59"
            mins.value = `${mins.value <= 10 ? "0" : ""}${mins.value - 1}`
        }
        else if (hrs.value != 0 && mins.value == 0) {
            mins.value = "60"
            hrs.value = `${hrs.value <= 10 ? "0" : ""}${hrs.value - 1}`
        }
    }

})();