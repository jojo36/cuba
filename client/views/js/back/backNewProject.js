Template.backNewProject.events({

  'submit form': function(e, template){

    e.preventDefault();

    var projectName = $('input[name="projectName"]').val();
    var projectCustomerId = $('input[name="projectCustomerId"]').val();

    Projects.insert({
      name: projectName,
      customerId: projectCustomerId,
      userId: Meteor.userId(),
      createdAt: new Date()
    });

  }

});
