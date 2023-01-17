$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });

  $(document).ready(function(){
    $(window).on('scroll', function(){
      var scroll = $(window).scrollTop();
      if (scroll>=40){
        $('.stick').addClass('stickTop');
      }
      else
      {
        $('.stick').removeClass('stickTop'); 
      }
    });

     /* 1 carousel */
$('#carousel-1').carousel({
  interval: 3000,
  wrap: true,
  keyboard: true
});

	  
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

})



function email(){
//	alert("good");
	var email = document.getElementById('email').value;
	
	if(email == "abc@gmail.com"){
		alert("Your Mesg has been delivered");
	}
	
	else{
		alert("Fill the Feild")
	}
}

