/* Concepto de abstracción */

class Pokedex{
    getinfo(name){ //Declaramos un método
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`) //Justo usamos el BackStick para poder hacer un fetch personalizado en función del nombre del pokemon
            .then(data => data.json())
            .then(data => {
                /* const lista = ["Dragon Ball", "Code Gears", "Sailor Moon"];
                const[dragon,code, sailor] = lista; //con esto estamos sacando elementos de un arreglo y los estamos desestructurando de mi arreglo
                //const[ , , sailor] = lista; con esto podriamos obtener simplemente el tercer elemento
                //Seria equivalente a ... const dragon = lista[0]; const code = lista[1] ; const sailor = lista[2];
                console.log(dragon,code); */

                //DESESTRUCTURACIÓN, permite sacar elementos dentro de un arreglo. Desempaqueta elementos de un arreglo. En arreglos grandes se pierde la desestructuración.
                const [DATA = null] = data; //Sacamos el objeto y lo asignamos a la variable DATA, si "data" no existe entonces a la variable DATA le damos el valor de null
                const MESSAGE = DATA || `El pokemón ${name} no existe`; //Almacena el valor de la DATA o le indica que no se pudo hacer. Si el data tiene algo asignalo al mensaje, en caso contrario mandale el error.

                console.log(MESSAGE);
            })
    }
}

const pokedex = new Pokedex();
pokedex.getinfo("Charmander");