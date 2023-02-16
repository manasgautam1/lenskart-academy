// $(document).ready(function () {
//     $("#form").submit(function (event) {
//       var formData = {
//         name: $("#name").val(),
//         email: $("#email").val(),
//         code: $("#selectCountry").val(),
//         mobile: $("#mobile").val(),
//         state: $("#selectState").val(),
//         city: $("#countrystatecitySelect").val(),
//         interest: $("#interest").val(),
//         experience: $("#experience").val(),
//       };
  
//       $.ajax({
//         type: "POST",
//         url: "contact.php",
//         data: formData,
//         dataType: "json",
//         encode: true,
//       }).done(function (data) {
//         console.log(data);
//         $("#name").val("");
//          $("#email").val("");
//         $("#selectCountry").val("");
//         $("#mobile").val("");
//         $("#selectState").val("");
//         $("#countrystatecitySelect").val("");
//         $("#interest").val("");
//         $("#experience").val("");
//         $("#submit-button").html(data['message']);
//         $("#submit-button").backgroundColor("transparent");
        
//       });
  
//       event.preventDefault();
//     });
//   });
 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyOa8dX-6UIdOSyfQviABNWmBTdANAwfCm_dR4Rg2p8mscMpA7vJtu-JwAB-gg5c9rfyA/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    $('#submit-button').css("display", "none");
    $('#loader').css("display", "block");
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        $("#name").val("");
         $("#email").val("");
        // $("#selectCountry").val("");
        $("#mobile").val("");
        $("#selectState").val("");
        $("#countrystatecitySelect").val("");
        $("#interest").val("");
        $("#experience").val("");
        $('#submit-response').css("display", "block");
        $('#loader').css("display", "none");
      }).catch(error => alert(error))
  })

  $("#selectState").focus(function() {
    $('#selectStateLabel').addClass('abcd');
  });
  $("#countrystatecitySelect").focus(function() {
    $('#countrystatecitySelectLabel').addClass('abcd');
  });
  $("#interest" ).focus(function() {
    $('#interestLabel').addClass('abcd');
  });
  $("#experience").focus(function() {
    $('#experienceLabel').addClass('abcd');
  });
