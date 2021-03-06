/* Declarando una clase llamada Pokemon */
class Pokemon{

    //Para encapsular los datos usamos el # para hacer los atributos privados. Esto permite que no se pueden modificar por fuera los datos, sino que deben pasar forzosamente por el objeto para poder tener acceso a ello.
    #name = ""; //Declarando el atributo del nombre
    #type = ""; //Declarando el atributo del tipo de pokemón
    #evolutions = []; //Declarando un arreglo

    //Le indicamos que debe rellenar con los parametros los atributos del objeto
    //Dentro del constructor podemos inicializar valores o incluso definir propiedades. Consiste en el pre-rellenado del objeto.
    constructor(name, type, evolutions){
        //This hace referencia al elemento que está por dentro.
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    //Para acceder a estos valore usamos los métodos SET y GET, con SET establecemos y con GET obtenemos el valor. Por cada atributo privado necesitamos un set
    set name(value){
        this.#name =value;
    }
    set type(value){
        this.#type =value;
    }
    set evolutions(value){
        this.#evolutions =value;
    }

    get name(){
        return this.#name;
    }
    get type(){
        return this.#type;
    }

    get evolutions(){
        return this.#evolutions;
    }
    /* En Java podemos poner más de 1 constructor para poder cubrir más de 1 tipo de declaración de objetos, por ejemplo: */
    //Permite instanciar sin recibir parametro alguno:
    /* constructor(){

    }
    //Permite instanciar al recibir sólo 1 parametro:
    constructor(name){
        this.name = name;
    }

    //Permite instanciar si recibe sólo 2 elementos:
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
 */
    //Los métodos no llevan la palabra reservada Function
    attack(){
        return `${this.#name}, está atacando`;
    }

    //Es el método que 
    //Evolution = 0 . Nos dice que si Evolve no recibe nada entonces le asigna un valor por defecto de 0
    evolve( evolution = 0){
        const Evolve = this.#evolutions[evolution] || "";  //Crea una variable, dentro de ella está metiendo el valor del arreglo en la posición indicada, si no es existe la evolución entonces nos da una cadena vacia. Lo usamos para que no nos falle y regrese la "" o algun texto. Nos permite ahorrarnos un if por así decirlo
        let message = "No puedo evolucionar";

        if(Evolve){ //Si tiene un valor entra al if, la cadena vacia la toma como false
            message = `${this.#name} está evolucionando a ${Evolve}`; //Asigna nuevo valor al mensaje
            this.#name = Evolve; //Modifica el atributo nombre al de la evolución
            //this.evolutions.shift(); Con esta linea podemos eliminar el primer termino del arreglo... El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
        }
        return message;
    }

} 

//Creamos una nueva instancia llamada Charmander a la que le mandamos el nombre, el tipo fuego y un arreglo con sus evoluciones
//const bulbasor = new Pokemon();
//const eve = new Pokemon("eve");
//const pikachu = new Pokemon("Pikachu", "Electric");
const charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizard"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log(charmander.name); //Muestra el nombre. Al hacerlo directamente con # nos marca error, cuando eran publicos consultabamos directamente el atributo, aqui lo hacemos directamente por un método, en este caso get.
console.log(charmander.attack()); //Ataca
console.log(charmander.evolve()); //Evoluciona
console.log(charmander.name); //Vemos que cambio el nombre
console.log(charmander.attack()); //Vemos que ahora charmeleon ataca

//charmander.evolve(); //Al no indicar la evolución le mandamos la ubicación de 0
//charmander.evolve(10); //Al no existir una evolución en esa posición entonces nos regresará una cadena vacia según lo que definimos en su método Evolve

/* Esto sólo es una función 
function Pokemon{

} */

/* 
    NOTAS IMPORTANTES:
    
    En JavaScript podemos utilizar la propiedad llamada "set"
         la cual permite definir un método que solo recibe un parámetro
         y nunca tiene retorno, en este ejemplo nos permite modificar 
         los atributos de la clase.

    En JavaScript podemos utilizar la propiedad llamada "get" 
        la cual nos permite definir un método que no recibe parámetros
        y siempre tiene retorno, en este ejemplo nos permite consultar 
        los atributos de la clase.

 */