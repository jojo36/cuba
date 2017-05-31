Template.frontRegister.events({

  'submit form': function(e, template){

    e.preventDefault();


    var username = $('input[name="username"]').val();
    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();
    var name = $('input[name="name"]').val();
    var surname = $('input[name="surname"]').val();
    var password2 = $('input[name="password2"]').val();

    var user = {
			username: username,
			email: email,
			password: password,
			profile: {
        name: name,
        surName: surname,
        email: email
      }
		};

    Accounts.createUser(user, function(err){

      if(err){
        alert(err.reason);
      }else {
        Router.go('backDashboard');
      }

    });

  }

});
