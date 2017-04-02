Template.frontLogin.events({

  'submit form': function(e, template){

    e.preventDefault();

    this.render('frontIndex');

  }

});

// CLASS

Template.frontLogin.onRendered(function(){

  $('div.frontBody').addClass('frontBodyLogin');

});

Template.frontIndex.onRendered(function(){

  $('div.frontBody').removeClass('frontBodyLogin');

});
