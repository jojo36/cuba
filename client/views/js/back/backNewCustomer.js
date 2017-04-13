Template.backNewCustomer.onRendered(function(){
  $('h1').click(function(){ $('input').val('test'); });
  console.log(Meteor.userId());
});

Template.backNewCustomer.events({

  'submit form': function(e, template){

    e.preventDefault();

    var name = $('input[name="name"]').val();
    var lastName = $('input[name="lastName"]').val();
    var surName = $('input[name="surName"]').val();
    var email = $('input[name="email"]').val();
    var summary = $('textarea[name="summary"]').val();
    var phone = $('input[name="phone"]').val();
    var street = $('input[name="address"]').val();
    var zipCode = $('input[name="zipCode"]').val();
    var city = $('input[name="city"]').val();
    var country = $('input[name="country"]').val();

    Customers.insert({
      name: name,
      email: email,
      phone: phone,
      infos: {
        lastName: lastName,
        surName: surName,
        summary: summary
      },
      address: {
        street: street,
        zipCode: zipCode,
        city: city,
        country: country
      },
      userId: Meteor.userId(),
      createdAt: new Date()
    });

  }

});
