

window.addEventListener('load', () => {

    const display = document.querySelector('.display');
    const padNumbers = document.getElementsByClassName('number');

    const padNumbersArray = Array.from(padNumbers);


    for (let i = 0; i < padNumbersArray.length; i++) {

        padNumbersArray[i].addEventListener('click', () => {

            if (padNumbersArray[i].innerHTML !== '=') {
                if (display.innerHTML == 0) {
                    display.innerHTML = padNumbersArray[i].innerHTML;
                } 
                
                else if (display.innerHTML != 0) {
                    display.innerHTML = display.innerHTML + padNumbersArray[i].innerHTML;
                }
    
                if (padNumbersArray[i].innerHTML === 'C') {
                    display.innerHTML = 0
                }

            } else if (padNumbersArray[i].innerHTML === '=') {
                let cuentaAResolver = display.innerHTML;
                let result = eval(cuentaAResolver);
                display.innerHTML = result;
            }
            



            

        })

    }


});


