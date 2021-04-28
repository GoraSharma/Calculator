var a = '';
var b= '';
var num = [];
var ans;


// Display Numbers / operands on input box

function sendDigit(digit){
   
    num.push(digit);

    if(num.length !=1){
        a = '';
		document.getElementById('input-box').innerHTML = a;	
    }
    for(i = 0; i<num.length;i++)
    {
        a = a + num[i];
    }

    document.getElementById('input-box').value = a;


}

// Clearing the input screen

 function clearScreen(){
    document.getElementById('input-box').value = '';
    
    // Empty the num array

    while(num.length>0)
    {
        num.pop();
        a='';
        b = '';
        
    }

}

// equalTo to calculate the result and show it in inputbox

function equalTo(){
    document.getElementById('input-box').value = '';

    for(i= 0;i<num.length;i++){
        b+=num[i];
    }

    ans = eval(b);
    document.getElementById('input-box').value = ans;

    while(num.length>0)
    {
        num.pop();
        a='';
        b = '';
        
    }
    
}