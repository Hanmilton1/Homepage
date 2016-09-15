$(function(){
  var bgcolor=["#b70bf5","#76eec8","#f3edf1","#e2e2e2","#dadada","#dbdbdb"];
  var bgcolor2=["#d40c54","#fe4157","#e8e8e8","#f1345e","#7909ab","#6fdbdd","#d8ede6","#253be7","#ffb700","#ff507b","#f63a3b","#ed0445","#cdffa4","#328de0","#ff489b"];
  // 处理头部选项卡
  $('.yiji').hover(function(){
    $(this).find('.erji').show();
  },function(){
    $(this).find('.erji').hide();
  });
  //大轮播处理 
  var index = 0;
  var lunbo  =  function(){
    $('.ba').hide();
    var el = $('.ba')[index];
    $(el).show();
    $('.daos').css('background',function(){
      return bgcolor[index];
    });
    $('.zhishi-item').removeClass('red');
    $($('.zhishi-item')[index]).addClass('red');
    index += 1;
    if( index === $('.ba').length ){
      index = 0;
    }
  }
  var t=setInterval(lunbo,1000);
  $('.zhishi-item').hover(function(){
    clearInterval(t);
    var i=$(this).index('.zhishi-item');
    index=i;
    lunbo();
  },function(){
    t=setInterval(lunbo,1000);
  })

  // ------------大轮播选项卡处理----------
  $('.lunjiaxuan').hover(function(){
    var i=$(this).index('.lunjiaxuan');
    $(this).find('.xia').show();
    if(!i){return};
    clearInterval(t);
    $('.daos').css('background',function(){
      return bgcolor2[i-1];
    });
    $('.daos-bd').show();
    $($('.daos-bds')[i-1]).show();
  },function(){
    var i=$(this).index('.lunjiaxuan');
    $(this).find('.xia').hide();
    if(!i){return};   
    $('.daos').css('background',function(){
      return bgcolor[index-1];
    });
    $('.daos-bd').hide();
    $($('.daos-bds')[i-1]).hide();
    t=setInterval(lunbo,1000);
  })

  //处理桃心 
  $('.divs').hover(function(){
    $(this).find('.tao').show();
  },function(){
    $(this).find('.tao').hide();
  })
  //处理楼层 
  $('.zfd-a').each(function(i){
    $(this).data('index',i);
  });
  $('.zfd-a').click(function(){
    bb=[1,2,3];
    var i = $(this).data('index');
    var newtop = $( $('.tia')[i] ).offset().top - 210;
    $({top: $(window).scrollTop()}).animate(
      {top: newtop},
      {
        duration: 700,
        step: function() {
          $(window).scrollTop(this.top);
        }
      }
    );
  });

  // 头部和侧边导航条显示

  var arr=[1087, 1537, 1987, 2551, 3001, 3451, 4015, 4465, 4915, 5479, 5929, 6379,6831];
  var fn2=function(num){
    for(var i=0;i<13;i++){
      if(num>=arr[i]&&num<=arr[i+1]){
        return i;
      }
    }
  }
  var ti;
  $(window).scroll(function(){
    $('.zfd-a').css({background:'none'});
    $($('.zfd-a')[fn2($(window).scrollTop())]).css({background:'#ccc'});
    if($(window).scrollTop() >= 1087&&$(window).scrollTop() <= 6831){
      clearTimeout(ti);
        $('.syd').show();
        $('.zfd').show();

    }else{
      clearTimeout(ti);
      $('.syd').hide();
      $('.zfd').hide();
    };
  });
  
  var kaiguan=false;
  var els=document.getElementsByClassName('da');
    var lunbo1  =  function(){
      if(kaiguan){
        for(var i=0;i<6;i++){
          $($('.da')[i]).css('margin-left',0);
          $($('.da')[i]).find('.xiao:first').clone().appendTo($($('.da')[i]));
          $($('.da')[i]).find('.xiao:first').remove();
        }
      }
      $('.da').animate({marginLeft:-126},1000);
      kaiguan=true;
    } 
    setInterval(lunbo1,1500);


  // --------回到顶部功能---------
  $('.hddb').hover(function(){
    $(this).find('.mao').show();
  },function(){
    $(this).find('.mao').hide();
  })

  $(".hddb").click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
        step: function() {
          $(window).scrollTop(this.top);
        }
      }
    );
  });









});
