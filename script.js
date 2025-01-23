// body フェードイン
jQuery("body").fadeIn(1000);

// 各セクション表示

jQuery(function(){
  jQuery(".profile").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});

jQuery(function(){
  jQuery(".career").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});

jQuery(function(){
  jQuery(".career-sp").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});

