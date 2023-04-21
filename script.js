var number = document.getElementById("number");
    countdown();

    function countdown() {
      var count = 10;
      var timer = setInterval(function () {
        if (count >= 0) {
          number.innerHTML = count;
          number.style.opacity = 1;
          setTimeout(fadeout, 500);
          count--;
        } else {
          clearInterval(timer);
          number.innerHTML = "Done!";
        }
      }, 1000);
    }


    function fadeout() {
      number.style.opacity = '0';
    }
