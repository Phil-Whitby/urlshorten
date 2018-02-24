

$('button').on('click', function(){
var URL = $('input[name="url"]').val();
$.ajax('http://159.65.56.80:3000/shorten', {
     crossDomain:true,
     method: 'post',
     data: {
       url:URL
     },
     success: function(data) {
       $('#url-field').val(data);
     }
    });
  });
