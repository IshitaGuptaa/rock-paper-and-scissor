let userScore=0;
let compScore=0;

const user_score_span=document.getElementById("user_sc");
const comp_score_span=document.getElementById("comp_sc");

const result_div=document.getElementById("result");

const r= document.getElementById("r");
const p= document.getElementById("p");
const s= document.getElementById("s");



r.addEventListener("click",function(){user('r');});
p.addEventListener("click",function(){user('p')});
s.addEventListener("click",function(){user('s')});



function user(user_ch){
	const comp_ch=compchoice();

	switch(user_ch+comp_ch){

		case "rs":
		case "sp":
		case "pr":

			win(user_ch,comp_ch);
			break;

		case "rp":
		case "sr":
		case "ps":

			lose(user_ch,comp_ch);
			break;

		case "rr":
		case "ss":
		case "pp":

			draw(user_ch,comp_ch);
			break;}

image_user(user_ch);
image_comp(comp_ch);

}




function win(user_ch,comp_ch){
	const users=document.getElementById(user_ch);
	userScore++;
	user_score_span.innerHTML=userScore;
	result_div.innerHTML= word(user_ch) +"<sub style='font-size:15px'>(user)</sub> Wins over " + word(comp_ch) +"<sub style='font-size:15px'>(comp)</sub>";
	users.classList.add('greenglow');
	setTimeout(function(){users.classList.remove('greenglow')},300);
}


function lose(user_ch,comp_ch){
	const users=document.getElementById(user_ch);
	compScore++;
	comp_score_span.innerHTML=compScore;
	result_div.innerHTML=word(user_ch) +"<sub style='font-size:15px'>(user)</sub> Loses to " + word(comp_ch) +"<sub style='font-size:15px'>(comp)</sub>";
	users.classList.add('redglow');
	setTimeout(function(){users.classList.remove('redglow')},300);
}


function draw(user_ch,comp_ch){
	const users=document.getElementById(user_ch);
	result_div.innerHTML="It's a Draw";
	users.classList.add('grayglow');
	setTimeout(function(){users.classList.remove('grayglow')},300);

}


function word(user_ch,comp_ch){
	if(user_ch=='r')
		{return "Rock";}
	if(user_ch=='p')
		{return "Paper";}
	return "Scissor"
}




function compchoice(){
const option=['r', 'p' , 's'];
d=Math.floor(Math.random() * 3);
return option[d];
}

function image_user(user_ch){


	const url = document.getElementById(user_ch).src;
        var x= document.createElement('IMG');
	x.setAttribute("src",url);
	x.setAttribute("id","user_img");
	Q=document.body.appendChild(x);

document.getElementById('user_img').classList.add('imageuser');
setTimeout(function(){document.body.removeChild(x);},1500);

}

function image_comp(comp_ch){


	const url = document.getElementById(comp_ch).src;
        var x= document.createElement('IMG');
	x.setAttribute("src",url);
	x.setAttribute("id","comp_img");
	Q=document.body.appendChild(x);

document.getElementById('comp_img').classList.add('imagecomp');
setTimeout(function(){document.body.removeChild(x);},1500);
}







