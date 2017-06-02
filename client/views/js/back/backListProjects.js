Template.backProjects.onRendered(function(){

  $('button[name="delete"]').hover(function(){
    var parent = $(this).parent($('article'));
    parent.addClass('delete');
  });

  $('button[name="delete"]').mouseleave(function(){
    $(this).parent($('article')).removeClass('delete');
  });

});

Template.backProjects.events({

  'click button[name="delete"]': function(e, template){

    e.preventDefault();

    Projects.remove(this._id);

    CUBA.notification.launch('Projet supprimé avec succès', 'success');

  }

});
