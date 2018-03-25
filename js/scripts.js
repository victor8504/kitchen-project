$('document').ready(function () {
  $("#subscribe").click(function (event) {
    event.preventDefault();
    var subscribedemail = $("#emailaddress").val();
    alert(subscribedemail + " has been subscribed successfully. Thank you for subscribing!")
    $("emailaddress").val(""); 
  });
});
