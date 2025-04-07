document.addEventListener("DOMContentLoaded", () => {
  // Header
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(data => {
      const headerPlaceholder = document.getElementById("header-placeholder");
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
      }
    });

  // Footer
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(data => {
      const footerPlaceholder = document.getElementById("footer-placeholder");
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
      }
    });
});