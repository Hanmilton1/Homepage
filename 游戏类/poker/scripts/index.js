window.onload=function(){
	var sence=document.getElementById('sence');
	var leftt=document.getElementById('left');
	var poker;
	var fn3=function(){
		for (var i = 0; i < 7; i++) {
			for (var j = 0; j < i+1; j++) {
				poker=document.createElement('div');
				poker.setAttribute('class','poker');		
				sence.appendChild(poker);
				poker.setAttribute('id',i+'_'+j);
				poker.style.top=i*50+'px';
				poker.style.left=60*(6-i)+140*j+'px';
			}
		}
		for (var k = 0; k < 24; k++) {
			poker=document.createElement('div');
			poker.setAttribute('class','poker');		
			sence.appendChild(poker);
			poker.setAttribute('id',i+'-'+i);
			left.appendChild(poker);
		}	
	};
	fn3();
	var previous=null;
	sence.onclick=function(e){
		var el=e.target;
		if (el==this) {return;}
		if (!el.hasAttribute('id')) return;
		var	id=el.getAttribute('id'),
			x=Number( id.split('_')[0] ),
			y=Number( id.split('_')[1] ),
			nx=document.getElementById( (x+1)+'_'+y ),
			ny=document.getElementById( (x+1)+'_'+(y+1) );
		if (nx||ny) return;
		if (previous!==null) {
			previous.style.border='2px solid #2CBED5';
			var d2=previous.innerHTML;
		}
		el.style.border='2px solid red';
		var d1=el.innerHTML;
		if (d1 == 'K') {
			el.parentElement.removeChild(el);
			previous=null;
			return;
		}
		switch(d1){
			case 'A':d1=1;break;
			case 'J':d1=11;break;
			case 'Q':d1=12;break;
			default:d1=Number(d1);
		}
		switch(d2){
			case 'A':d2=1;break;
			case 'J':d2=11;break;
			case 'Q':d2=12;break;
			default:d2=Number(d2);
		}
		if (d1+d2==13) {
			el.parentElement.removeChild(el);
			previous.parentElement.removeChild(previous);
			previous=null;
			return;
		}	
		previous=el;
	};

	var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
	var hh=['rd','bk','fk','mh'];
	var poker2=[];
	var fn6=function(){
		var nu,hs,zidian={};
		while(poker2.length!=52) {
			nu=dict[ Math.ceil( Math.random()*13 ) ];
			hs=hh[ Math.floor( Math.random()*4 ) ];
			var pai={ huase:hs,number:nu };
			if (!zidian[hs+nu]) {
				poker2.push(pai);
				zidian[hs+nu]=true;
			}	
		}
		return poker2;
	};
	fn6();
	
	var els=document.getElementsByClassName('poker');
	for (var i = 0; i < els.length; i++) {
		els[i].innerHTML=poker2[i].number;
		if (poker2[i].huase=='rd') {
			// els[i].style.backgroundImage='url(./images/hongtao.jpg)';
			els[i].style.backgroundImage='url(./images/hongtao.png)';
		}
		if (poker2[i].huase=='bk') {
			// els[i].style.backgroundImage='url(./images/heitao.jpg)';
			els[i].style.backgroundImage='url(./images/heitao.png)';
		}
		if (poker2[i].huase=='fk') {
			// els[i].style.backgroundImage='url(./images/fangkuai.jpg)';
			els[i].style.backgroundImage='url(./images/fangkuai.png)';
		}
		if (poker2[i].huase=='mh') {
			// els[i].style.backgroundImage='url(./images/meihua.jpg)';
			els[i].style.backgroundImage='url(./images/meihua.png)';
		}
	}

	
	var rightt=document.getElementById('right');
	var up=document.getElementById('next');
	var remove,jishu=0;
	next.onclick=function(e){
		if (!leftt.children.length) {return;}
		remove=leftt.removeChild(leftt.lastElementChild);
		rightt.appendChild(remove);
	}
	var reset=document.getElementById('reset');
	reset.onclick=function(){
		if (jishu==3||leftt.children.length!=0) {return;}
		while(rightt.children.length){
			remove=rightt.removeChild(rightt.lastElementChild);
			leftt.appendChild(remove);
		}
		jishu++;
	};
};