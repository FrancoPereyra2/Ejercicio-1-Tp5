document.addEventListener('DOMContentLoaded', (event) => {
    const btnComenzar = document.querySelector('.comenzar');
    const btnenviar = document.querySelector('.enviar');
    const consigna = document.querySelector('.consigna');
    const inputNumero = document.querySelector('.numeroIngresado');
  
    btnComenzar.addEventListener('click', () => {
        btnComenzar.classList.add('hidden');
        consigna.classList.remove('hidden');
        inputNumero.classList.remove('hidden');
        btnenviar.classList.remove('hidden');
    });
});

function enviar(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio);

    const numeroIngresado = document.querySelector('.numeroIngresado').value;
    if (numeroIngresado < numeroAleatorio){
        alert('El numero ingresado es menor al numero aleatorio');
    } else if(numeroIngresado > numeroAleatorio){
        alert('El numero ingresado es mayor al numero aleatorio');
    }else{
        alert('Felicidades, adivinaste el numero');
    }

    document.querySelector('.numeroIngresado').value = '';
}
