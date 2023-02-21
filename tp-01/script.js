window.addEventListener('load', function(){

    let elemento = document.getElementById('secure-type');

    elemento.addEventListener('click',function(){
        let text = elemento.options[elemento.selectedIndex].text;
        if (text == 'Básico') {
            document.querySelector('.labinp h4').innerHTML = '$500'
        } else if (text == 'Intermedio') {
            document.querySelector('.labinp h4').innerHTML = '$1000'
        } else if (text == 'Premium'){
            document.querySelector('.labinp h4').innerHTML = '$1500'
        } 
    })
    
}
)