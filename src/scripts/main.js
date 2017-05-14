
$(function() {

  // tabbed content
  // $(".tab_content").hide();
  // $("tab_container").children(".tab_content:first").show();

  $("ul.tabs li").click(function() {

    $(this).parent().siblings().children(".tab_content").hide();
    console.log($(this));
    // $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();

    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // $(".tab_drawer_heading").removeClass("d_active");
    // $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

  });

  $('ul.tabs li').last().addClass("tab_last");

  //responsive menu
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 768 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width(); if(w < 768 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());

});
