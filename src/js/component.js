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

    var whom = $('.whom-carousel');
    whom.owlCarousel({
      items: 2,
      loop: true,
      dots: false,
      margin: 0,
      nav: true,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:2
        }
    }
    });
    
    whom.on('changed.owl.carousel', function (event) {
      var index = event.item.index;
      
      $('#slide_name').text($($('.whom-carousel .item')[index]).data('name'));
      $('#slide_post').text($($('.whom-carousel .item')[index]).data('post'));
      $('#slide_info').text($($('.whom-carousel .item')[index]).data('info'));
    });
    
    $('.coaches-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      nav: true
    });



    $('.coaches-carousel .owl-item:not(.cloned) .item').each(function (i) {
      $($('.coaches-carousel .owl-dots .owl-dot')[i]).append('<img src="' + $(this).find('img').attr('src') + '" >');
    })

    var count_reviews_user = 0;

    $('.reviews_user-carousel .owl-dot').each(function () {
      $(this).attr('id', count_reviews_user);
      count_reviews_user = count_reviews_user + 1;
    })

    $('[data-dots="' + $('.reviews_user-carousel .owl-dot.active').attr('id') + '"').addClass('active');

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
      $('[data-dots="' + index + '"').addClass('active');
      $('.nav-photo li.active').prev().addClass('prev');
    });

    $('.nav-photo li').click(function () {
      $('.nav-photo li').removeClass('active');
      $(this).addClass('active');
      $('#' + $(this).data('dots')).trigger('click');
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

    if ($(window).width() > 1200) {
      $('.show').viewportChecker({
        classToAdd: 'is-show', // Class to add to the elements when they are visible
        offset: '10%'
      });

      $('.fade').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: '30%',
         classToRemove: 'hidden_animation',
        removeClassAfterAnimation: true
      });

      $('.down').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
        offset: '0%',
         classToRemove: 'hidden_animation',
        removeClassAfterAnimation: true
      });

      $('.left, .reviews_bl .col-lg-6:nth-child(odd)').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        offset: '10%',
         classToRemove: 'hidden_animation',
        removeClassAfterAnimation: true
      });

      $('.right, .reviews_bl .col-lg-6:nth-child(even)').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        offset: '10%',
         classToRemove: 'hidden_animation',
        removeClassAfterAnimation: true
      });

      $('.up').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: '10%',
         classToRemove: 'hidden_animation',
        removeClassAfterAnimation: true
      });

      $('.zIn').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
        offset: '10%',
         classToRemove: 'hidden_animation',
        removeClassAfterAnimation: true
      });


    } else {
      $('.show').removeClass('.show');
    }

    $('.menu-btn').click(function () {
      $('.menu').slideToggle('200');
      $('nav').toggleClass('bg');
    })


    $('.programs-tab li').click(function () {
      $('.programs-tab li').removeClass('active');
      $('.programs-content .item').removeClass('active');

      $(this).addClass('active');
      $('#' + $(this).data('tab')).addClass('active');
    });

    $('.questions-item').click(function () {
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
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e9e9e9"
            },
              {
                "lightness": 17
            }
        ]
    },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
            },
              {
                "lightness": 20
            }
        ]
    },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
            },
              {
                "lightness": 17
            }
        ]
    },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
            },
              {
                "lightness": 29
            },
              {
                "weight": 0.2
            }
        ]
    },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
            },
              {
                "lightness": 18
            }
        ]
    },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
            },
              {
                "lightness": 16
            }
        ]
    },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
            },
              {
                "lightness": 21
            }
        ]
    },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dedede"
            },
              {
                "lightness": 21
            }
        ]
    },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
            },
              {
                "color": "#ffffff"
            },
              {
                "lightness": 16
            }
        ]
    },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 36
            },
              {
                "color": "#333333"
            },
              {
                "lightness": 40
            }
        ]
    },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
            }
        ]
    },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f2f2f2"
            },
              {
                "lightness": 19
            }
        ]
    },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#fefefe"
            },
              {
                "lightness": 20
            }
        ]
    },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#fefefe"
            },
              {
                "lightness": 17
            },
              {
                "weight": 1.2
            }
        ]
    }
]
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


    Share = {
      /**
       * Показать пользователю дилог шаринга в сооветствии с опциями
       * Метод для использования в inline-js в ссылках
       * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
       *
       * @example <a href="" onclick="return share.go(this)">like+</a>
       *
       * @param Object _element - элемент DOM, для которого
       * @param Object _options - опции, все необязательны
       */
      go: function (_element, _options) {
        var
          self = Share,
          options = $.extend({
              type: 'vk', // тип соцсети
              url: location.href, // какую ссылку шарим
              count_url: location.href, // для какой ссылки крутим счётчик
              title: document.title, // заголовок шаринга
              image: '', // картинка шаринга
              text: '', // текст шаринга
            },
            $(_element).data(), // Если параметры заданы в data, то читаем их
            _options // Параметры из вызова метода имеют наивысший приоритет
          );

        if (self.popup(link = self[options.type](options)) === null) {
          // Если не удалось открыть попап
          if ($(_element).is('a')) {
            // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
            $(_element).prop('href', link);
            return true;
          } else {
            // Если это не <a>, то пытаемся перейти по адресу
            location.href = link;
            return false;
          }
        } else {
          // Попап успешно открыт, просим браузер не продолжать обработку
          return false;
        }
      },

      // ВКонтакте
      vk: function (_options) {
        var options = $.extend({
          url: location.href,
          title: document.title,
          image: '',
          text: '',
        }, _options);

        return 'http://vkontakte.ru/share.php?' +
          'url=' + encodeURIComponent(options.url) +
          '&title=' + encodeURIComponent(options.title) +
          '&description=' + encodeURIComponent(options.text) +
          '&image=' + encodeURIComponent(options.image) +
          '&noparse=true';
      },

      // Одноклассники
      ok: function (_options) {
        var options = $.extend({
          url: location.href,
          text: '',
        }, _options);

        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1' +
          '&st.comments=' + encodeURIComponent(options.text) +
          '&st._surl=' + encodeURIComponent(options.url);
      },

      // Facebook
      fb: function (_options) {
        var options = $.extend({
          url: location.href,
          title: document.title,
          image: '',
          text: '',
        }, _options);

        return 'http://www.facebook.com/sharer.php?s=100' +
          '&p[title]=' + encodeURIComponent(options.title) +
          '&p[summary]=' + encodeURIComponent(options.text) +
          '&p[url]=' + encodeURIComponent(options.url) +
          '&p[images][0]=' + encodeURIComponent(options.image);
      },

      // Живой Журнал
      lj: function (_options) {
        var options = $.extend({
          url: location.href,
          title: document.title,
          text: '',
        }, _options);

        return 'http://livejournal.com/update.bml?' +
          'subject=' + encodeURIComponent(options.title) +
          '&event=' + encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>') +
          '&transform=1';
      },

      // Твиттер
      tw: function (_options) {
        var options = $.extend({
          url: location.href,
          count_url: location.href,
          title: document.title,
        }, _options);

        return 'http://twitter.com/share?' +
          'text=' + encodeURIComponent(options.title) +
          '&url=' + encodeURIComponent(options.url) +
          '&counturl=' + encodeURIComponent(options.count_url);
      },

      // Mail.Ru
      mr: function (_options) {
        var options = $.extend({
          url: location.href,
          title: document.title,
          image: '',
          text: '',
        }, _options);

        return 'http://connect.mail.ru/share?' +
          'url=' + encodeURIComponent(options.url) +
          '&title=' + encodeURIComponent(options.title) +
          '&description=' + encodeURIComponent(options.text) +
          '&imageurl=' + encodeURIComponent(options.image);
      },
      // Google+
      gg: function (_options) {
        var options = $.extend({
          url: location.href
        }, _options);

        return 'https://plus.google.com/share?url=' +
          encodeURIComponent(options.url);
      },
      //LinkedIn
      li: function (_options) {
        var options = $.extend({
          url: location.href,
          title: document.title,
          text: ''
        }, _options);

        return 'http://www.linkedin.com/shareArticle?mini=true' +
          '&url=' + encodeURIComponent(options.url) +
          '&title=' + encodeURIComponent(options.title) +
          '&summary=' + encodeURIComponent(options.text);
      },

      // Открыть окно шаринга
      popup: function (url) {
        return window.open(url, '', 'toolbar=0,status=0,scrollbars=1,width=626,height=436');
      }
    }
    $(document).on('click', '.social_share', function (e) {
      e.preventDefault();
      Share.go(this);
    });

  });