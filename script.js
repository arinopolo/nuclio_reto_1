function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn") && !event.target.matches(".fa-bars")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.addEventListener("scroll", function () {
  let header = document.getElementById("scroll");
  let content = document.getElementById("scrolling");
  let rect = header.getBoundingClientRect();

  if (rect.top <= 0 && window.scrollY > rect.bottom) {
    header.style.display = "none";
    content.style.display = "block";
  } else {
    header.style.display = "block";
    content.style.display = "none";
  }
});
