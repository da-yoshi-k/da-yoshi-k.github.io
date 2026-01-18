document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll("[data-feed-toggle]");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-feed-toggle");
      const content = document.querySelector(
        `[data-feed-content="${targetId}"]`
      );
      const icon = button.querySelector(".feed-toggle-icon");

      if (!content) return;

      const isExpanded = content.classList.contains("expanded");

      if (isExpanded) {
        // 閉じる
        content.style.maxHeight = "0";
        content.classList.remove("expanded");
        icon.style.transform = "rotate(0deg)";
        setTimeout(() => {
          content.classList.add("hidden");
        }, 300);

        // GAイベント送信
        if (typeof window.gtag === "function") {
          window.gtag("event", "collapse_feed", {
            feed_id: targetId,
            transport_type: "beacon",
          });
        }
      } else {
        // 開く
        content.classList.remove("hidden");
        // 一度高さを計算するためにmax-heightを解除
        requestAnimationFrame(() => {
          const height = content.scrollHeight;
          content.style.maxHeight = `${height}px`;
          content.classList.add("expanded");
          icon.style.transform = "rotate(180deg)";
        });

        // GAイベント送信
        if (typeof window.gtag === "function") {
          window.gtag("event", "expand_feed", {
            feed_id: targetId,
            transport_type: "beacon",
          });
        }
      }
    });
  });
});
