Template.backCustomers.events({

  'click button[name="delete"]': function(e, template){

    e.preventDefault();

    Customers.remove(this._id);

    CUBA.notification.launch('Client supprimé avec succès', 'success');

  }

});
