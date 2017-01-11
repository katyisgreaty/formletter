$(document).ready(function() {

  $(".info form").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);

    $(".letter").show();

    event.preventDefault();

  });

});
