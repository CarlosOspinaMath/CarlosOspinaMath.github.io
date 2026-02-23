document.addEventListener("DOMContentLoaded", function() {
  const header = `
  <header class="site-header">
    <div>
      <h1 class="site-title">Carlos Ospina</h1>
      <!-- 
      <p class="site-subtitle">
        Postdoctoral Fellow, School of Mathematical Sciences<br>
        Tel Aviv University
      </p> 
      -->
    </div>
    <!-- <div class="header-links">
      <div><a href="Carlos_CV.pdf" target="_blank">Curriculum Vitae (PDF)</a></div>
      <div>ospina.math@icloud.com</div>
    </div> -->
  </header>
  `;
  document.querySelector(".header-placeholder").innerHTML = header;
});