$(function() {
  var age = confirm("Are you over 18?");
    if (age) {
      $("#majority").show();
    } else {
      $("#minority").show();
    }
});
