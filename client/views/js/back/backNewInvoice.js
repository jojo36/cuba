Template.backNewInvoice.onRendered(function(){

  $('.addSection').click(function(){

    var count = $('.section').length + 1;

    var itm = $("<tr class=\"section\"><td class=\"textAlignCenter\"><label for=\"serviceQty\">Quantité</label><input type=\"number\" name=\"serviceQty\" id=\"serviceQty\"></td><td><label for=\"serviceTitle\">Titre</label><input type=\"text\" name=\"serviceTitle\" id=\"serviceTitle\"><label for=\"serviceSummary\">Description</label><textarea name=\"serviceSummary\" id=\"serviceSummary\"></textarea></td><td class=\"textAlignCenter\"><label for=\"serviceTime\">Durée</label><input type=\"number\" name=\"serviceTime\" id=\"serviceTime\"></td><td class=\"textAlignCenter\"><label for=\"servicePrice\">Prix Unitaire</label><input type=\"number\" name=\"servicePrice\" id=\"servicePrice\"></td> " + count + "</tr>");

    $('table').append(itm);

  });

});

Template.backNewInvoice.events({

  'click .saveDocument': function(e, template){

    e.preventDefault();

    // CUSTOMER INFOS

    var customerName = $('#customerName').text();
    var customerFirstName = $('#customerFirstName').text();
    var customerLastName = $('#customerLastName').text();
    var customerStreet = $('#customerStreet').text();
    var customerZipCode = $('#customerZipCode').text();
    var customerCity = $('#customerCity').text();
    var customerCountry = $('#customerCountry').text();

    project = Projects.findOne();

    var data = $('form').serializeArray();
    var dataInfos = data.slice(0, 2);
    var dataServices = data.slice(2);
    var serviceArray = [];

    for (i = 0; i < dataServices.length; i++){

      serviceArray.push(dataServices[i]['value']);

    }

    Documents.insert({
      projectId: project._id,
      doc: 'invoice',
      customer: {
        name: customerName,
        firstName: customerFirstName,
        lastName: customerLastName,
        address: {
          street: customerStreet,
          zipCode: customerZipCode,
          city: customerCity,
          country: customerCountry
        }
      },
      companyName: dataInfos[0]['value'],
      summary: dataInfos[1]['value'],
      services: serviceArray,
      createdAt: new Date()
    });

    CUBA.notification.launch('Facture publié avec succès', 'success');

    Router.go('backListInvoices', { _id: project._id });


  }

});
