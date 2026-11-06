
const filterButtons = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    workCards.forEach(card => {
      const category = card.dataset.category;

      if (selected === "all" || category === selected) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
