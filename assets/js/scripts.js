$(function () {
  "use strict";

// //fun! "JavaScript cannot access the local filesystem for security purposes"

  $(".felisHover").on("click", function () {
    if ($(this).siblings().attr("class").includes("easterCat")) {
      var rando = Math.random();

      // the for loop below works just fine, but I wanted to try a switch statement.
      // if (rando >= 0.8) {
      //   $(".felisHover").siblings().attr("src", "http://s.hswstatic.com/gif/lion-ig.jpg").attr("alt", "Male lion, relaxing");
      // } else if (rando >= 0.6 && rando < 0.8) {
      //   $(".felisHover").siblings().attr("src", "http://fscdn.wcs.org/2015/09/18/2k11rd81dh_Julie_Larsen_Maher_6848_Jaguar_ECU_11_24_08_card_image.jpg").attr("alt", "Leopard, bored");
      // } else if (rando >= 0.4 && rando < 0.6) {
      //   $(".felisHover").siblings().attr("src", "http://bigcathabitat.org/wp-content/uploads/2010/03/Cute-tiger.jpg").attr("alt", "Tiger, licking lips");
      // } else if (rando >= 0.2 && rando < 0.4) {
      //   $(".felisHover").siblings().attr("src", "http://assets.nydailynews.com/polopoly_fs/1.2024009!/img/httpImage/image.jpg_gen/derivatives/article_400/cats27tvf-3-web.jpg").attr("alt", "Female Cheetah, with cub");
      // } else if (rando < 0.2) {
      //   $(".felisHover").siblings().attr("src", "https://crapestry.files.wordpress.com/2009/10/img_2031.jpg").attr("alt", "White tiger, with sunglasses");
      // }

      // this generates one of five random images as the background of each catDiv
      switch (true) {
        case (rando >= 0.8):
          $(".felisHover").siblings().attr("src", "http://s.hswstatic.com/gif/lion-ig.jpg").attr("alt", "Male lion, relaxing");
        break;

        case (rando >= 0.6 && rando < 0.8):
          $(".felisHover").siblings().attr("src", "http://fscdn.wcs.org/2015/09/18/2k11rd81dh_Julie_Larsen_Maher_6848_Jaguar_ECU_11_24_08_card_image.jpg").attr("alt", "Leopard, bored");
        break;

        case (rando >= 0.4 && rando < 0.6):
          $(".felisHover").siblings().attr("src", "http://bigcathabitat.org/wp-content/uploads/2010/03/Cute-tiger.jpg").attr("alt", "Tiger, licking lips");
        break;

        case (rando >= 0.2 && rando < 0.4):
          $(".felisHover").siblings().attr("src", "http://assets.nydailynews.com/polopoly_fs/1.2024009!/img/httpImage/image.jpg_gen/derivatives/article_400/cats27tvf-3-web.jpg").attr("alt", "Female Cheetah, with cub");
        break;

        case (rando < 0.2):
          $(".felisHover").siblings().attr("src", "https://crapestry.files.wordpress.com/2009/10/img_2031.jpg").attr("alt", "White tiger, with sunglasses");
        break;
        }
    } else { //or, if the catDiv that was clicked was not a special one...
      location.reload();// reload the page
    }

  });

});
