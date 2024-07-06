function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll(".tabcontent");
  tabContents.forEach((tab) => {
    tab.classList.remove("active");
  });

  const tabLinks = document.querySelectorAll(".tablinks");
  tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });
  
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
