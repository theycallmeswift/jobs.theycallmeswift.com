$(document).ready(function() {
  var form = $('#application-form form');

  form.submit(function(e) { e.preventDefault(); });

  form.on('valid', function () {
    // TODO: Ajax submit
    $('#application-form').html('<div class="large-12 small-12 columns"><h2>Thanks for Applying!</h2><p>Your application was successfully submitted, keep an eye on your inbox for updates!</p></div>');
  });
});
