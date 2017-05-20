Template.backNewProject.events({

  'submit form': function(e, template){

    e.preventDefault();

    var projectName = $('input[name="projectName"]').val();
    var projectCustomerId = $('li.inactive').attr('id');

    if(projectName && projectCustomerId){

      Projects.insert({
        name: projectName,
        customerId: projectCustomerId,
        userId: Meteor.userId(),
        createdAt: new Date()
      });

      CUBA.notification.launch('Projet ajouté avec succès', 'success');

    }else {

      CUBA.notification.launch('Il faut remplir tous les champs', 'error');

    }

  }

});

Template.backNewProject.onRendered(function(){

  $('ul').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else {
      $('ul').addClass('active');
    }
  });

});
