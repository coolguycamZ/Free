/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        // move main image to header
        if(
        	$('.post-template').length > 0 || 
        	$('.page-template').length > 0
        ) {
        	var featured_image = $('img[alt="featured-image"]');
        	var featured_video = $('.post__content iframe:first-child')
        	// check if the featured image exists
        	if(featured_video && featured_video.length > 0) {
        		featured_video.appendTo($('.post__media'));
        	}
        }

        if(
        	$(document.body).hasClass('home-template') ||
        	$(document.body).hasClass('archive-template') ||
        	$(document.body).hasClass('tag-template') ||
        	$(document.body).hasClass('author-template')
        ) {
          // get the post images
          var blocks = [];
          
          $('.post__wrapper_helper--notloaded').each(function(i, block) {
          	blocks.push(block);
          });
          
          var add_class = function(block, class_name, delay) {
          	setTimeout(function() {
          		$(block).addClass(class_name);
          	}, delay);
          };
          
          for(var i = 0; i < blocks.length; i++) {
          	add_class(blocks[i], 'post__wrapper_helper--animated', i * 200);
          }
          
          $('.post__wrapper_helper--notloaded').each(function(i, wrapper) {
            wrapper = $(wrapper);
            var img = wrapper.find('.post__image_to_load')[0];
            if(img) {
              // wait for the images
              var timer = setInterval(function() {
                // when the image is laoded
                if(img.complete) {
                  // stop periodical calls
                  clearInterval(timer);
                  // generate the image wrapper
                  var src = $(img).attr('src');
                  jQuery(img).remove();
                  var img_container = $('<div class="post__image el__transition_long" style="background-image: url(\''+src+'\')"></div>');
                  img_container.appendTo(wrapper);
                  wrapper.removeClass('post__wrapper_helper--notloaded');
                  // add class with delay
                  setTimeout(function() {
                    img_container.addClass('post__image--loaded');
                  }, 250);
                }          
              }, 500);
              // 
              wrapper.click(function() {
              	if(wrapper.find('.post__title_link').length) {
              		window.location.href = wrapper.find('.post__title_link').attr('href');
              	}
              });
              // add necessary mouse events
              wrapper.mouseenter(function() {
                wrapper.addClass('post__wrapper_helper--hover');
              });

              wrapper.mouseleave(function() {
                wrapper.removeClass('post__wrapper_helper--hover');
              });
            } else {
              // where there is no image - display the text directly
              wrapper.addClass('post__wrapper_helper--hover');
            }
          });
        }
        // fit videos
        $(".post-header").fitVids();
        $(".post-content").fitVids();
        // menu behaviour
        var main_menu = $(".menu");
        main_menu.click(function() {
          if(main_menu.hasClass("menu--open")) {
            main_menu.removeClass("menu--open");
          } else {
            main_menu.addClass("menu--open");
          }
        });
    });
}(jQuery));