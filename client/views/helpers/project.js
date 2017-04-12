Template.backProject.helpers({

  project: function(){
    return Projects.findOne();
  },
  customer: function(customerId){
    return Customers.findOne(customerId);
  }

});
