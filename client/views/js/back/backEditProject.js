Template.backEditProject.events({

  'submit form': function(e, template){

    e.preventDefault();

    var projectName = $('input[name="projectName"]').val();
    var projectCustomerId = $('li.inactive').attr('id');

    if(projectName && projectCustomerId){

      var project = Projects.findOne({ name: name });
      var projectDoc = Projects.findOne();

      if(project && name != projectDoc.name){

        CUBA.notification.launch('Le projet du nom ' + name + ' existe déjà', 'error');

      }else {

        Projects.update({ _id: projectDoc._id }, {
          $set: {
            name: projectName,
            customerId: projectCustomerId
          }

        });

        CUBA.notification.launch('Le projet ' + name + ' a été modifié avec succès', 'success');

      }

    }else {

      CUBA.notification.launch('Il faut remplir tous les champs', 'error');

    }

  }

});

Template.backEditProject.onRendered(function(){

  $('ul').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else {
      $('ul').addClass('active');
    }
  });

});
