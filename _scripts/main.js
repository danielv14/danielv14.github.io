$(function(){

  // click button and scroll to projects
  $('#button-portfolio').on('click', function(event) {
    event.preventDefault();
      var target = $("section.projects");
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  });

});
