Template.backQuotation.onRendered(function(){

  console.log(this._id);

});

Template.backQuotation.events({

  'click .removeDocument': function(e, template){

    var documents = Documents.findOne();
    var projectId = documents.projectId;

    Documents.remove({ _id: documents._id });

    CUBA.notification.launch('Ce devis a été supprimé avec succès', 'success');

    Router.go('backListQuotations', { _id: projectId });

  }

});
