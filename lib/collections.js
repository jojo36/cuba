Customers = new Mongo.Collection('customers', {
  transform: function(doc){
    doc.projectsObj = Projects.find({
      customerId: doc._id
    });
    return doc;
  }
});

Projects = new Mongo.Collection('projects', {
  transform: function(doc){
    doc.customerObj = Customers.find({
      _id: doc.customerId
    });
    return doc;
  }
});
