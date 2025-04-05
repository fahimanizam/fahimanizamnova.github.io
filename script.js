function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }
  
  // Load saved theme on page load
  (function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
    }
  })();
  
