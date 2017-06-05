Template.backListQuotations.events({

  'click button[name="delete"]': function(e, template){

    e.preventDefault();

    Documents.remove({ _id: this._id });

    CUBA.notification.launch('Devis supprimé avec succès', 'success');

  }

});

Template.backListInvoices.events({

  'click button[name="delete"]': function(e, template){

    e.preventDefault();

    Documents.remove({ _id: this._id });

    CUBA.notification.launch('Facture supprimé avec succès', 'success');

  }

});
