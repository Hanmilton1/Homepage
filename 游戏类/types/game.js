function game(){
	this.letterArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];//字母
	this.heartArr=["img/heart1.png","img/heart2.png","img/heart3.png","img/heart4.png","img/heart5.png","img/heart6.png","img/heart7.png","img/heart8.png","img/heart9.png",]//生命值图片(0~10)
	this.letterLength=4;//同时下落的个数(游戏难度)
	this.speed=5;//下落速度
	this.score=0;//分数
	this.die=10;//死掉的次数
	this.step=1;//关卡数
	this.stepNum=10;//定义过关满足的分数
	this.randArr=[];//存放当前屏幕上有的字母
	this.span=[]//存放span
	this.width=document.documentElement.clientWidth;//游戏尺寸(浏览器宽度)
	this.height=document.documentElement.clientHeight;//游戏尺寸(浏览器高度)
	this.jiaodu=[30,60,90,120,150,180,210,240,270,300,330,360];
	window.that=this;//全局指针
}
game.prototype={
	play:function(){
		this.createEle(this.letterLength);
		this.move();
		this.key();
	},
	key:function(){
		var that=this;
		var nowScore=0;
		document.onkeydown=function(e){
			var ev=e||window.event;
			var l=String.fromCharCode(ev.keyCode);
			for (var i = 0; i < that.span.length; i++) {
				if(l==that.span[i].innerHTML){					
					animate(that.span[i],{opacity:0},200,function(){
						this.style.display="none";
					})					
					that.span.splice(i,1);
					that.randArr.splice(i,1);
					that.createEle(1);
					var score=document.getElementsByClassName('message')[0].getElementsByTagName('span')[0];
					score.innerHTML=++that.score;
					nowScore++;
					if(nowScore%that.stepNum==0){
						nowScore=0;
						that.again();
					}
					break;
				}
			};
		}
	},
	again:function(){
		var step=document.getElementsByClassName('message')[0].getElementsByTagName('span')[2];
		step.innerHTML=++that.step;
		clearInterval(that.t);
		for (var i = 0; i < that.span.length; i++) {
			that.span[i].style.display="none";
		};
		that.span.splice(0,that.span.length);
		that.randArr.splice(0,that.randArr.length);
		that.letterLength++;
		that.speed++;
		that.stepNum+=5;
		if(that.letterLength>10){
			that.letterLength=10;
		}
		if(that.speed>10){
			that.speed=10;
		}
		var success=document.getElementsByClassName('next')[0];
		var nowstep=document.getElementById("step");
		var difficult=document.getElementById("difficult");
		nowstep.innerHTML=that.step;
		difficult.innerHTML=that.speed;
		success.style.display="block";
		animate(success,{opacity:1},2000);
		that.createEle(that.letterLength);
		clearInterval(that.t);
		var go=document.getElementById('go');
		var close=document.getElementsByClassName("close")[0];
		go.onclick=function(){
			success.style.display="none";
			success.style.opacity=0;
			that.move();
		}
		close.onclick=function(){
			success.style.display="none";
			success.style.opacity=0;
			that.move();
		}
		
		//that.t=setInterval(that.move2,60);
	},
	move:function(){
		var that=this;
		that.t=setInterval(that.move2,60);
	},
	move2:function(){
		for (var i = 0; i < that.span.length; i++) {
			var tops=that.span[i].offsetTop+that.speed;
			that.span[i].style.top=tops+"px";
			if(tops>that.height){
				that.span[i].style.display="none";
				that.span.splice(i,1);
				that.randArr.splice(i,1);
				that.createEle(1);
				var die=document.getElementsByClassName('message')[0].getElementsByTagName('span')[1];
				die.innerHTML=--that.die;
				if(that.die==0){
					var fail=document.getElementsByClassName("fail")[0];
					var score=document.getElementById("score");
					var again=document.getElementById("again");
					var back=document.getElementsByClassName("back")[0];
					score.innerHTML=that.score;
					fail.style.display="block";
					animate(fail,{opacity:1},1500);
					clearInterval(that.t);
					//alert("游戏结束! 您的得分为:"+that.score+"分!");
					again.onclick=function(){
						location.reload([]);//页面重载
					}
					back.onclick=function(){
						location.reload([]);//页面重载
					}
				}
				break;
			}
		};
	},
	createEle:function(num){
		var arr=this.rand(num);
		for (var i = 0; i < arr.length; i++) {
			var span=document.createElement("span");
			span.style.cssText="position:absolute;height:80px;width:80px;font-size:30px;font-family:Arial;color:rgba(255,255,255,0);top:"+(-300*Math.random()-85)+"px;left:"+(50+Math.random()*(this.width-200))+"px;background: url(img/"+arr[i]+".png) no-repeat center center;background-size:80px 80px;transform:rotate("+this.jiaodu[Math.floor(Math.random()*this.jiaodu.length)]+"deg)";
			span.innerHTML=arr[i];
			document.body.appendChild(span);
			this.span.push(span);
		};
	},
	rand:function(num){//随机取数不重复
		var arr=[];//创建时使用一次,之后不再使用
		for (var i = 0; i < num; i++) {
			var randNum=Math.floor(this.letterArr.length*Math.random());
			while(this.randCheck(this.letterArr[randNum],this.randArr)){
				randNum=Math.floor(this.letterArr.length*Math.random());
			}
			arr.push(this.letterArr[randNum]);
			this.randArr.push(this.letterArr[randNum]);
		};
		return arr;
	},
	randCheck:function(val,arr){
		for (var i = 0; i < arr.length; i++) {
			if(arr[i]==val){
				return true;
			}
		};
		return false;
	}
}
