function bgColorChange() {
  var newColors = Please.make_color({
    colors_returned: 2
  })
  document.body.style.backgroundColor = newColors[0];
  var x = document.getElementById("btnId");
  x.style.backgroundColor = x.style.borderColor = newColors[1];
}
