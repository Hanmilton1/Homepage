window.onload=function(){
    var items=document.getElementsByClassName('item');
    var pictures=document.getElementsByClassName('picture');
    var previous=document.getElementById('previous');
    var next=document.getElementById('next');

    var banner=pictures[0];
    banner.style.display='block';
    var tag=items[0];
    tag.style.background='#ccc';
    var index=0,kaiguan=true,click;
    var fn=function(){
        if(kaiguan){
            if(index==4){
                index=-1;
            }
            index++;
        }else{
            if(index==0){
                index=5;
            }
            index--;
        }       
        banner.style.display='none';
        if(!tag.hasAttribute('hasmouse')){
            tag.style.background='#222';
        }
        
        items[index].style.background='#ccc';
        pictures[index].style.display='block';     
        banner=pictures[index];
        tag=items[index];       
        if(kaiguan==false&&index==0){index=5};  
        if(kaiguan==true&&index==4){index=-1};
        kaiguan=true;
    };
    previous.onclick=function(){       
        kaiguan=false;
        clearInterval(timerId);       
        fn(); 
        click=true;
    }
    next.onclick=function(){  
        clearInterval(timerId); 
        fn();
        click=true; 
    }

    var timerId=setInterval(fn,3000);
    for(var i=0;i<5;i++){
        items[i].index=i;
        pictures[i].index=i;
        pictures[i].onmouseover=function(){
            clearInterval(timerId);
        };
        pictures[i].onmouseout=function(){
            if(items[this.index].hasAttribute('hasclick')){
                items[this.index].removeAttribute('hasclick');
                return;
            };
            if(!click){
                timerId=setInterval(fn,3000);
            }           
        }
        items[i].onmouseover=function(){         
            this.setAttribute('hasmouse',true);
            this.style.background='#ccc';
        }
        items[i].onmouseout=function(){   
            this.removeAttribute('hasmouse');         
            if(this.hasAttribute('hasclick')){
                return;
            };
            this.style.background='#222';
        }
        items[i].onclick=function(){ 
            click=true;           
            clearInterval(timerId);
            this.setAttribute('hasclick',true);
            banner.style.display='none';
            pictures[this.index].style.display='block';
            tag.style.background='#222';
            this.style.background='#ccc';
            
            banner=pictures[this.index];
            tag=this;           
            index=this.index;
        }
    }














}
