let timer;
let totalTime = 0;
let isRunning = false;
let remainingTime = 0;
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const message = document.getElementById("message");

document.getElementById("startButton").addEventListener("click", function () {
  if (isRunning) return;

  const minutesInput = document.getElementById("minutesInput").value;
  const secondsInput = document.getElementById("secondsInput").value;

  if (!isRunning && remainingTime === 0) {
    totalTime = parseInt(minutesInput) * 60 + parseInt(secondsInput);
  } else {
    totalTime = remainingTime;
  }

  if (isNaN(totalTime) || totalTime <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  message.classList.add("hidden");
  isRunning = true;

  timer = setInterval(() => {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    minutesSpan.textContent = String(minutes).padStart(2, "0");
    secondsSpan.textContent = String(seconds).padStart(2, "0");

    if (totalTime <= 0) {
      clearInterval(timer);
      isRunning = false;
      message.classList.remove("hidden");
      alert("Time's up!");
    }

    totalTime--;
    remainingTime = totalTime;
  }, 1000);
});

document.getElementById("stopButton").addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("resetButton").addEventListener("click", function () {
  clearInterval(timer);
  totalTime = 0;
  remainingTime = 0;
  isRunning = false;
  minutesSpan.textContent = "00";
  secondsSpan.textContent = "00";
  message.classList.add("hidden");
});
