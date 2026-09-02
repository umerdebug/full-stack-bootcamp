// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the 'fade-in' class
  const observerElements = document.querySelectorAll(".fade-in");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the element is in view
        if (entry.isIntersecting) {
          // Add the 'visible' class to trigger the CSS animation
          entry.target.classList.add("visible");
          // Unobserve the element so the animation only happens once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // Triggers when 15% of the element is visible
    },
  );

  // Observe each element
  observerElements.forEach((element) => {
    observer.observe(element);
  });
});
