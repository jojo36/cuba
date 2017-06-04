Template.backProject.helpers({

  project: function(){
    var project = Projects.findOne();
    return project;
  },
  customer: function(){
    var project = Projects.findOne();
    var customerId = project.customerId;
    return Customers.findOne(customerId);
  }

});

Template.backListQuotations.helpers({

  project: function(){
    var project = Projects.findOne();
    return project;
  },
  customer: function(){
    var project = Projects.findOne();
    var customerId = project.customerId;
    return Customers.findOne(customerId);
  },
  documents: function(){
    var project = Projects.findOne();
    var projectId = project._id;
    return Documents.find({ projectId: projectId });
  }

});

Template.backNewQuotation.helpers({

  project: function(){
    var project = Projects.findOne();
    return project;
  },
  customer: function(){
    var project = Projects.findOne();
    var customerId = project.customerId;
    return Customers.findOne(customerId);
  }

});