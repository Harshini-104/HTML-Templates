const homeLink = document.getElementById("homeLink");
const homeDropdown = document.getElementById("homeDropdown");
const homeWrapper = document.getElementById("homeDropdownWrapper");
homeLink.addEventListener("click", function (e) {
  e.preventDefault();
  homeDropdown.style.display = "block"; // Show dropdown
});

// Hide dropdown when cursor leaves it
homeWrapper.addEventListener("mouseleave", function () {
  homeDropdown.style.display = "none";
});