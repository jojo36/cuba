Template.frontLogin.events({

  'submit form': function(e, template){

    e.preventDefault();

    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();

    Meteor.loginWithPassword({
			username: username
		}, password, function(err) {
			if (err) {
				alert(err.reason);
			}
		});

  }

});
