// Fetch and render the markdown content
if (document.getElementById('cheatsheet')) {
  fetch('https://github.com/fahimanizam/fahimanizamnova.github.io/blob/master/cheatsheets/kubernetes.md')
    .then(res => res.text())
    .then(md => {
      document.getElementById('cheatsheet').innerHTML = marked.parse(md);
    })
    .catch(error => {
      document.getElementById('cheatsheet').innerHTML = 'Error loading cheatsheet: ' + error;
    });
}

// Theme toggle functionality
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
