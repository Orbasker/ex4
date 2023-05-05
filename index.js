function rangeSlide(value) {
  document.getElementById("selectedAge").innerHTML = value;
}

function handleAlertClose() {
  const alertElement = document.getElementById("alert");
  alertElement.setAttribute("hidden", true);
}
