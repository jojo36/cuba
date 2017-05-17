CUBA = {};

CUBA.toast = function(message, status){

  var status = this.status;
  var message = this.message;
  var notifHTML = $('.notif');
  var notifHTMLMessage = $('.notif p');
  var notifHTMLClose = $('.notif i');

  function launch(status, message){
    notifHTML.addClass(this.status);
    notifHTML.addClass('notifAnimate');
    notifHTMLMessage.text(this.message);
  }

  function removingClass(status){
    notifHTML.removeClass('notifAnimate');
    notifHTML.removeClass(this.status);
  }

  function clean(){
    notifHTML.removingClass();
    notifHTMLMessage.text();
  }

  launch();

  setTimeout(function(){
    clean();
  }, 5000);

  notifHTMLClose.click(function(){
    clean();
    $(this).fadeOut();
  });

}
