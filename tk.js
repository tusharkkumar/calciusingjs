


function clear_space() {

	document.getElementById('field').value="";
	
}

function one(){
	var one=document.getElementById('field').value+=parseInt(1);
}

function two(){
	var two=document.getElementById('field').value+=parseInt(2);

}

function three(){
	var three=document.getElementById('field').value+=3;
}

function four(){
	var four=document.getElementById('field').value+= 4;
}

function five(){
	var five=document.getElementById('field').value += 5;
}

function six(){
	var six=document.getElementById('field').value+=6;
}

function seven(){
	var seven=document.getElementById('field').value+=7;
}

function eight(){
	var eight=document.getElementById('field').value +=8;
}

function nine(){
	var nine=document.getElementById('field').value+=9;
}


function add(){
	var plus=document.getElementById('field').value+="+";
}

function sub(){
	var sub= document.getElementById('field').value+="-";
}

function multiply() {
	document.getElementById('field').value+="*";



}

function divide() {
	document.getElementById('field').value+="/";
}

function equal() 
{	
	var array=["+","-","*","/"];
	var value=document.getElementById('field').value;
	if (value.split(array[0]) || value.split(array[1]) ||  value.split(array[2])|| value.split(array[3])) {

		var sum = value.split(array[0]);
		var sub = value.split(array[1]);
		var mul = value.split(array[2]);
		var div = value.split(array[3]);

		if (sum[0] & sum[1])
		{	
		var result_sum = parseInt(sum[0]) + parseInt(sum[1]);
		document.getElementById('field').value=result_sum;

		}
		if (sub[0] & sub[1]) 
		{
			var result_sub = parseInt(sub[0]) - parseInt(sub[1]);
			document.getElementById('field').value=result_sub;
		}
		if (mul[0] & mul[1]) 
		{
			var result_mul = parseInt(mul[0]) * parseInt(mul[1]);
			document.getElementById('field').value=result_mul;
		}
		if (div[0] & div[1]) 
		{
			var result_div = parseInt(div[0]) / parseInt(div[1]);
			document.getElementById('field').value=result_div;
		}

		

	};
	
	 
	
}



