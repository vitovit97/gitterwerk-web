window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var div = document.getElementById("toTopBtn");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    div.classList.add("show"); // Add the class to show the button
  } else {
    div.classList.remove("show"); // Remove the class to hide the button
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}