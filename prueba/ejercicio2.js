let free = false;

const validarCliente = (time) =>{
    let edad = prompt ("Ingresa tu edad");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free==false){
            alert(`puedes pasar gratis porque son las ${time}`);
            free = true;
        } else{
            alert(`son las ${time} y tienes que pagar 80 pesos`);
        }
    } else{
        alert("No puede entrar")
    }
}

validarCliente (23)
validarCliente (24)
validarCliente (0)
validarCliente (0.5)
validarCliente (2)
