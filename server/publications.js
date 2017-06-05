import PublishRelations from 'meteor/cottz:publish-relations';

// GET LIST CUSTOMERS

Meteor.publish('getListCustomers', function(userId){

  return Customers.find({ userId: userId });

});

// GET ONE CUSTOMER

Meteor.publish('getCustomer', function(customerId){

  return Customers.find({ _id: customerId });

});


// GET ONE PROJECT

Meteor.publish('getProject', function(projectId){

  return Projects.find({ _id: projectId });

});

// GET PROJECT & CUSTOMER

Meteor.publish('getProjectCustomer', function(projectId){

  var project = Projects.findOne({ _id: projectId });

  return Customers.find({
    _id: project.customerId
  });

});

// GET LIST PROJECTS

Meteor.publish('getListProjects', function(userId){

  return Projects.find({ userId: userId });

});

// GET LIST QUOTATIONS

Meteor.publish('getListDocuments', function(projectId, doc){

  return Documents.find({ projectId: projectId, doc: doc });

});

// GET DOCUMENT

Meteor.publish('getDocument', function(documentId){

  return Documents.find({ _id: documentId });

});
