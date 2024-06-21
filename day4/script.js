document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementsByClassName("close")[0];

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    alert("form is submited");
    console.log(data);
    modal.style.display = "none";
    contactForm.reset();
  });
});
