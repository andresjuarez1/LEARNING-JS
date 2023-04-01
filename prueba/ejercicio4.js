class celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else{
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular")
        }else{
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        color: <b>${this.color}</b></br>
        peso: <b>${this.peso}</b></br>
        tamaño: <b>${this.tamaño}</b></br>
        resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        memoria ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

celular1 = new celular("rojo","150gr","5","hd","1GB");
celular2 = new celular("negro","120gr","5.4","full hd","2GB");
celular3 = new celular("amarillo","130gr","5.9","full hd","5GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
`);


