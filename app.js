let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let submitBtn = document.getElementById("submit");
let hrInput = document.getElementById("hr");
let minInput = document.getElementById("min");
let secInput = document.getElementById("sec");
let timer = null;
let automatic = true;

function calculateCurrentTime(hr, min, sec) {
  let hours = null;
  let minutes = null;
  let seconds = null;

  if (automatic) {
    let now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
  } else {
    hours = hr;
    minutes = min;
    seconds = sec;
  }

  return [hours, minutes, seconds];
}

function getCurrentTime(hr, min, sec) {
  console.log("hr", hr, "min", min, "sec", sec);
  if (!automatic) {
    // clear previous setInterval if automatic is false
    window.clearInterval(timer);
  }

  timer = setInterval(() => {
    const [currentHr, currentMin, currentSec] = calculateCurrentTime(
      hr,
      min,
      sec
    );
    let hrRotation = 30 * currentHr + currentMin / 2;
    let minRotation = 6 * currentMin;
    let secRotation = 6 * currentSec;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
  }, 1000);
}

function updateCurrentTime() {
  automatic = false;

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  const hours = hrInput.value;
  const minutes = minInput.value;
  const seconds = secInput.value;

  let time = new Date(year, month, day, hours, minutes, seconds);

  js_clock(time);
}

function js_clock(clock_time) {
  let timer = null;
  var clock_hours = clock_time.getHours();
  var clock_minutes = clock_time.getMinutes();
  var clock_seconds = clock_time.getSeconds();
  // if timer exist , clear it
  if (timer) window.clearTimeout(timer);
  timer = setTimeout(function () {
    getCurrentTime(clock_hours, clock_minutes, clock_seconds);
    //Call the function again updating seconds by 1
    js_clock(
      new Date(
        clock_time.getFullYear(),
        clock_time.getMonth(),
        clock_time.getDate(),
        clock_time.getHours(),
        clock_time.getMinutes(),
        clock_time.getSeconds() + 1
      )
    );
  }, 1000);
}

// if automatic
if (automatic) getCurrentTime();
// if manual
submitBtn.addEventListener("click", updateCurrentTime);
