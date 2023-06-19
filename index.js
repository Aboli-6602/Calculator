const input = document.querySelector('.input');
const buttons = document.getElementsByClassName('button');
let string = '';
let memory;

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try{
                input.value = eval(string);
                memory = eval(string);
            }
            catch{
                input.value = 'Invalid Expression';
            }
            return;
        }

        else if (e.target.innerHTML == 'C') {
            string = '';
            input.value = '';
        }

        else if (e.target.innerHTML == 'x^y') {
            input.value += '^';
            string += '**'
        }

        else if (e.target.innerHTML == 'Del') {
            let len = input.value.length;
            input.value = input.value.substring(0,len-1);
        }
        
        else if (e.target.innerHTML == 'MR') {
            if(memory == undefined){
                input.value = '';
            }
            else{
            input.value = memory;
            }
        }

        else if (e.target.innerHTML == 'M+') {
            if(Number(input.value)){
                console.log(Number(input.value));
                memory += Number(input.value);
            }
            else{
                input.value = 'Invalid Expression';
            }
            
        }

        else if (e.target.innerHTML == 'M-') {
            if(Number(input.value)){
                memory -= Number(input.value);
            }
            else{
                input.value = 'Invalid Expression';
            }
        }

        else if (e.target.innerHTML == 'MC') {
            memory = '';
        }

        else {
            string += e.target.innerHTML;
            // input.value = string; // if input variable was document.getElementsByClassName('input'), we would have not got real time values on screen when button is pressed
            input.value += e.target.innerHTML;
        }
        
        
        
    })
}