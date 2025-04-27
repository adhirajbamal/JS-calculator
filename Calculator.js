let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

Array.from(buttons).forEach((button)=> {
    button.addEventListener('click',(e)=>{
        try {
            if(e.target.innerHTML == '=') {
                string = eval(string).toString();
                input.value = string;
            }
            else if(e.target.innerHTML == 'C') {
                string = "";
                input.value = string;
            }
            else if(e.target.innerHTML == '%') {
                string = (parseFloat(string) / 100).toString();
                input.value = string;
            }
            else {
                string = string + e.target.innerHTML;
                input.value = string;
            }
        } catch(error) {
            string = "Error";
            input.value = string;
            setTimeout(() => {
                string = "";
                input.value = string;
            }, 2000);
        }
    })
})