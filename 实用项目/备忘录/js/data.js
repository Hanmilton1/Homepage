
$(function(){
    $(document).on("mousedown",function(e){
        var obj= e.target;
        var ox= e.offsetX;
        var oy= e.offsetY;
        $(document).on("mousemove",function(e){
            var px= e.pageX;
            var py= e.pageY;
            $(obj).trigger("drag",{left:px-ox,top:py-oy})
        })
        $(document).on("mouseup",function(){
            $(document).off("mouseup");
            $(document).off("mousemove");

        })
    })
//    输入框的动画
    var add=$(".add");
    var form=$("form");
    var formClose=$(".formClose")
    var flag=true;
    add.click(function(){
        if(flag){
            flag=false;
            form.finish();
            form.attr("data-a","animate-down").css("display","block");

        }else{
            form.finish();
            form.attr("data-a","animate-up");
            flag=true;
        }
    });
    formClose.click(function(){
        form.finish();
        form.attr("data-a","animate-up");
        flag=true;
    })
//    表单的验证
    $(".submitbtn").click(function(){
        var textv=form.find(":text").val();
        var conv=form.find("textarea").val();
        var timev=form.find("#time").val();

        if(textv==""){
            alert("标题不能为空");
            return;
        }
        if(conv==""){
            alert("内容不能为空");
            return;
        }
        if(timev==""){
            alert("时间必选");
            return;
        }

        //存储信息
        var oldv=localStorage.message==null?[]:JSON.parse(localStorage.message);
        var obj={title:textv,con:conv,time:timev,id:new Date().getTime()};
        oldv.push(obj);
        var str=JSON.stringify(oldv)
        localStorage.message=str;

        form.find(":text").val("");
        form.find("textarea").val("");
        form.find("#time").val("");

        //    显示信息
        var copy=$(".con:first").clone().appendTo("body").css({
            left:($(window).width()-$(".con").outerWidth())*Math.random(),
            top:($(window).height()-$(".con").outerHeight())*Math.random(),
            display:"block"
        }).attr("data-a","animate-sd").attr("id",obj.id);

        copy.find(".title-con").html(textv);
        copy.find(".con-con").html(conv);
        copy.find(".time-con").html(timev);

    })
    //显示已保存内容
    var message=localStorage.message==null?[]:JSON.parse(localStorage.message);
    for(var i=0;i<message.length;i++){
        copy=$(".con:first").clone().appendTo("body").css({
            left:($(window).width()-$(".con").outerWidth())*Math.random(),
            top:($(window).height()-$(".con").outerHeight())*Math.random(),
            display:"block"
        }).attr("id",message[i].id);
        copy.find(".title-con").html(message[i].title);
        copy.find(".con-con").html(message[i].con);
        copy.find(".time-con").html(message[i].time);
    }
    //拖拽事件
    $(document).delegate(".con","drag",function(e,data){
        $(this).css({
            left:data.left,
            top:data.top
        })
    })
    $(document).delegate(".con","mousedown",function(e) {
        $(".con").css({
            zIndex: 0
        })
        $(this).css({
            zIndex: 1
        })
        e.preventDefault();
    })



    $(document).delegate(".btn-close","click",function(){
        var id=$(this).parent().attr("id");
        var arr=JSON.parse(localStorage.message);
        for(var i=0;i<arr.length;i++){
            if(arr[i].id==id){
                arr.splice(i,1);
                localStorage.message=JSON.stringify(arr);
                break;
            }
        }
        $(this).parent().remove();
    })
})