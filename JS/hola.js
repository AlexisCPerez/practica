class animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        this.tamanio = this.tamanio;
    }

sonar(){
    console.log("Hago sonidos porque si");
}

saludar(){
    console.log(`Hola me llamo ${this.nombre}`);
    }

ladrar(){
    console.log("Guau Guau")
}
}

class perro extends animal {
    constructor(nombre,genero,tamanio){
        super(nombre,genero)
        this.tamanio = tamanio
    }
}
const mimi = new animal("miky","hembra"),
    scooby = new perro("Scooby", "Macho", "Gigante");

console.log(mimi)
mimi.saludar()
mimi.sonar()
console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()

// alanzote el mejor