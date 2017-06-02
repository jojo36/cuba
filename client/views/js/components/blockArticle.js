Template.blockArticle.onRendered(function(){

  $('button[name="delete"]').hover(function(){
    var parent = $(this).parent($('article'));
    parent.addClass('delete');
    /*if(parent.hasClass('customer')){
      CUBA.notification.launch('ATTENTION : Si vous supprimez ce client, tous les projets liés seront également supprimés', 'error');
    }*/
  });

  $('button[name="delete"]').mouseleave(function(){
    $(this).parent($('article')).removeClass('delete');
  });

});
