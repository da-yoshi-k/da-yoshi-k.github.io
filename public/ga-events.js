(function () {
  if (typeof window.gtag !== "function") return;

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[data-ga-label]");
    if (!link) return;

    const label = link.dataset.gaLabel;
    if (!label) return;

    window.gtag("event", "external_click", {
      event_category: "outbound",
      event_label: label,
      transport_type: "beacon",
    });
  });
})();
