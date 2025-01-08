const button=document.querySelector('button');
button.addEventListener('click',()=>{
    // access the input
    const input1=document.getElementById('first');
    const number1=Number(input1.value);
    const input2=document.getElementById('second');
    const number2=Number(input2.value)/100;
    // do operation
    const result1=number1/(number2*number2);
    const result=result1.toFixed(2);
    const re=document.getElementById('root3');
    if(result<18.5)
    re.textContent="Result:- UnderWeight  "+ result;
    else if(result<=24.9)
    re.textContent="Result:- Normal Weight  "+ result;  
    else if(result<=29.9)
    re.textContent="Result:- OverWeight  "+ result;
    else
    re.textContent="Result:- Obesity  "+ result;
})