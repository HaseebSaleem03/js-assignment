let timer;
let isON = false;
let duration = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', function() {
  if (!isON) {
    startTimer();
    isON = true;
  }
});

stopBtn.addEventListener('click', function() {
  if (isON) {
    stopTimer();
    isON = false;
  }
});

resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  const startTime = Date.now() - duration;
  timer = setInterval(function () {
    duration = Date.now() - startTime;
    timeDisplay.textContent = displayTime(duration);
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  duration = 0;
  timeDisplay.textContent = '00:00:00:00';
  isON = false;
}

function displayTime(millisecond) {
  const totalSeconds = Math.floor(millisecond / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((millisecond % 1000) / 10); 

  return `${String(hours).padStart(2, '0')}:
          ${String(minutes).padStart(2, '0')}:
          ${String(seconds).padStart(2, '0')}.
          ${String(milliseconds).padStart(2, '0')}`;
}
