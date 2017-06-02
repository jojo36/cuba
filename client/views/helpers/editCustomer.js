Template.backEditCustomer.helpers({

  customer: function(){
    return Customers.findOne();
  }

});
