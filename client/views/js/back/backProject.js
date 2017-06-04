Template.backProject.events({

  'click button[name="delete"]': function(e, template){

    e.preventDefault();

    var project = Projects.findOne();

    Projects.remove(project._id);

    Router.go('backDashboard');

  }

});
