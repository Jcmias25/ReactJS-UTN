/* window.addEventListener('load', function(){

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
);
 */



function cambioDeSeguro(){

   /*  console.log('hola') */
    let valor = document.getElementById('secure-type').value

    if (valor == 1){
        document.querySelector('.labinp h4').innerHTML = '$500'
    } else if (valor == 2) {
        document.querySelector('.labinp h4').innerHTML = '$1000'
    } else if (valor == 3) {
        document.querySelector('.labinp h4').innerHTML = '$1500'
    }
    

}