Meteor.publish('getListCustomers', function(userId){

  return Customers.find({ userId: userId }, {
    fields: {lastName: 1, surName: 1}
  });

});

Meteor.publish('getListProjects', function(userId){

  return Projects.find({ userId: userId });

});
