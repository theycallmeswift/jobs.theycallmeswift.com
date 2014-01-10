$(document).ready(function() {
  var form = $('#application-form form');

  form.submit(function(e) { e.preventDefault(); });

  form.on('valid', function () {
    form.hide();
    $('.spinner').show();

    var values = form.find("input, textarea").each(function() {  $(this).val() == "" && $(this).remove(); }).serialize();

    $.post("http://api.theycallmeswift.com/v1/applicants", values)
      .done(function(data) {
        console.log(data);
        $('#application-form').html('<div class="large-12 small-12 columns"><h2>Thanks for Applying!</h2><p>Your application was successfully submitted, keep an eye on your inbox for updates!</p></div>');
      })
      .fail(function(data) {
        console.log(data);
        $('#application-form').html('<div class="large-12 small-12 columns"><h2>Uh-oh, something went wrong!</h2><p>Looks like our API is down. Mind trying again in a few minutes?</p></div>');
      });
  });

  // Email signup thankyou
  if(window.location.hash == "#thankyou") {
    $("#mc_embed_signup").html("<h3 class='center'>Thanks for signing up!</h3>");
  }
});
