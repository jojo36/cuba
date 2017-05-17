Template.backNewProject.events({

  'submit form': function(e, template){

    e.preventDefault();

    var projectName = $('input[name="projectName"]').val();
    var projectCustomerId = $('select[name="projectCustomerId"]').val();

    if(!projectName){

      CUBA.toast('qzdqzfqzfqzf', 'error');

    }else {

      Projects.insert({
        name: projectName,
        customerId: projectCustomerId,
        userId: Meteor.userId(),
        createdAt: new Date()
      });

    }



  }

});
