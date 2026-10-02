document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".service-item").forEach(item => {
  item.addEventListener("click", function (event) {
    if (event.target.closest(".service-details a")) return;
    const isOpen = this.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".service-item[aria-expanded='true']").forEach(openItem => {
      if (openItem !== this) openItem.setAttribute("aria-expanded", "false");
    });
    this.setAttribute("aria-expanded", String(!isOpen));
  });
});