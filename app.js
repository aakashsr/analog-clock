let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function getCurrentTime(hr,min,sec) {
  setInterval(() => {
    let now = new Date();
    let hours = hr ? hr : now.getHours();
    let minutes = min ? min : now.getMinutes();
    let seconds = sec ? sec : now.getSeconds();

    let hrRotation = 30 * hours + minutes / 2;
    let minRotation = 6 * minutes;
    let secRotation = 6 * seconds;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
  }, 1000);
}

getCurrentTime();
