(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function updateIcon() {
    if (!btn) return;
    btn.textContent = root.classList.contains("dark") ? "☀️" : "🌙";
  }

  function applyTheme(isDark) {
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  }

  updateIcon();

  window.toggleTheme = function () {
    applyTheme(!root.classList.contains("dark"));
  };
})();
