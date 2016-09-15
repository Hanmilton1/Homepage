window.onload=function(){
	
	var nums=document.getElementsByClassName('num'),
	ops=document.getElementsByClassName('oprator'),
	nums2=document.getElementsByClassName('num2'),
	ops2=document.getElementsByClassName('oprator2'),
	sc=document.getElementById('screen'),
	first=document.getElementById('first'),	
	equl=document.getElementById('denghao'),
	sc2=document.getElementById('screen2'),
	equl2=document.getElementById('denghao2'),
	mc2=document.getElementById('mc2'),
	mjia2=document.getElementById('m+2'),
	mjian2=document.getElementById('m-2'),
	mr2=document.getElementById('mr2'),
	pai=document.getElementById('pai')
	Memory2=document.getElementById('Memory2'),
	firstNumber='',secondNumber='',result='',
	yunsuanfu='',index=1,index1=1,	
	firstNumber2='',sencondNumber2='',result2='',
	yunsuanfu2='',index3=1,index4=1,jc='1',jcresult='1',
	cun2='',cunj2='';
	
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){			
			if(sc.innerHTML.indexOf('.')!=-1&&this.innerHTML=='.'){return;}
			if(!yunsuanfu){
				if(firstNumber.length<11){
					if(this.innerHTML=='+/-'&&firstNumber.indexOf('-')==-1){
						firstNumber='-'+firstNumber;
						sc.innerHTML=firstNumber;
					}else{
						if(this.innerHTML!='+/-'){
							firstNumber+=this.innerHTML;
							sc.innerHTML=firstNumber;
						}else{
							return;
						}
					}
				}else{				
					firstNumber+=this.innerHTML;					
					sc.innerHTML=firstNumber.slice(index++);
				}
			}else{
				if(secondNumber.length<11){
					if(this.innerHTML=='+/-'&&secondNumber.indexOf('-')==-1){
						secondNumber='-'+secondNumber;
						sc.innerHTML=secondNumber;
					}else{
						if(this.innerHTML!='+/-'){
							secondNumber+=this.innerHTML;
							sc.innerHTML=secondNumber;
						}else{
							return;
						}
					}	
				}else{
					secondNumber+=this.innerHTML;
					sc.innerHTML=secondNumber.slice(index1++);
				}
				
			}
		}
	}

	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			if(!sc.innerHTML){return};
			if(this.innerHTML=='+' || this.innerHTML=='-' || this.innerHTML=='*' || this.innerHTML=='/'){
				if(result){
					firstNumber=result;
				}
				if(yunsuanfu=='+'){
					firstNumber=Number(firstNumber)+Number(secondNumber)+'';
				}
				if(yunsuanfu=='-'){
					firstNumber=Number(firstNumber)-Number(secondNumber)+'';
				}
				if(yunsuanfu=='*'){
					if(secondNumber==''){secondNumber='1'};
					firstNumber=Number(firstNumber)*Number(secondNumber)+'';
				}
				if(yunsuanfu=='/'){
					if(secondNumber==''){secondNumber='1'};					
					firstNumber=Number(firstNumber)/Number(secondNumber)+'';
				}
				yunsuanfu=this.innerHTML;
				secondNumber='';
			}		
			if(this.innerHTML=='AC'){
				sc.innerHTML='';
				firstNumber='';
				secondNumber='';
				yunsuanfu='';
				equl='';
				result='';
				Memory.innerHTML='';
			}			
		}
	}

	equl.onclick=function(){
		if(yunsuanfu=='+'){
			result=Number(firstNumber)+Number(secondNumber);
			sc.innerHTML=result;
		}
		if(yunsuanfu=='-'){
			result=Number(firstNumber)-Number(secondNumber);
			sc.innerHTML=result;
		}
		if(yunsuanfu=='*'){
			result=Number(firstNumber)*Number(secondNumber);
			sc.innerHTML=result;
		}
		if(yunsuanfu=='/'){
			result=Number(firstNumber)/Number(secondNumber);
			sc.innerHTML=result;
		}
		console.log(result);
		if(String(result).length>10){
			result=Number(result);
			sc.innerHTML=result.toExponential(5);
		}
		firstNumber='';secondNumber='';yunsuanfu='';equl='';

	}
	var mc=document.getElementById('mc');
	var mjia=document.getElementById('m+');
	var mjian=document.getElementById('m-');
	var mr=document.getElementById('mr');
	var Memory=document.getElementById('Memory');
	var cun='',cunj='';

	mjia.onclick=function(){
		if(!cun){
			Memory.innerHTML='M';
			cun=sc.innerHTML;
		}else{
			cunj=Number(cun)+Number(sc.innerHTML);
			sc.innerHTML=cunj;
		}
	}
	mjian.onclick=function(){
		if(!cun){
			Memory.innerHTML='M';
			cun=sc.innerHTML;
		}else{
			cunj=Number(cun)-Number(sc.innerHTML);
			sc.innerHTML=cunj;
		}
	}
	mc.onclick=function(){
		Memory.innerHTML='';
		cun='';
	}
	mr.onclick=function(){
		sc.innerHTML=cun;
	}





// ------------------------------------------------------------------------

	var sup=document.getElementById('supper');
	var two=document.getElementById('two');
	var kaiguan=true;
	sup.onclick=function(){
		if(kaiguan){
			two.style.display='block';
			this.innerHTML='普通计算器';
			first.style.display='none';
			kaiguan=false;
		}else{
			two.style.display='none';
			this.innerHTML='科学计算器';			
			first.style.display='block';
			kaiguan=true;
		}
	}
// -------------------------------------------------------------------------------


	pai.onclick=function(){
		if(firstNumber2==''&&this.innerHTML=='π'){
				sc2.innerHTML='π';
				firstNumber2=Math.PI+'';
				return;
			}
		if(sencondNumber2==''&&this.innerHTML=='π'){
				sc2.innerHTML='π';
				sencondNumber2=Math.PI+'';
				return;
			}
	}
	for(var i=0;i<nums2.length;i++){
		nums2[i].onclick=function(){			
			if(sc2.innerHTML.indexOf('.')!=-1&&this.innerHTML=='.'){return;}
			if(!yunsuanfu2){				
				if(firstNumber2.length<23){
					if(this.innerHTML=='+/-'&&firstNumber2.indexOf('-')==-1){
						firstNumber2='-'+firstNumber2;
						sc2.innerHTML=firstNumber2;
					}else{
						if(this.innerHTML!='+/-'){
							firstNumber2+=this.innerHTML;
							sc2.innerHTML=firstNumber2;
						}else{
							return;
						}
					}
				}else{				
					firstNumber2+=this.innerHTML;					
					sc2.innerHTML=firstNumber2.slice(index3++);
				}
			}else{
				
				if(sencondNumber2.length<23){
					if(this.innerHTML=='+/-'&&sencondNumber2.indexOf('-')==-1){
						sencondNumber2='-'+sencondNumber2;
						sc2.innerHTML=sencondNumber2;
					}else{
						if(this.innerHTML!='+/-'){
							sencondNumber2+=this.innerHTML;
							sc2.innerHTML=sencondNumber2;
						}else{
							return;
						}
					}	
				}else{
					sencondNumber2+=this.innerHTML;
					sc2.innerHTML=sencondNumber2.slice(index4++);
				}
				
			}
		}
	}

	for(var i=0;i<ops2.length;i++){
		ops2[i].onclick=function(){
			if(!sc2.innerHTML){return};
			if(this.innerHTML=='+' || this.innerHTML=='-' || this.innerHTML=='*' || this.innerHTML=='/' 
				|| this.innerHTML=='%' || this.innerHTML=='Xˉ¹' || this.innerHTML=='X²' || this.innerHTML=='X³'
				|| this.innerHTML=='xʸ' || this.innerHTML=='X!' || this.innerHTML=='√' || this.innerHTML=='ˣ√y'
				|| this.innerHTML=='log' || this.innerHTML=='sin'|| this.innerHTML=='cos' || this.innerHTML=='tan'
				|| this.innerHTML=='ln' || this.innerHTML=='eˣ' || this.innerHTML=='sinh' || this.innerHTML=='cosh'
				|| this.innerHTML=='tanh'
				){
				if(result2){
					firstNumber2=result2;
				}
				if(yunsuanfu2=='+'){
					firstNumber2=Number(firstNumber2)+Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='-'){
					firstNumber2=Number(firstNumber2)-Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='*'){
					if(sencondNumber2==''){sencondNumber2='1'};
					firstNumber2=Number(firstNumber2)*Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='/'){
					if(sencondNumber2==''){sencondNumber2='1'};					
					firstNumber2=Number(firstNumber2)/Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='%'){
					if(sencondNumber2==''){sencondNumber2=Number(firstNumber2)+1+''};					
					firstNumber2=Number(firstNumber2)/Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='log'){
					if(sencondNumber2==''){sencondNumber2='1'};					
					firstNumber2=Number(firstNumber2)/Number(sencondNumber2)+'';
				}
				if(this.innerHTML=='Xˉ¹'){				
					firstNumber2=1/Number(firstNumber2)+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='X²'){			
					firstNumber2=Math.pow( firstNumber2,2 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='X³'){			
					firstNumber2=Math.pow( firstNumber2,3 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='eˣ'){			
					firstNumber2=Math.pow( Math.E,firstNumber2 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='sin'){			
					firstNumber2=Math.sin( 2*Math.PI/360*firstNumber2 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='cos'){			
					firstNumber2=Math.cos( 2*Math.PI/360*firstNumber2 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='tan'){			
					firstNumber2=Math.tan( 2*Math.PI/360*firstNumber2 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='sinh'){			
					firstNumber2=( Math.pow( Math.E,firstNumber2 )-Math.pow( Math.E,-firstNumber2 ) )/2+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='cosh'){			
					firstNumber2=( Math.pow( Math.E,firstNumber2 )+Math.pow( Math.E,-firstNumber2 ) )/2+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='tanh'){			
					firstNumber2=( (Math.pow( Math.E,firstNumber2 )-Math.pow( Math.E,-firstNumber2 ) ) /
						(Math.pow( Math.E,firstNumber2 )+Math.pow( Math.E,-firstNumber2 )) )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='ln'){			
					firstNumber2=Math.log( firstNumber2 )/Math.log( 10 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}
				if(this.innerHTML=='xʸ'){			
					if(sencondNumber2==''){sencondNumber2='1'};					
					firstNumber2=Math.pow(firstNumber2,1);
				}
				if(this.innerHTML=='X!'){			
					while(jc<=firstNumber2){
						jcresult*=jc;
						jc++;
					}
					sc2.innerHTML=jcresult;
					firstNumber2=jcresult;
					result2=firstNumber2;
				}
				if(this.innerHTML=='√'){			
					firstNumber2=Math.sqrt( firstNumber2 )+'';
					sc2.innerHTML=firstNumber2;
					result2=firstNumber2;
				}			
				if(this.innerHTML=='ˣ√y'){			
					if(sencondNumber2==''){sencondNumber2='1'};					
					firstNumber2=Math.pow(firstNumber2,1/sencondNumber2);
				}
				yunsuanfu2=this.innerHTML;
				sencondNumber2='';
			}	
			if(this.innerHTML=='AC'){
				sc2.innerHTML='';
				firstNumber2='';
				sencondNumber2='';
				yunsuanfu2='';
				equl2='';
				result2='';
			}			
		}
	}

	equl2.onclick=function(){
		if(yunsuanfu2=='+'){
			result2=Number(firstNumber2)+Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='-'){
			result2=Number(firstNumber2)-Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='*'){
			result2=Number(firstNumber2)*Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='/'){
			result2=Number(firstNumber2)/Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='%'){
			result2=Number(firstNumber2)%Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='log'){
			result2=Math.log(sencondNumber2)/Math.log(firstNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='xʸ'){
			result2=Math.pow(firstNumber2,sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='ˣ√y'){
			result2=Math.pow(firstNumber2,1/sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(String(result2).length>23){
			result2=Number(result2);
			sc2.innerHTML=result2.toExponential(16);
		}
		firstNumber2='';sencondNumber2='';yunsuanfu2='';equl2='';

	}


	mjia2.onclick=function(){
		if(!cun2){
			Memory2.innerHTML='M';
			cun2=sc2.innerHTML;
		}else{
			cunj2=Number(cun2)+Number(sc2.innerHTML);
			if(String(cunj2).length>23){
				cunj2=Number(cunj2);
				sc2.innerHTML=cunj2.toExponential(16);
			}
			sc2.innerHTML=cunj2;
		}
	}
	mjian2.onclick=function(){
		if(!cun2){
			Memory2.innerHTML='M';
			cun2=sc2.innerHTML;
		}else{
			cunj2=Number(cun2)-Number(sc2.innerHTML);
			sc2.innerHTML=cunj2;
		}
	}
	mc2.onclick=function(){
		Memory2.innerHTML='';
		cun2='';
	}
	mr2.onclick=function(){
		sc2.innerHTML=cun2;
	}



}