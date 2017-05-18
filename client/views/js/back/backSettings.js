Template.backSettings.onRendered(function(){

  $('.logout').click(function(){
    Meteor.logout();
  });

});

Template.backSettings.events({

  'submit form': function(e, template){

    e.preventDefault();

    var name = $('input[name="name"]').val();
    var surName = $('input[name="surname"]').val();
    var email = $('input[name="email"]').val();

    if(name && surName && email){

      Meteor.users.update(
        {_id: Meteor.userId()},
        {$set: {'profile.name': name, 'profile.email': email, 'profile.surName': surName}}
      );
      CUBA.notification.launch('Profil mis à jour', 'success');

    }else {

      CUBA.notification.launch('Il faut remplir tous les champs', 'error');

    }

  }

});
