document.addEventListener("DOMContentLoaded", function () {

  const nav = `
  <nav>
    <ul class="nav">
      <li><a href="index.html">Home</a></li>
      <li><a href="Research.html">Research</a></li>
      <li><a href="Teaching.html">Teaching</a></li>
      <li><a href="OtherLinks.html">Links</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".nav-placeholder").innerHTML = nav;

  // Auto-detect current page and highlight it
  let currentPage = window.location.pathname.split("/").pop();

  // If served at "/" or folder URL, treat as index.html
  if (!currentPage || currentPage.endsWith("/")) {
    currentPage = "index.html";
  }

  const links = document.querySelectorAll(".nav a");
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

});