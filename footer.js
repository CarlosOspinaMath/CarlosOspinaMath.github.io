document.addEventListener("DOMContentLoaded", function () {

  const footer = `
    <footer>
      © <span id="year"></span> Carlos Ospina · ospina.math@icloud.com
    </footer>
  `;

  document.querySelector(".footer-placeholder").innerHTML = footer;

  // Automatically update the year
  document.getElementById("year").textContent =
    new Date().getFullYear();

});