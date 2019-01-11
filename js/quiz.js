

 var  screen1 = document.getElementById("for_screen");
 var choice;
 choice=0;
 var ans;
 var score = 0;
 var name1 = "sd";
 

function start(){
	switch(choice){
		case 0:  name1 = document.myForm.name.value;
				screen1.innerHTML=(" WELCOME  " + name1);
				screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
				break;
		case 1:screen1.innerHTML=" ( 1 ) What is the last digit of 4^99 ?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > 4 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 6 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  2 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  > 8 <\/input>");
					ans = "A";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;
		case 2:screen1.innerHTML=" ( 2 ) what is the lcm of 6 and 10?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > 10 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 6 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  > 30 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  > 60<\/input>");
					ans = "C";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 3:screen1.innerHTML=" ( 3) 323^2 - 322^2 ?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > 653 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 654 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  > 643 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  > 645 <\/input>");
					ans="D";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 4:screen1.innerHTML=" ( 4 ) 10^25 - 7 is divisible by ?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  2 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 3 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  > 9 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  > 3,9 <\/input>");
					ans="B";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 5:screen1.innerHTML=" ( 5 ) find a and b if a8563145b is divisible by 88?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > 2,6  <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 3,6 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  > 4,6 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  > 2,4 <\/input>");
					ans="A";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 6:screen1.innerHTML=" ( 6 ) if PINK == QJOL then ROSE ==  ? ";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  FGST <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  >  SPTI <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  SPTF <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  FTPS <\/input>");
					ans="C";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 7:screen1.innerHTML=" ( 7 ) find number of zero's in 100!";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > 24 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 100100 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  > (100)^100 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  > none  <\/input>");
					ans="A";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 8:screen1.innerHTML=" ( 8 ) 45 is 120% of a number,then what is 80% of the same number?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  36 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  >  30 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  31 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  38 <\/input>");
					ans="D";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 9:screen1.innerHTML=" ( 9 ) 2, 44, 4, 41, 6, 38, 8, ?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > 35 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 10 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  32 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  31 <\/input>");
					ans="A";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 10:screen1.innerHTML=" ( 10 )  49 : 81 : : 100: ? ";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  34 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > 44 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  54 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  43 <\/input>");
					ans = "B";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 11:screen1.innerHTML=" ( 11 ) DDA : ADD : : RRB : ?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  RRR <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  >  BBR <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  BRR <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  DDA <\/input>");
					ans="C";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 12:screen1.innerHTML=" ( 12 ) Pick the ood one 17, 27, 29, 37, 31?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  27 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  >  29 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  31 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  17 <\/input>");
					ans="A";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 13:screen1.innerHTML=" ( 13 ) Pick the odd one RAT, OUT, BED, LOT, TIN?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  LOT <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  >  TIN <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  OUT <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  RAT <\/input>");
					ans="C";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 14:screen1.innerHTML=" ( 14 )  H, I, K, N, ?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  > S <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  > Q <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  > O <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >R <\/input>");
					ans="D";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;	
		case 15:screen1.innerHTML=" ( 15 ) Find the 499th digit in the expansion of (34128700)^249?";
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"A\"  >  0 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"B\"  >  9 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"C\"  >  7 <\/input>");
					screen1.insertAdjacentHTML('beforeend',"</br><input class = \"answer\" type = \"radio\" name = \"answer\" value= \"D\"  >  1 <\/input>");
					ans="C";
					screen1.insertAdjacentHTML('beforeend',"</br><input  type=\"button\" onclick = \"next()\"  value=\"next\"><\/input>" );
						break;					
		default:screen1.innerHTML="THANKYOU FOR PLAYING " + name1 + " !!!!!";
		screen1.insertAdjacentHTML('beforeend',"</br> </br> your score is " + score);
					screen1.insertAdjacentHTML('beforeend',"</br></br><input  type=\"button\" onclick = \"playagain()\"  value=\"playagain\"><\/input>" );
					document.getElementById("for_screen").insertAdjacentHTML('beforeend',"</br></br><input  type=\"button\" onclick = \"quit()\"  value=\"quit\"><\/input>" );
						
						
	}
}

function next(){
	var ans1="z";
	var i  =0;
	var check = document.getElementsByName("answer");
	for( i=0;i<check.length;i++){
		if(check[i].checked){
			ans1 = check[i].value;
		}
	}
	if(ans1 == ans){
		score = score+1;
	}
	choice = choice + 1;
	start();

}
function playagain(){
	choice = 0;
	next();
}
function quit(){
    
					document.getElementById("for_screen").innerHTML="</br></br>hAve A GrEAt dAy :)";
						document.getElementById("for_screen").style.align = "center";
}