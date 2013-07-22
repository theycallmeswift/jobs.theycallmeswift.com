$(document).ready(function() {
  var form = $('#application-form form');

  form.submit(function(e) { e.preventDefault(); });

  form.on('valid', function () {
    form.hide()
    $('.spinner').show()

    $.post("http://api.theycallmeswift.com/v1/applicants", form.serialize())
      .done(function(data) {
        console.log(data);
        $('#application-form').html('<div class="large-12 small-12 columns"><h2>Thanks for Applying!</h2><p>Your application was successfully submitted, keep an eye on your inbox for updates!</p></div>');
      })
      .fail(function(data) {
        console.log(data);
        $('#application-form').html('<div class="large-12 small-12 columns"><h2>Uh-oh, something went wrong!</h2><p>Looks like our API is down. Mind trying again in a few minutes?</p></div>');
      });
  });
});
