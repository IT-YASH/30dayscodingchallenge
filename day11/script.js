document.getElementById("updateButton").addEventListener("click", function () {
  const progressValue = document.getElementById("progressInput").value;
  const progressBar = document.getElementById("progressBar");

  if (progressValue >= 0 && progressValue <= 100) {
    progressBar.style.width = progressValue + "%";
    progressBar.textContent = progressValue + "%";
  }
});
