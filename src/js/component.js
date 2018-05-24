  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  $(document).ready(function () {
    var reviews = $('.reviews-carousel');
    reviews.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      margin: 0,
      nav: true
    });
    
    var reviews_user = $('.reviews_user-carousel');
    reviews_user.owlCarousel({
      items: 1,
      loop: false,
      dots: true,
      margin: 0,
      nav: false
    });
    $('.coaches-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      nav: true
    });
    
    
    
  $('.coaches-carousel .owl-item:not(.cloned) .item').each(function(i){
    $($('.coaches-carousel .owl-dots .owl-dot')[i]).append('<img src="'+$(this).find('img').attr('src')+'" >');
  })
    
    var count_reviews_user = 0;
    
    $('.reviews_user-carousel .owl-dot').each(function(){
      $(this).attr('id', count_reviews_user);
      count_reviews_user = count_reviews_user + 1;
    })
    
    $('[data-dots="'+$('.reviews_user-carousel .owl-dot.active').attr('id')+'"').addClass('active');

    reviews.on('change.owl.carousel', function (event) {
      var index = event.item.index;
      var count = index;
      $($('.reviews-video')[count]).find('iframe').remove();
      $($('.reviews-video')[count]).find('img').show();
      $($('.reviews-video')[count]).find('.reviews-btn').show();
    });

    reviews_user.on('changed.owl.carousel', function (event) {
     var index = event.item.index;
      console.log(index);
      $('.nav-photo li').removeClass('active');
      $('.nav-photo li').removeClass('prev');
      $('[data-dots="'+index+'"').addClass('active');
      $('.nav-photo li.active').prev().addClass('prev');
    });
    
    $('.nav-photo li').click(function(){
      $('.nav-photo li').removeClass('active');
      $(this).addClass('active');
      $('#'+$(this).data('dots')).trigger('click');
    });
    
    $('.nav-photo li.active').prev().addClass('prev');


    $('.reviews-video').each(function () {
      $(this).find('img').attr('src', 'http://i.ytimg.com/vi/' + $(this).data('id') + '/maxresdefault.jpg');
    });

    $('.about-video').each(function () {
      $(this).find('img').attr('src', 'http://i.ytimg.com/vi/' + $(this).data('id') + '/maxresdefault.jpg');
    });
    $('.reviews-btn, .play-btn').click(function () {
      var iframe_url = "https://www.youtube.com/embed/" + $(this).parent().data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
      $(this).hide();
      $(this).parent().find('img').hide();
      $(this).parent().find('.paranja').hide();
      $(this).parent().append('<iframe src="' + iframe_url + '"  width="712" height="400" frameborder="0"></iframe>')
    });

    $('.reviews-carousel .owl-next').prepend('<span>дальше</span>');



    var steps = 20;
    var paralaxContainer = '.parallax_section';
    var parallaxElements = $('.scroll-parallax').closest(paralaxContainer).find('.scroll-parallax');
    var parallaxQuantity = parallaxElements.length;

    $(window).on('scroll', function () {
      window.requestAnimationFrame(function () {

        for (var i = 0; i < parallaxQuantity; i++) {

          var currentElement = parallaxElements.eq(i);
          var scrolled = $(window).scrollTop();
          var currentElementStep = currentElement.data('step') ? currentElement.data('step') : steps;
          var containerPosition = currentElement.closest('.parallax_section').offset()['top'];

          currentElement.css({
            'transform': 'translate3d(0,' + (scrolled - containerPosition) * -((i + 1) / currentElementStep) + 'px, 0)'
          });
        }
      });
    });
    
    if($(window).width() > 1200) {
        $('.show').viewportChecker({
          classToAdd: 'is-show', // Class to add to the elements when they are visible
          offset: '10%'
        });

         $('.fade').addClass("hidden_animation").viewportChecker({
          classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
          offset: '30%'
        });
      
    }else{
       $('.show').removeClass('.show');
    }
    
    $('.menu-btn').click(function(){
      $('.menu').slideToggle('200');
      $('nav').toggleClass('bg');
    })

    
    $('.programs-tab li').click(function(){
      $('.programs-tab li').removeClass('active');
      $('.programs-content .item').removeClass('active');
      
      $(this).addClass('active');
      $('#'+$(this).data('tab')).addClass('active');
    });
    
    $('.questions-item').click(function(){
      $(this).toggleClass('active');
      $(this).find('.more').slideToggle(200);
    });
    
    
      $('.gmap').each(function () {
    var container = this;

    var mapOptions = {
      zoom: $(container).data('zoom'),
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false, //zoom on scroll
      draggable: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP/*,
       styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]*/
    };
    var map = new google.maps.Map(container, mapOptions);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        'address': $(container).data('address')
      },
      function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            icon: $(container).data('marker')
          });
          map.setCenter(results[0].geometry.location);
        }
      }
    );

  });
    

  });