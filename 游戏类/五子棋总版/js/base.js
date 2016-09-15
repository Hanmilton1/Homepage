window.onload=function(){
    var changjing=document.getElementById('sence');
    var ROW=20;	var count=0,count2,count3=0;
    var huiqikaiguan=true;

    var shengli=document.createElement('div');
    changjing.appendChild(shengli);
    shengli.style.position='absolute';
    shengli.style.top='20px';
    shengli.style.display='none';
    shengli.style.right='190px';
    shengli.style.width='300px';
    shengli.style.height='120px';
    // shengli.style.background='black';
    shengli.style.textAlign='center';
    shengli.style.lineHeight='120px';
    shengli.style.fontSize='4em';
    shengli.style.zIndex='999';
    shengli.style.color='white';
    shengli.style.cursor='pointer';
    shengli.style.fontWeight='bolder';

    var huiqi=document.createElement('div');
    changjing.appendChild(huiqi);
    huiqi.style.position='absolute';
    huiqi.style.bottom='150px';
    huiqi.style.left='-200px';
    huiqi.style.width='100px';
    huiqi.style.height='50px';
    huiqi.style.background="green";
    huiqi.style.borderRadius='50%/20%';
    huiqi.innerHTML='我要悔棋';
    huiqi.style.textAlign='center';
    huiqi.style.lineHeight='50px';
    huiqi.style.color='white';
    huiqi.style.cursor='pointer';
    huiqi.style.fontWeight='bolder';

    var repeat=document.createElement('div');
    changjing.appendChild(repeat);
    repeat.style.position='absolute';
    repeat.style.bottom='150px';
    repeat.style.right='-200px';
    repeat.style.width='100px';
    repeat.style.height='50px';
    repeat.style.background="red";
    repeat.style.borderRadius='50%/20%';
    repeat.innerHTML='重新开始';
    repeat.style.textAlign='center';
    repeat.style.lineHeight='50px';
    repeat.style.color='white';
    repeat.style.cursor='pointer';
    repeat.style.fontWeight='bolder';
    huiqi.onclick=function(){
        if(!count){return};
        if(!huiqikaiguan){
            return;
        }
        if(shengli.style.display=='block'){
            return;
        }
        var el=document.getElementById(count2);
        el.removeAttribute('hasColor');
        el.removeAttribute('index');
        el.style.background='none';
        el.style.boxShadow='none';
        count3--;
        if(count==1){
            kaiguan=true;
            delete dict1[count2];
        }else{
            kaiguan=false;
            delete dict2[count2];
        }
        huiqikaiguan=false;
    }
    repeat.onclick=function(){
        location.reload();
    }
    for(var i=0;i<=ROW;i++){
        hengxian=document.createElement('div');
        hengxian.style.width='600px';
        hengxian.style.height='2px';
        hengxian.style.background='black';
        hengxian.style.position='absolute';
        hengxian.style.top=25+600/ROW*i+'px';
        hengxian.style.left='25px';
        changjing.appendChild(hengxian);
        shuxian=document.createElement('div');
        shuxian.style.width='2px';
        shuxian.style.height='600px';
        shuxian.style.background='black';
        shuxian.style.position='absolute';
        shuxian.style.left=25+600/ROW*i+'px';
        shuxian.style.top='25px';
        changjing.appendChild(shuxian);
    }
    for(var i=0;i<ROW-1;i++){
        for(var j=0;j<ROW-1;j++){
            qizi=document.createElement('div');
            qizi.style.width=600/ROW+'px';
            qizi.style.height=600/ROW+'px';
            qizi.style.borderRadius='50%';
            qizi.style.position='absolute';
            qizi.style.transform='scale(0.8,0.8)';
            qizi.style.top=40+600/ROW*i+'px';
            qizi.style.left=40+600/ROW*j+'px';
            qizi.setAttribute('id',i+'#'+j);
            qizi.setAttribute('class','qizi')
            changjing.appendChild(qizi);
        }
    }
    var panduan=function(id,dic){
        var
            x=Number( id.split('#')[0] ),
            y=Number( id.split('#')[1] );

        var heng=1;
        Cx=x;Cy=y;
        while(dic[Cx+'#'+(Cy+1)]){heng++;Cy++};
        Cx=x;Cy=y;
        while(dic[Cx+'#'+(Cy-1)]){heng++;Cy--};
        if(heng>=5){return true;}

        var shu=1;
        Cx=x;Cy=y;
        while(dic[Cx+1+'#'+Cy]){shu++;Cx++};
        Cx=x;Cy=y;
        while(dic[Cx-1+'#'+Cy]){shu++;Cx--};
        if(shu>=5){return true;}

        var pie=1;
        Cx=x;Cy=y;
        while(dic[Cx+1+'#'+(Cy+1)]){pie++;Cx++;Cy++};
        Cx=x;Cy=y;
        while(dic[Cx-1+'#'+(Cy-1)]){pie++;Cx--;Cy--};
        if(pie>=5){return true;}

        var na=1;
        Cx=x;Cy=y;
        while(dic[Cx-1+'#'+(Cy+1)]){na++;Cx--;Cy++};
        Cx=x;Cy=y;
        while(dic[Cx+1+'#'+(Cy-1)]){na++;Cx++;Cy--};
        if(na>=5){return true;}

        return false;
    }
    var qizis=document.getElementsByClassName('qizi');
    var dict1={},dict2={};
    var kaiguan=true;

    var bb=function(){
        for(var i=0;i<Math.pow(ROW-1,2);i++){
            qizis[i].setAttribute('hasColor',true);
        }

    }
    var cc=function(){
        for(var aa in dict1){
            var el=document.getElementById(aa);
            el.style.color='black';
            el.style.textAlign='center';
            el.style.fontSize='20px';
            el.style.fontWeight='bolder';
            el.style.lineHeight='40px';
            el.innerHTML=el.getAttribute('index');
        }
        for(var aa in dict2){
            var el=document.getElementById(aa);
            el.style.color='white';
            el.style.textAlign='center';
            el.style.fontSize='20px';
            el.style.fontWeight='bolder';
            el.style.lineHeight='40px';
            el.innerHTML=el.getAttribute('index');
        }
    }
    for(var i=0;i<Math.pow(ROW-1,2);i++){
        qizis[i].onclick=function(){
            Id=this.getAttribute('id');
            if(this.hasAttribute('hasColor')){return;}
            this.style.boxShadow='0 0 15px black';
            count2=Id;
            if(kaiguan){
                count3++;
                count=1;
                this.setAttribute('index',count3);
                this.style.background='white';
                kaiguan=false;
                dict1[Id]=true;
                if( panduan(Id,dict1) ){
                    shengli.style.display='block';
                    shengli.innerHTML='白棋胜利';
                    bb();
                    cc();
                }
            }else{
                count3++;
                count=2;
                this.setAttribute('index',count3);
                this.style.background='black';
                kaiguan=true;
                dict2[Id]=true;
                if( panduan(Id,dict2) ){
                    shengli.style.display='block';
                    shengli.innerHTML='黑棋胜利';
                    bb();
                    cc();
                }
            }
            this.setAttribute('hasColor',true);
            huiqikaiguan=true;
        }
    }




}