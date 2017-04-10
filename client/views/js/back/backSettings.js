Template.backSettings.onRendered(function(){

  $('.logout').click(function(){
    Meteor.logout();
    Router.go('frontLogin');
  });

});
