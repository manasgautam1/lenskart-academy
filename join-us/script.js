
const scriptURL = 'https://script.google.com/macros/s/AKfycbx7CEKD2baVcFVLAEo8qKIRpLGc0njE5LvpwxzpGmqiZufMTpTxZBNkVFcNJ2nHX2XBaw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  // $('#submit-button').css("display", "none");
  // $('#loader').css("display", "block");
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      $("#name").val("");
       $("#email").val("");
      $("#college-name").val("");
      $("#primary-mobile-number").val("");
      $("#alternate-mobile-number").val("");
      $("#degree").val("");
      $("#year").val("");
      $("#recruiter-name").val("");
      // $('#submit-response').css("display", "block");
      // $('#loader').css("display", "none");
    }).catch(error => alert(error))
});

// $("#selectState").focus(function() {
//   $('#selectStateLabel').addClass('abcd');
// });
// $("#countrystatecitySelect").focus(function() {
//   $('#countrystatecitySelectLabel').addClass('abcd');
// });
// $("#interest" ).focus(function() {
//   $('#interestLabel').addClass('abcd');
// });
// $("#experience").focus(function() {
//   $('#experienceLabel').addClass('abcd');
// });
