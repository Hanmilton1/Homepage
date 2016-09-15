window.onload=function(){
    var clock=document.getElementsByClassName("clock")[0];
    //createMark();
    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var hp=createPointer(45,4,"white",30*h-90+(6*m)/12);
    var mp=createPointer(60,3,"white",6*m-90);
    var sp=createPointer(70,2,"white",6*s-90);

    setInterval(function(){
        var time=new Date();
        var h=time.getHours();
        var m=time.getMinutes();
        var s=time.getSeconds();
        hp.style.transform="translate(100px,"+hp.t+"px) rotate("+(30*h-90+(6*m)/12)+"deg)";
        mp.style.transform="translate(100px,"+mp.t+"px) rotate("+(6*m-90)+"deg)";
        sp.style.transform="translate(100px,"+sp.t+"px) rotate("+(6*s-90)+"deg)";
    },1000)

    //刻度
    function createMark(){
        for(var i=0;i<60;i++){
            var w, h,l;
            if(i%5==0){
                w=4;
                h=10;
            }else{
                w=2;
                h=6;
            }
            l=(200-w)/2;
            var div=document.createElement("div");
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:#000;position:absolute;left:0;top:0";
            div.style.transform="translate("+l+"px,0px) rotate("+i*6+"deg)";
            div.style.transformOrigin="center 100px";
            clock.appendChild(div);
        }
    }

    //指针
    function  createPointer(w,h,c,a){
        var div=document.createElement("div");
        var t=(200-h)/2;
        div.t=t;
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";position:absolute;left:0;top:0;transform:translate(100px,"+t+"px) rotate("+a+"deg);transform-origin:left center";
        clock.appendChild(div);
        return div;
    }

}