class animal {
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} años y soy colorcito ${this.color}`
    }
    verInfo(){
        document.write(this.informacion)
    }
}

class Perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie, edad,color,raza)
        this.raza =null; 
    }
    set setRaza(newName){
        this.raza= newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",10,"negro","doberman");
const gato = new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde");

perro.setRaza = "pedro";
document.write(perro.getRaza)



