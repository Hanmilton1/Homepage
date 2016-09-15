$(function(){
    //var height=$(window).height();
    //$(".topimg").css("height",height);
    //$(".font").css("top",height*0.3)
    //$(".main").css("top",height);
    $(".Tobottom").click(function(){
        var height=$(window).height();
        $("body").animate({
            scrollTop: height
        },1000);
    });
    var obj={"pingguo":"Apple 凭借 iPhone、iPad、Mac、Apple Watch、iOS、OS X、watchOS 等产品引领了全球创新。你可以访问网站,了解和购买产品,并获得技术支持。","tianmao":"天猫 - 中国线上购物的地标网站，亚洲超大的综合性购物平台，2000品类，70000个品牌，正品保障，全新一站式购物体验。涵盖服饰鞋包，美妆护肤，家电数码，时尚大牌，母婴玩具，家具建材等品类，提供优质的品牌商品和服务,为消费者带来全方位的生活时尚！",
        "xiaomi":"小米商城以“为发烧而生”的极致精神，致力于让全球每个人，都能享用来自中国的优质科技产品。全系小米手机热销中！","github":"github是使用git的方式管理源代码的社交网站，在这里你可以关注你所关注的项目开发进度，哪个项目你有兴趣，你都可以fork这个项目来获取此项目的最新动态,也可以对项目提交自己的改动。"}
    $(window).resize(function(){
        var height=$(window).height();
        $(".topimg").css("height",height);
        $(".font").css("top",height*0.3)
        $(".main").css("top",height);
        clientW=$(window).width();
        var height1=0.8*clientW*768/1366;
        var height2=0.46*clientW;
        $(".station").height(height2);
        var son3=$(".son3").width();
        //var bw1="0 "+0.25*son3+"px "+0.43*son3+"px "+0.25*son3+"px";
        //var bw2=0.43*son3+"px "+0.25*son3+"px "+"0 "+0.25*son3+"px";
        //$('header').append("<style>.six:before{ border-width:"+bw1+"}</style>");
        //$('header').append("<style>.six:after{ border-width:"+bw2+"}</style>");
        //$(".son3").css({height:son3+"px"});
        $(".site").css({height:height1+"px"});
        $(".sites").css({width:0.8*clientW*4+"px"});
        if(clientW<960){
            $(".nav2").show();
            $(".nav1").hide();
        }else{
            $(".nav1").show();
            $(".nav2").hide();
        }
        lunbo();
    })
    $(window).resize();
    $(window).scroll(function(){
        if($(window).scrollTop()>$(".topimg").height()){
            $("header").css({position:"fixed"});
        }else{
            $("header").css({position:"relative"});
        }
    })
    var flag=true;
    $(".jump li").click(function(){
        var index=$(this).index(".jump li");
        if($(this).parent().attr("view")=="xiao"){
            index-=6;
        }
        if($(window).scrollTop()<=$(".topimg").height()){
            var top=$("section").eq(index).offset().top-140;
        }else{
            var top=$("section").eq(index).offset().top-70;
        }

        $("body").animate({
            scrollTop: top
        },1000);
    });
    $(".navbar").click(function(){
        if(flag){
            $(".nav-right").slideDown();
            flag=false;
        }else{
            $(".nav-right").slideUp();
            flag=true;
        }
    });
    var arr=[];
    for(var i=0;i<$(".information").length;i++){
        arr.push($(".information").eq(i).html());
    }
    var arr1=["<h3>现居地：上海</h3><h3>任职：前端工程师</h3><h3>薪资：面议</h3>","<h2>兴趣爱好</h2><h3>打篮球，踢足球</h3><h3>看书，听歌，游泳</h3>","<h3>有较强的组织能力、实际动手能力和团体协作精神，可以快速适应环境,并融入其中。</h3>","<h3>了解服务器端基础知识，学习过PHP和nodejs。</h3><h3>可以使用PHPCMS制作中小型企业网站。</h3>"];
    $(".son").hover(function(){
        var index=$(this).index(".son");
        $(".information").eq(index).html(arr[index]);
        setTimeout(function(){
            $(".information").eq(index).html(arr1[index]);
            $(".information").eq(index).css({transform:"rotateY(-180deg)",background:"#2f3238",color:"white"});
        },500);
    },function(){
        $(".information").eq(index).html(arr1[index]);
        var index=$(this).index(".son");
        setTimeout(function(){
            $(".information").eq(index).html(arr[index]);
            $(".information").eq(index).css({transform:"rotateY(0deg)",background:"transparent",color:"black"});
        },500)
    })
    $(".sun1").hover(function(){
        $(this).find("img").finish();
        $(this).find(".show").finish();
        $(this).find("img").animate({top:"-50px"},500);
        $(this).find(".show").animate({top:"-53px"},500);
    },function(){
        $(this).find("img").animate({top:0},500);
        $(this).find(".show").animate({top:"-3px"},500);
    })
    $(".find").click(function(){
        var index=$(this).index(".find");
        if(index==0){
            $(".pre").hide();
        }else if(index==5){
            $(".next").hide();
        }else{
            $(".pre").show();
            $(".next").show();
        }
        var src=$(".sun1 img").eq(index).attr("src");
        var width=$(window).width()*0.5;
        var height=width*768/1024;
        $(".bigMask").show().animate({height:"100%",width:"100%"},"fast");
        $(".show-picture").show().animate({height:height+"px"},700).animate({width:width+"px"},700,function(){
            $(this).append("<img src='"+src+"'>");
        })
        $(".close").click(function(){
            $(".bigMask").hide().css({width:"300px",height:"200px"})
            $(".show-picture").css({width:"300px",height:"200px"});
            $(".show-picture").find("img").remove();
            $(".show-picture").hide();
        })
        $(".pre").click(function(){
            index--;
            if(index==0){
                $(".pre").hide();
                $(".show-picture").find("img").animate({left:-1*width+"px"},500,function(){
                    $(this).remove();
                    src=$(".sun1 img").eq(index).attr("src");
                    $(".show-picture").append("<img src='"+src+"'>");
                })
            }else{
                $(".next").show();
                $(".show-picture").find("img").animate({left:-1*width+"px"},500,function(){
                    $(this).remove();
                    src=$(".sun1 img").eq(index).attr("src");
                    $(".show-picture").append("<img src='"+src+"'>");
                })
            }
        })
        $(".next").click(function(){
            index++;
            if(index==5){
                $(".next").hide();
                $(".show-picture").find("img").animate({left:width+"px"},500,function(){
                    $(this).remove();
                    src=$(".sun1 img").eq(index).attr("src");
                    $(".show-picture").append("<img src='"+src+"'>");
                });
            }else{
                $(".pre").show();
                $(".show-picture").find("img").animate({left:width+"px"},500,function(){
                    $(this).remove();
                    src=$(".sun1 img").eq(index).attr("src");
                    $(".show-picture").append("<img src='"+src+"'>");
                });
            }
        })
    })
    var kaiguan=false;
    function lunbo(){
        if(kaiguan){
            $(".sites").css({marginLeft:0});
            $(".son2:first").appendTo(".sites");
        }
        var left=$(window).width()*0.8;
        $(".sites").animate({marginLeft:-1*left+"px"},"slow");
        kaiguan=true;
    }
    var t=setInterval(lunbo,3000);
    var pipei="pipei";
    $(".mask").hover(function(){
        $(this).finish();
        $(".mask").fadeTo("slow",0.8);
        clearInterval(t);
        $(".clickme").hover(function(){
            //console.log(1);
            var src=$(".son2:eq(1) img").attr("src");
            //console.log(src);
            for(var name in obj){
                if(src.indexOf(name)!=-1){
                    //console.log(name);
                    var href=$(this).find("a").attr("href");
                    var reg=new RegExp(pipei,"g");
                    var newstr=href.replace(reg,name);
                    console.log(newstr);
                    $(this).find("a").attr("href",newstr);
                    $(".info").html(obj[name]);
                    pipei=name;
                }
            }
            $(".info").slideDown();
        },function(){
            $(".info").slideUp();
        })
    },function(){
        $(".mask").fadeTo("slow",0);
        t=setInterval(lunbo,3000);
    })
    $(".overlay").hover(function(){
        $(".overlay a").finish();
        var that=this;
        setTimeout(function(){
            $(that).find("a").fadeToggle();
        },700)
    },function(){
        $(".overlay a").finish();
        var that=this;
        setTimeout(function(){
            $(that).find("a").fadeToggle();
        },700)
    })
    function clearstyle(){
        $(".tab li").css({color:"white",backgroundColor:"#00388E"});
    };
    var index1;
    $(".station").hover(function(){
        $(".tab").finish();
        $(this).find(".tab").slideDown();
        $(this).find("a").fadeIn();
    },function(){
        clearstyle();
        clearstyle1();
        $(".tab").finish();
        $(this).find("a").fadeOut();
        $(this).find(".tab").slideUp();
        $(".maskleft").animate({left:"-600px"},500);
        $(".maskright").animate({right:"-600px"},500);
        $(".package").fadeOut();
    })
    $(".tab li").click(function(){
        $(".station a").fadeOut();
        $(".mask3").show();
        clearstyle();
        clearstyle1();
        index1=$(this).index(".tab li");
        $(this).css({color:"#6CB670",backgroundColor:"#2f3238"})
        $(".package").html("");
        $(".maskleft").animate({left:0},500);
        $(".maskright").animate({right:0},500,function(){
            $(".package").fadeIn();
        });
        setTimeout(function(){
            $(".package").html("open");
        },3000);
    });
    function clearstyle1(){
        $(".tabinfo.left").animate({width:0});
        $(".tabinfo.top").animate({height:0});
        $(".tabinfo.right").animate({width:0});
    }
    $(".package").click(function(){
        $(this).fadeOut(500,function(){
            $(".maskleft").animate({left:"-600px"},500);
            $(".maskright").animate({right:"-600px"},500);

        });
        setTimeout(function(){
            $(".mask3").hide();
            //alert(index1);
            if(index1==0){
                $(".tabinfo.left").animate({width:"100%"},500);
            }else if(index1==1){
                $(".tabinfo.top").animate({height:"100%"},500);
            }else if(index1==2){
                $(".tabinfo.right").animate({width:"100%"},500);
            }
        },1000)
    });

})