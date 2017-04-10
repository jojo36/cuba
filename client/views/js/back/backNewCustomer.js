Template.backNewCustomer.onRendered(function(){
  $('h1').click(function(){ $('input').val('test'); });
  console.log(Meteor.userId());
});

Template.backNewCustomer.events({

  'submit form': function(e, template){

    e.preventDefault();

    var lastName = $('input[name="lastName"]').val();
    var surName = $('input[name="surName"]').val();
    var email = $('input[name="email"]').val();
    var summary = $('input[name="summary"]').val();
    var phone = $('input[name="phone"]').val();
    var address = $('input[name="address"]').val();
    var zipCode = $('input[name="zipCode"]').val();
    var city = $('input[name="city"]').val();
    var country = $('input[name="country"]').val();

    Customers.insert({
      lastName: lastName,
      surName: surName,
      email: email,
      summary: summary,
      phone: phone,
      address: address,
      zipCode: zipCode,
      city: city,
      country: country,
      userId: Meteor.userId(),
      createdAt: new Date()
    });

  }

});
