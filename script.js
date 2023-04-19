window.onload = function() {
  window.setTimeout(fadeout, 3000); //3 seconds
}

function fadeout() {
  document.getElementById('fadeout').style.opacity = '0';
}