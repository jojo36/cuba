Customers = new Mongo.Collection('customers');

Projects = new Mongo.Collection('projects', {
  transform: function(doc){
    doc.customerObj = Customers.find({
      _id: doc.customerId
    });
    return doc;
  }
});
