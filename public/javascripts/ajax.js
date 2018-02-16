

$('button').on('click', function(){

$.ajax('http://188.166.175.122/routes/shorten', {
     crossDomain:true,
     method: 'post',
     success: function(data) {
       $.ajax('http://188.166.175.122/routes/shorten', {
            crossDomain:true,
            method: 'get',
            success: function(data) {

                $('#url-field').val(data.shortURL);
            }
        });
      }
    });
  });
