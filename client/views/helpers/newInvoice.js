Template.backNewInvoice.helpers({

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
