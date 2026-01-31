// Wedding site scripts (custom)

(function () {
  const TARGET = new Date(2026, 7, 22, 11, 0, 0); // 22 Aug 2026 11:00 (month is 0-based)

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    let diff = TARGET.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const totalSec = Math.floor(diff / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    const d = document.getElementById("d");
    const h = document.getElementById("h");
    const m = document.getElementById("m");
    const s = document.getElementById("s");

    if (d) d.textContent = String(days);
    if (h) h.textContent = pad2(hours);
    if (m) m.textContent = pad2(mins);
    if (s) s.textContent = pad2(secs);
  }

  // Smooth scroll with offset for sticky nav
  function setupSmoothScroll() {
    const nav = document.querySelector("nav.navbar");
    const offset = () => (nav ? nav.offsetHeight + 10 : 10);

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        const el = document.querySelector(href);
        if (!el) return;

        e.preventDefault();
        const top = window.scrollY + el.getBoundingClientRect().top - offset();
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", href);
      });
    });
  }

  // Scroll-to-top button
  function setupScrollTop() {
    const btn = document.getElementById("scrollTop");
    if (!btn) return;

    const onScroll = () => {
      const show = window.scrollY > 500;
      btn.classList.toggle("show", show);
    };

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  window.addEventListener("DOMContentLoaded", () => {
    tick();
    setInterval(tick, 250);
    setupSmoothScroll();
    setupScrollTop();
  });
})();
