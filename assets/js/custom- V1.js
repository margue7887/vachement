$(document).ready(function(){

   $('.menu-toggle').click(function(){
      $(this).children('i').toggleClass('fa-bars');
      $('.menu-collapse').toggle();
   })

   // header Button
   $('.header_button a').click(function(){
      $('.header_button_hover').toggle();
   })

   /* messages height */
   $height = $('.sidebar').height();
   $windowHeight = $(window).height();
   $width  = $(window).width();
   $messagesHeaderHeight = $(".messages_header").height();
   $messagesAction       = 82;
   $headerHeight         = $('.header').height();

   $('.message_profiles').css('height',$windowHeight - ($messagesHeaderHeight + $messagesAction + $headerHeight));

   $h = $windowHeight - ($messagesHeaderHeight + $messagesAction + $headerHeight) + "px";
   $h2 = $windowHeight - ($messagesHeaderHeight + $messagesAction + $headerHeight) - 70  + "px";
   $h3 = $windowHeight - ($messagesHeaderHeight + $messagesAction + $headerHeight) - 70 + "px";

   if ($windowHeight == 704) {
      $h = '425px';
      $h2 = '355px';
   }

   function addingscrollBar(){
      $windowHeight = $(window).height();

      if ($('.message_profiles').lenght >0) {
         $('.message_profiles').slimScroll({
              height: $h,
              color: '#FFF',
              size: "10px"
          });
      }
      if ($('#home .message_content').lenght >0) {
         $('#home .message_content').slimScroll({
            height: $h2,
            color: '#FFF',
            size: "10px",
            start:'bottom'
         });
      }
   }


   if($width > 992){
      addingscrollBar();
   }

   $('.message_form form').submit(function(){
      var currentdate = new Date();
      var $content = $(this).find('textarea').val().replace(/\r?\n/g, '<br />');
      var $message = '<div class="message message_sent"><div class="content">' + $content + '</div><div class="message_time">' + currentdate.getHours() + ":"
+ currentdate.getMinutes()  + '</div></div>';

      $('.messages_folder .tab-pane.active .message_content').append($message);

      var myInterval = setInterval(function(){
         ss('#' + $('.messages_folder .tab-pane.active').attr('id'));
      },100);

      return false;
   })

   $('.profiles .fa.pull-right').click(function(){
      $('.profiles').find('ul').slideToggle();
      if ($('.profiles .fa.pull-right').hasClass('fa-chevron-circle-up')) {
         $('.profiles .fa.pull-right').addClass('fa-chevron-circle-down');
         $('.profiles .fa.pull-right').removeClass('fa-chevron-circle-up');
      }else{
         $('.profiles .fa.pull-right').removeClass('fa-chevron-circle-down');
         $('.profiles .fa.pull-right').addClass('fa-chevron-circle-up');
      }
   });

   $('.posts .fa.pull-right').click(function(){
      $('.posts').find('ul').slideToggle();
      if ($('.posts .fa.pull-right').hasClass('fa-chevron-circle-up')) {
         $('.posts .fa.pull-right').addClass('fa-chevron-circle-down');
         $('.posts .fa.pull-right').removeClass('fa-chevron-circle-up');
      }else{
         $('.posts .fa.pull-right').removeClass('fa-chevron-circle-down');
         $('.posts .fa.pull-right').addClass('fa-chevron-circle-up');
      }
   });

   $('.message_profiles li a').click(function(){
      $('.message_form').find('textarea').val('');

      $id = $(this).attr('href');
      if($(window).height() < 767){
         $hh = $h3;
      }else {
         $hh = $h2;
      }
      $($id).find('.message_content').slimScroll({
         height: $hh,
         color: '#FFF',
         size: "10px",
         start:'bottom',
      });
      var myInterval = setInterval(function(){
         ss($id);
      },100);
      setInterval(function(){
         clearInterval(myInterval);
      },101);
   })

   function ss($id){
      $($id).find('.message_content').slimScroll({
         start:'bottom',
         scrollBy:50000,
      });
   }
   function stopinterval(){
     clearInterval(interval);
     return false;
   }

   $(window).resize(function(){
      $h = $(window).height();
      if($h > 1024){
         addingscrollBar();
      }
   });

    // messages content height
   if($width < 767){
      $('.message_content').css('height',$windowHeight- $messagesHeaderHeight - 70 );
   }
   if($width < 767){
      $('.message_profiles li a').click(function(){
         $('.messages_folder').show();
         $('body').addClass('fixed');
      })
      $('.message_detail .detail .right .dropdown .fa-times').click(function(){
         $('.messages_folder').hide();
         $('body').removeClass('fixed');
      })
   }

});


