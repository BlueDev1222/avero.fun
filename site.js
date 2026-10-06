/* global document */
(() => {
  const views = {
    dashboard: {
      src: "assets/dashboard.webp",
      alt: "Avero dashboard with favorite commands, saved presets, and local Roblox detection",
      caption:
        "Your commands, presets, and recent activity. One place to start.",
    },
    moderation: {
      src: "assets/moderation.webp",
      alt: "Avero Moderation Center showing a username, editable reason, and exact kick command preview",
      caption:
        "Clear details. Editable reasons. A moment to review before you act.",
    },
    compact: {
      src: "assets/compact.webp",
      alt: "Avero in its smaller compact window with quick command access",
      caption:
        "The essentials, in a smaller window. Keep Avero beside your game.",
    },
  };
  const tabs = [...document.querySelectorAll("[data-view]")];
  const panel = document.getElementById("app-panel");
  const image = document.getElementById("app-screenshot");
  const caption = document.getElementById("preview-caption");
  function select(key, focus = false) {
    const view = views[key];
    if (!view) return;
    tabs.forEach((tab) => {
      const selected = tab.dataset.view === key;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    panel.setAttribute("aria-labelledby", "tab-" + key);
    image.src = view.src;
    image.alt = view.alt;
    caption.textContent = view.caption;
    image.parentElement.classList.toggle("compact-view", key === "compact");
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab.dataset.view));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index + tabs.length - 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        select(tabs[next].dataset.view, true);
      }
    });
  });
  document
    .querySelectorAll("[data-open-view]")
    .forEach((link) =>
      link.addEventListener("click", () => select(link.dataset.openView)),
    );
})();
