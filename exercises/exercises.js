function selects() {
  var check = document.getElementsByName("numbers");
  for (var i = 0; i < check.length; i++) {
    if (check[i].type == "checkbox") {
      check[i].checked = true;
      console.log(check);
    }
  }
}
function deselect() {
  var check = document.getElementsByName("numbers");
  for (var i = 0; i < check.length; i++) {
    if (check[i].type == "checkbox") {
      check[i].checked = false;
      console.log(check);
    }
  }
}
