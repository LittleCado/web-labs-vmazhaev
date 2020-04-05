//I'm using jQuery modal lib

$('a.page1__modal-button').click(function(event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });