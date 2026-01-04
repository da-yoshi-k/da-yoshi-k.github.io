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
    const willBeDark = !root.classList.contains("dark");
    applyTheme(willBeDark);

    if (typeof window.gtag === "function") {
      window.gtag("event", "toggle_theme", {
        theme_mode: willBeDark ? "dark" : "light",
      });
    }
  };
})();
