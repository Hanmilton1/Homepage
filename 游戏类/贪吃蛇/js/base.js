window.onload=function(){
    var she=document.getElementsByClassName("bg")[0];
    var sence1=document.createElement('div');
    sence1.setAttribute('id','sence1');
    she.appendChild(sence1);

    var select=document.createElement('select');

    var over=document.createElement('div');
    sence1.appendChild(over);
    over.style.position='absolute';
    over.style.top='0';
    over.style.right='0';
    over.style.width='600px';
    over.style.height='600px';
    over.innerHTML='GAME OVER';
    over.style.textAlign='center';
    over.style.lineHeight='600px';
    over.style.color='red';
    over.style.fontSize='6em';
    over.style.display='none';
    over.style.fontWeight='bolder';

    var kaiguan1=true;
    var start1=document.createElement('div');
    sence1.appendChild(start1);
    start1.setAttribute('id','start1');
    start1.style.position='absolute';
    start1.style.top='150px';
    start1.style.right='-200px';
    start1.style.width='100px';
    start1.style.height='50px';
    start1.style.background='green';
    start1.style.borderRadius='50%/20%';
    start1.innerHTML='开始游戏';
    start1.style.textAlign='center';
    start1.style.lineHeight='50px';
    start1.style.color='white';
    start1.style.cursor='pointer';
    start1.style.fontWeight='bolder';

    var end1=document.createElement('div');
    end1.setAttribute('id','end1');
    sence1.appendChild(end1);
    end1.style.position='absolute';
    end1.style.top='250px';
    end1.style.right='-200px';
    end1.style.width='100px';
    end1.style.height='50px';
    end1.style.background='red';
    end1.style.borderRadius='50%/20%';
    end1.innerHTML='结束游戏';
    end1.style.textAlign='center';
    end1.style.lineHeight='50px';
    end1.style.color='white';
    end1.style.cursor='pointer';
    end1.style.fontWeight='bolder';
    var sheTime=200;
    start1.onclick=function(){
        if(over.style.display=='block'){return};
        if(kaiguan1){
            start1.style.background='yellow';
            t=setInterval(zou,sheTime);
            kaiguan1=false;
            start1.innerHTML='暂停游戏';
        }else{
            start1.style.background='green';
            clearInterval(t);
            start1.innerHTML='继续游戏';
            kaiguan1=true;
        }
    }
    end1.onclick=function(){
        snake=[];
        clearInterval(t);
        location.reload();
    }
    sence1.style.transform='scale(0.9)';
    var ROW = 30;
    for(var i=0;i<ROW;i++){
        for(var j=0;j<ROW;j++){
            block=document.createElement('div');
            sence1.appendChild(block);
            block.setAttribute('class','block');
            block.style.width=600/ROW-1+'px';
            block.style.height=600/ROW-1+'px';
            block.style.borderRadius='50%';
            block.style.margin='0 1px 1px 0';
            block.style.float='left';
            block.setAttribute('id',i+'_'+j);
        }
    };
    var
        snake = [ {x:0,y:0}, {x:0,y:1}, {x:0,y:2} ],
        MAXSNAKE = 100,RIGHT = 39,LEFT = 37,UP = 38, DOWN = 40,
        SNAKECOLOR='green',FOODCOLOR='red',
    // DEFAULTCOLOR = '#4AB4DA',
        defaultDirection = RIGHT,
        isInSnake = function(x,y){
            for ( var i = 0;  i < snake.length;  i++){
                if(  snake[i].x == x && snake[i].y == y){
                    return true;
                }
            }
            return false;
        },
        random = function(){
            return Math.floor( Math.random()*ROW );
        },
        $ = function(id){
            return document.getElementById(id);
        },
        join =function(f,s){
            return f + '_' + s;
        },
        dropFood  = function(){
            var
                x = random(), y = random();
            if( snake.length == MAXSNAKE ){return null;}
            while( isInSnake(x,y) ){
                x = random();
                y = random();
            }
            $( join(x,y) ).style.background = FOODCOLOR;
            return {x:x,y:y};
        },
        food = dropFood(),
        zou = function(dir){
            if(dir){clearInterval(t)};
            var last  = snake.length -1,newHead,weiba;
            if( defaultDirection== RIGHT ){newHead = {x:snake[last].x, y:snake[last].y+1};}
            if( defaultDirection== LEFT  ){newHead = {x:snake[last].x, y:snake[last].y-1};}
            if( defaultDirection== DOWN  ){newHead = {x:snake[last].x+1, y:snake[last].y};}
            if( defaultDirection== UP    ){newHead = {x:snake[last].x-1, y:snake[last].y};}
            if( newHead.x >ROW-1 || newHead.x <0 || newHead.y>ROW-1 || newHead.y <0){
                over.style.display='block';
                clearInterval(t);
                return null;
            }
            if( isInSnake(newHead.x,newHead.y) ){
                over.style.display='block';
                clearInterval(t);
                return null;
            }
            snake.push(newHead);
            if(newHead.x == food.x && newHead.y == food.y){
                $( join( food.x,food.y) ).style.background = SNAKECOLOR;
                food = dropFood(); return null;
            }

            weiba = snake.shift();
            $( join( weiba.x , weiba.y) ) .style.background  = '#4AB4DA';
            $( join( newHead.x , newHead.y) ).style.background = SNAKECOLOR;
            return null;


        };

    (function(){
        for ( var i = 0;  i < snake.length;  i++){
            $(join(snake[i].x ,snake[i].y)).style.background = SNAKECOLOR;
        }
    })();
    document.onkeydown = function(e){
        var direction = e.keyCode;
        if( ( direction==LEFT ||
                direction==UP   ||
                direction==RIGHT||
                direction==DOWN
            ) &&
            Math.abs( direction - defaultDirection) !== 2 ){
            defaultDirection=direction;
            if(over.style.display!='block'){
                zou(direction);
                t=setInterval(zou,sheTime);
            }
        }
    };

}
