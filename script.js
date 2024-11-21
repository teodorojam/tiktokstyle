document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.background = "linear-gradient(to bottom, #43cea2, #185a9d)";
      } else {
        entry.target.style.background = "linear-gradient(to bottom, #ff7e5f, #feb47b)";
      }
    });
  }, { threshold: 0.5 });

  cards.forEach((card) => observer.observe(card));
});
