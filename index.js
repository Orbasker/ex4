function rangeSlide(value) {
  document.getElementById("selectedAge").innerHTML = value;
}

document.getElementById("closeAlert").addEventListener("click", function () {
  document.getElementById("alert").setAttribute("hidden", true);
});

