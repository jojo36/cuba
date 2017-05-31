CUBA = {};

CUBA.notification = {

  launch: function(message, status){

    notifHTML = $('.notification');
    notifHTMLMessage = $('.notification p');
    notifHTMLClose = $('.notification .notifClose');

    notifHTML.addClass(status);
    notifHTML.addClass('notifAnimate');
    notifHTMLMessage.text(message);

    setTimeout(function(){
      notifHTML.removeClass(status);
      notifHTML.removeClass('notifAnimate');
      notifHTMLMessage.text('');
    }, 4000);

  }

};
