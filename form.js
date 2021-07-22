var inputs = document.getElementsByClassName('form_input')
for (var i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar')
        } else {
            this.nextElementSibling.classList.remove('fijar')
        }
    })
}

function operacion(){
    var nombre= document.MyForm.name.value;
    var apellido= document.MyForm.lastname.value;
    var resultadoLuna= (parseFloat(((document.MyForm.weight.value)/9.81)*1.62).toFixed(2));
    var resultadoMarte= (parseFloat(((document.MyForm.weight.value)/9.81)*3.711)).toFixed(2);
    var resultado1 =  nombre + " " + apellido +", su peso en la luna es de: " +resultadoLuna + " Kgs "+
     "y su peso en Marte es de: " + resultadoMarte + " Kgs.";
    resul=document.getElementById("resultado");
    resul.innerHTML=resultado1;
}