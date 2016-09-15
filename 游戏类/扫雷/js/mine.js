
document.onselectstart = function(){
  	return false;
  }
 
/*点击开始游戏的过渡动画*/
function startGame(){ 
				start_scr = document.getElementsByClassName("start-screen");
				console.log(start_scr);
				start_scr[0].style.WebkitAnimation = "start-game 1s";
				setTimeout(function(){
								document.getElementsByClassName("title")[0].style.WebkitAnimation = "logo-show 2s";
								document.getElementsByClassName("title")[0].style.opacity="1";	
								document.getElementsByClassName("title")[0].style.zIndex = "1";
					},1500);	
				start_scr[0].style.opacity="0";	
				start_scr[0].style.zIndex = "-1";
				
}	
window.onload = function(){
	intoGame_screen();
	var count = 0;
	var click_count = 0;
	
	
	var new_arr = [];
	for(i=0;i<8;i++){
		new_arr[i] = [];
		for(j=0;j<8;j++){
			new_arr[i][j] = (Math.random() >0.7) ? 1 : 0;   //在此更改难度系数(0~1)，数值越小，难度越大
		}
	}
			
	console.log(new_arr);
	

	var lei = [];
	for(i=0;i<8;i++){
		lei[i] = [];
		for(j=0;j<8;j++){
			if(new_arr[i][j]=="1"){
				lei[i][j] = "lei";
				}else{
						n1 = (j>0)?new_arr[i][j-1]:0;
						n2 = (j<7)?new_arr[i][j+1]:0;
						n3 = (i>0&&j>0)?new_arr[i-1][j-1]:0;
						n4 = (i>0)?new_arr[i-1][j]:0;
						n5 = (i>0&&j<7)?new_arr[i-1][j+1]:0;
						n6 = (i<7&&j>0)?new_arr[i+1][j-1]:0;
						n7 = (i<7)?new_arr[i+1][j]:0;
						n8 = (i<7&&j<7)?new_arr[i+1][j+1]:0;
						lei[i][j] = n1+n2+n3+n4+n5+n6+n7+n8;
					}
		}
	}
	
	
	var tmp_arr = [];
	for(i=0;i<8;i++){
		for(j=0;j<8;j++){
			tmp_arr.push(lei[i][j]);
		}		
	}
	
	console.log(tmp_arr);

	var items = document.getElementsByClassName("block");
	for(i=0;i<items.length;i++){
		if(tmp_arr[i] == "lei"){
			items[i].innerHTML = "<img class='lei' src = './images/mine.png'/>";
			}else{
				count++;
				items[i].innerHTML = tmp_arr[i];
				items[i].style.color = "#0052D0";
				}
		}
		
	var lei_img = document.getElementsByClassName("lei");
	for(i=0;i<lei_img.length;i++){
		lei_img[i].style.opacity="0";
		}
	
	for(i=0;i<=items.length;i++){
		items[i].onclick = function(){
			if(this.textContent==""){
				//alert("BOOM");
				this.style.backgroundColor = "#9C0002";
				for(i=0;i<lei_img.length;i++){
					lei_img[i].style.WebkitAnimation = "lei_pic_show 1s";
					lei_img[i].style.opacity="1";
					fail_screen();
					}
				for(i=0;i<=items.length;i++){
					items[i].onclick = "false";
					}
				
				}
			else{
				this.onclick="false";
				this.style.textShadow = "0px 0px 10px #fff";
				this.style.color = "#fff";
				click_count++;
				}
			console.log(count,click_count);
			if(click_count == count){
				  //alert("成功");
				  for(i=0;i<lei_img.length;i++){
					lei_img[i].style.WebkitAnimation = "lei_pic_show 1s";
					lei_img[i].style.opacity="1";
					}
				  success_screen();
				}
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			/*显示失败界面*/
			function fail_screen(){ 
				setTimeout(function(){
						   		fail_scr = document.getElementsByClassName("fail-screen");
								console.log(fail_scr);
								fail_scr[0].style.WebkitAnimation = "fail_window_show 1s";
								fail_scr[0].style.opacity=".85";	
								fail_scr[0].style.zIndex = "2";
							},2500);	
			}
			
			/*显示成功界面*/
			function success_screen(){ 
				setTimeout(function(){
						   		succ_scr = document.getElementsByClassName("success-screen");
								console.log(succ_scr);
								succ_scr[0].style.WebkitAnimation = "success_window_show 1s";
								succ_scr[0].style.opacity=".9";	
								succ_scr[0].style.zIndex = "2";
							},2500);	
			}
			
			/*进入页面的过渡动画*/
			function intoGame_screen(){ 
							start_scr = document.getElementsByClassName("start-screen");
							console.log(start_scr);
							start_scr[0].style.WebkitAnimation = "into-game 1s";
							start_scr[0].style.opacity=".9";	
							start_scr[0].style.zIndex = "3";
							
			}
			

}