Template.inputSelect.onRendered(function(){

  $('.option').click(function(){

    var value = $(this).attr('id');
    var text = $(this).text();

    $('.inactive').text('#' + text);
    $('.inactive').attr('id', value);
    $(this).addClass('active');

  });

});

Template.input.onRendered(function(){

  $('input').focus(function(){
    $(this).addClass('active');
  });

  $('input').focusout(function(){
    if($(this).val() == ''){
      $(this).removeClass('active');
    }
  });

  if($('input').val() != ''){
    $(this).addClass('active');
  }

});
