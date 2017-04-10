Meteor.publish('allCustomers', function(){

  return Customers.find();

});
