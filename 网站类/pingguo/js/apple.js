$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");

        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");

        }
        if(clientW<765){
            $(".footer1").css("display","none");
            $(".footer2").css("display","block");
        }else{
            $(".footer1").css("display","block");
            $(".footer2").css("display","none");
        }

    });
    $(window).resize();
    $(".menubtn").click(function(){
        $(".daohang").finish();
        $(".daohang").slideToggle(300);
    });
    $(".car-img").click(function(){
        $(".car").finish();
        $(".car").slideToggle(300);
    });
    $(".footer-heng").click(function(){
        $(".footer-heng ul").finish();
        $(this).find($(".footer-heng ul")).slideToggle(300);
    });
//    轮播
    var num=0;
    var move=function(){
        num++;
        if(num==$(".banner-img").length-1){
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            });
            num=0;
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
        $(".btn li").css({background:"#888",border:"none"});
        $(".btn li").eq(num).css({background:"none",border:"1px solid blue"});
    };
    var timerId=setInterval(move,2000);
    //点击
    $(".btn li").click(function(){
        clearInterval(timerId);
        var index=$(this).index();
        num=index;
        $(".btn li").css({background:"#888",border:"none"});
        $(this).css({background:"none",border:"1px solid blue"});
        $(".box").animate({marginLeft:-num*100+"%"});
    });
    $(".banner").hover(function(){
        clearInterval(timerId);
    },function(){
        timerId=setInterval(move,2000);
    });

    //touch事件
//    touch.config({holdTime:200});
//    touch.on(document,"hold",function(){
//        alert(1);
//    });
    ///////////////////////////////////
    var margin;
    touch.on(".box","dragstart",function(){
        margin=$(".box")[0].offsetLeft; //相对 有定位属性的父元素的  的距离
        console.log(margin);
    });
    touch.on(".box","drag",function(e){
        $(".box").css("margin-left", margin+e.x);
    });
    touch.on(".box","dragend",function(e){
        //console.log(Math.abs(e.x));
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=="left"){
                num++;
                if(num==$(".banner-img").length-1){
                    $(".box").animate({marginLeft:-num*100+"%"},function(){
                        $(".box").css({marginLeft:0});
                    });
                    num=0;
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    $(".box").animate({marginLeft:-num*100+"%"});
                    return ;
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
            }
            $(".btn li").css({background:"#888",border:"none"});
            $(".btn li").eq(num).css({background:"none",border:"1px solid blue"});
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
    });


    $(".box").mousedown(function(e){
        e.preventDefault();
    });
//--------------------------------------------------------------
//    旋转
    touch.on(".rotate","touchstart",function(e){
        e.startRotate();
        e.preventDefault();
    });
    touch.on(".rotate","rotate",function(e){
        $(".rotate").css("transform","rotate("+ e.rotation+"deg)");
    });
//    滑动
    touch.on(".swipe","touchstart",function(e){
        e.preventDefault();
    });
    touch.on(".swipe","swiperight",function(e){
        $(".swipe").css( "transform","translate3d("+200+"px,0,0)" );
    });
    touch.on(".swipe","swipeleft",function(e){
        $(".swipe").css( "transform","translate3d("+-200+"px,0,0)" );
    });






});
