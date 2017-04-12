Projects = new Mongo.Collection('projects', {
  transform: function(doc){
    doc.customersObj = Customers.find({
      _id: {$in: [doc.customerId]}
    });
    return doc;
  }
});
