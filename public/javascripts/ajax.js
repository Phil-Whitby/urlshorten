

$('button').on('click', function(){
var URL = $('input[name="url"]').val();
$.ajax('http://188.166.175.122:3000/shorten', {
     crossDomain:true,
     method: 'post',
     data: {
       url:
     }
     success: function(data) {
       $.ajax('http://188.166.175.122:3000/shorten', {
            crossDomain:true,
            method: 'get',
            success: function(data) {

                $('#url-field').val(data.shortURL);
            }
        });
      }
    });
  });
