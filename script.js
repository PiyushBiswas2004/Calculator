let display= document.getElementById('display');
let buttons= document.querySelectorAll('button');


let string='';
let arr = Array.from(buttons)

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='='){
            try{string=eval(string)
                    display.value=string;}
            catch(error){
                display.value='Error';
                string='';
                }
        }
        else if(e.target.innerHTML =='C'){
            string='';
            display.value=string;
        }
        else if(e.target.innerHTML =='&lt;='){
            string=string.substring(0,string.length - 1);
            display.value=string;
        }
        else{
            string+=e.target.innerHTML;
            display.value=string;
        }
    })
})