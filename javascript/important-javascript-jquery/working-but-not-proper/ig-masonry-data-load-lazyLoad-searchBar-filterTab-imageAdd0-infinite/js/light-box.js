$(".grid .item img").on("click", slide_show);
      function slide_show(){
          $(".slide_show").addClass("active");
          var imgSrc = $(this).attr("src");
          $(".slide_show img").attr("src", imgSrc);
          $(this).closest(".item").addClass("current");

          $(".slide_show > i.prev").show();
          $(".slide_show > i.next").show();
      };
      
      $(".slide_show > i.prev").on("click", prev);
      function prev(){
          $(".grid .item.current").each(function(){
              $(this).prev().addClass("current").find("img").attr("src");
              var prev = $(this).prev().addClass("current").find("img").attr("src");
              $(this).removeClass("current");
              $(".slide_show img").attr("src", prev);
          });
      }

      $(".slide_show > i.next").on("click", next);
      function next(){
          $(".grid .item.current").each(function(){
              $(this).next().addClass("current").find("img").attr("src");
              var next = $(this).next().addClass("current").find("img").attr("src");
              $(this).removeClass("current");
              $(".slide_show img").attr("src", next);                
          });
      }
      
      $(".slide_show > b").on("click", slide_remove);
      function slide_remove(){
          $(this).closest(".slide_show").removeClass("active");
          $(this).siblings("img").removeAttr("src");
          $(".grid .item").removeClass("current");
      };


      $(".slide_show > i.prev").on("click", function(){
          $(".slide_show > i.next").show();
          $('.grid').find('.item:first-child.current').each(function(){
              $(".slide_show > i.prev").hide();
          });
      });

      $(".slide_show > i.next").on("click", function(){
          $(".slide_show > i.prev").show();
          $('.grid').find('.item:last-child.current').each(function(){
              $(".slide_show > i.next").hide();
          });
      });


      $(".grid .item:first-child img").on("click", function(){
          $(".slide_show > i.next").show();
          $('.grid').find('.item:first-child.current').each(function(){
              $(".slide_show > i.prev").hide();
          });
      });

      $(".grid .item:last-child img").on("click", function(){
          $(".slide_show > i.prev").show();
          $('.grid').find('.item:last-child.current').each(function(){
              $(".slide_show > i.next").hide();
          });
      });


      var totalLi = $(".grid .item").length;
      //console.log("totalLi = " + totalLi);
      $(".slide_show .total_current .total").text(totalLi);
      $(".grid .item img, .slide_show > i.prev, .slide_show > i.next").on("click", function () {
          var index = $(".grid .item.current").index() + 1;
          //console.log("index = " + index);
          $(".slide_show .total_current .current").text(index);
      });