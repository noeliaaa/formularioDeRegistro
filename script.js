$(document).ready(function(){
  $('#formulario').submit(function(event) {
    event.preventDefault();

    var formEl = $('#formulario');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
        alert('Antes de Enviar');
      }
    }).done(function(data) {
    	alert('Datos Enviados');
      submitButton.prop('disabled', false);

    $.ajax({
      type: 'GET',
      url: 'https://formkeep.com/api/v1/forms/34b1c0303122/submissions.json?api_token=39ab562ba19d07763be3f0f850ef0ca5',
      accept: {
        javascript: 'application/javascript'
      }
    }).done(function(data) {
    	console.log(data);
    });

    });
  });
});
