Template.backNewProject.events({

  'submit form': function(e, template){

    e.preventDefault();

    var projectName = $('input[name="projectName"]').val();
    var projectCustomerId = $('select[name="projectCustomerId"]').val();

    if(projectName){

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

  $('input[type="text"]').focus(function(){
    $(this).addClass('active');
  });

  $('input[type="text"]').focusout(function(){
    $(this).removeClass('active');
  });

  $('ul li.option').click(function(){
    $(this).fadeOut();
  });

});
