$(document).ready(function(){
  $("form#personalInfo").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var userAddress = $("input#address").val();
    var userEmail = $("input#email").val();

    $("#nameSpan").text(userName);
    $("#addressSpan").text("Address: " + userAddress);
    $("#emailSpan").text("Email: " + userEmail);
    $("#doNotShow").show();
  });
});
