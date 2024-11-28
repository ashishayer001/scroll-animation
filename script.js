// Get all container elements
const containers = document.querySelectorAll(".container");

// Add event listeners to each container
containers.forEach((container) => {
  container.addEventListener("mouseover", () => {
    // Scale up on mouseover
    container.style.transform = "scale(1.1)";
    // Add class to hovered container
    container.classList.add("hovered");
  });

  container.addEventListener("mouseout", () => {
    // Reset scale on mouseout
    container.style.transform = "scale(1)";
    container.classList.remove("hovered");
  });
});


