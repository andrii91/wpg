$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(document).ready(function(){var e=$(".reviews-carousel");e.owlCarousel({items:1,loop:!0,dots:!1,margin:0,nav:!0});var t=$(".reviews_user-carousel");t.owlCarousel({items:1,loop:!1,dots:!0,margin:0,nav:!1});var o=$(".whom-carousel");o.owlCarousel({items:2,loop:!0,dots:!1,margin:0,nav:!0,responsive:{0:{items:1},760:{items:2}}}),o.on("changed.owl.carousel",function(e){var t=e.item.index;$("#slide_name").text($($(".whom-carousel .item")[t]).data("name")),$("#slide_post").text($($(".whom-carousel .item")[t]).data("post")),$("#slide_info").text($($(".whom-carousel .item")[t]).data("info"))}),$(".whom-right").click(function(){o.trigger("next.owl.carousel")}),$(".whom-left").click(function(){o.trigger("prev.owl.carousel")}),$(".coaches-carousel").owlCarousel({items:1,loop:!0,dots:!0,margin:0,nav:!0}),$(".coaches-carousel .owl-item:not(.cloned) .item").each(function(e){$($(".coaches-carousel .owl-dots .owl-dot")[e]).append('<img src="'+$(this).find("img").attr("src")+'" >')});var n=0;$(".reviews_user-carousel .owl-dot").each(function(){$(this).attr("id",n),n+=1}),$('[data-dots="'+$(".reviews_user-carousel .owl-dot.active").attr("id")+'"').addClass("active"),e.on("change.owl.carousel",function(e){var t=e.item.index,o=t;$($(".reviews-video")[o]).find("iframe").remove(),$($(".reviews-video")[o]).find("img").show(),$($(".reviews-video")[o]).find(".reviews-btn").show()}),t.on("changed.owl.carousel",function(e){var t=e.item.index;console.log(t),$(".nav-photo li").removeClass("active"),$(".nav-photo li").removeClass("prev"),$('[data-dots="'+t+'"').addClass("active"),$(".nav-photo li.active").prev().addClass("prev")}),$(".nav-photo li").click(function(){$(".nav-photo li").removeClass("active"),$(this).addClass("active"),$("#"+$(this).data("dots")).trigger("click")}),$(".nav-photo li.active").prev().addClass("prev"),$(".reviews-video").each(function(){$(this).find("img").attr("src","http://i.ytimg.com/vi/"+$(this).data("id")+"/maxresdefault.jpg")}),$(".about-video").each(function(){$(this).find("img").attr("src","http://i.ytimg.com/vi/"+$(this).data("id")+"/maxresdefault.jpg")}),$(".reviews-btn, .play-btn").click(function(){var e="https://www.youtube.com/embed/"+$(this).parent().data("id")+"?autoplay=1&autohide=1&rel=0&amp;showinfo=0";$(this).hide(),$(this).parent().find("img").hide(),$(this).parent().find(".paranja").hide(),$(this).parent().append('<iframe src="'+e+'"  width="712" height="400" frameborder="0"></iframe>')}),$(".reviews-carousel .owl-next").prepend("<span>дальше</span>");var a=20,i=".parallax_section",r=$(".scroll-parallax").closest(i).find(".scroll-parallax"),s=r.length;$(window).on("scroll",function(){window.requestAnimationFrame(function(){for(var e=0;e<s;e++){var t=r.eq(e),o=$(window).scrollTop(),n=t.data("step")?t.data("step"):a,i=t.closest(".parallax_section").offset().top;t.css({transform:"translate3d(0,"+(o-i)*-((e+1)/n)+"px, 0)"})}})}),$(window).width()>1200?($(".show").viewportChecker({classToAdd:"is-show",offset:"10%"}),$(".fade").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeIn",offset:"0%",classToRemove:"hidden_animation",removeClassAfterAnimation:!0}),$(".down").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInDown",offset:"0%",classToRemove:"hidden_animation",removeClassAfterAnimation:!0}),$(".left, .reviews_bl .col-lg-6:nth-child(odd)").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInLeft",offset:"0%",classToRemove:"hidden_animation",removeClassAfterAnimation:!0}),$(".right, .reviews_bl .col-lg-6:nth-child(even)").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInRight",offset:"0%",classToRemove:"hidden_animation",removeClassAfterAnimation:!0}),$(".up").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInUp",offset:"10%",classToRemove:"hidden_animation",removeClassAfterAnimation:!0}),$(".zIn").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated zoomIn",offset:"10%",classToRemove:"hidden_animation",removeClassAfterAnimation:!0})):$(".show").removeClass(".show"),$(".menu-btn").click(function(){$(".menu").slideToggle("200"),$("nav").toggleClass("bg")}),$(".programs-tab li").click(function(){$(".programs-tab li").removeClass("active"),$(".programs-content .item").removeClass("active"),$(this).addClass("active"),$("#"+$(this).data("tab")).addClass("active")}),$(".questions-item").click(function(){$(this).toggleClass("active"),$(this).find(".more").slideToggle(200)}),$(".gmap").each(function(){var e=this,t={zoom:$(e).data("zoom"),zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,scrollwheel:!1,draggable:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},o=new google.maps.Map(e,t),n=new google.maps.Geocoder;n.geocode({address:$(e).data("address")},function(t,n){n===google.maps.GeocoderStatus.OK&&(new google.maps.Marker({position:t[0].geometry.location,map:o,icon:$(e).data("marker")}),o.setCenter(t[0].geometry.location))})}),Share={go:function(e,t){var o=Share,n=$.extend({type:"vk",url:location.href,count_url:location.href,title:document.title,image:"",text:""},$(e).data(),t);return null===o.popup(link=o[n.type](n))&&($(e).is("a")?($(e).prop("href",link),!0):(location.href=link,!1))},vk:function(e){var t=$.extend({url:location.href,title:document.title,image:"",text:""},e);return"http://vkontakte.ru/share.php?url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)+"&description="+encodeURIComponent(t.text)+"&image="+encodeURIComponent(t.image)+"&noparse=true"},ok:function(e){var t=$.extend({url:location.href,text:""},e);return"http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments="+encodeURIComponent(t.text)+"&st._surl="+encodeURIComponent(t.url)},fb:function(e){var t=$.extend({url:location.href,title:document.title,image:"",text:""},e);return"http://www.facebook.com/sharer.php?s=100&p[title]="+encodeURIComponent(t.title)+"&p[summary]="+encodeURIComponent(t.text)+"&p[url]="+encodeURIComponent(t.url)+"&p[images][0]="+encodeURIComponent(t.image)},lj:function(e){var t=$.extend({url:location.href,title:document.title,text:""},e);return"http://livejournal.com/update.bml?subject="+encodeURIComponent(t.title)+"&event="+encodeURIComponent(t.text+'<br/><a href="'+t.url+'">'+t.title+"</a>")+"&transform=1"},tw:function(e){var t=$.extend({url:location.href,count_url:location.href,title:document.title},e);return"http://twitter.com/share?text="+encodeURIComponent(t.title)+"&url="+encodeURIComponent(t.url)+"&counturl="+encodeURIComponent(t.count_url)},mr:function(e){var t=$.extend({url:location.href,title:document.title,image:"",text:""},e);return"http://connect.mail.ru/share?url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)+"&description="+encodeURIComponent(t.text)+"&imageurl="+encodeURIComponent(t.image)},gg:function(e){var t=$.extend({url:location.href},e);return"https://plus.google.com/share?url="+encodeURIComponent(t.url)},li:function(e){var t=$.extend({url:location.href,title:document.title,text:""},e);return"http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(t.url)+"&title="+encodeURIComponent(t.title)+"&summary="+encodeURIComponent(t.text)},popup:function(e){return window.open(e,"","toolbar=0,status=0,scrollbars=1,width=626,height=436")}},$(document).on("click",".social_share",function(e){e.preventDefault(),Share.go(this)})});