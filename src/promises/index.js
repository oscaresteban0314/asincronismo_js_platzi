const promise = new promise(function(resolve,reject){ //inicializar la promesa const Nombre_de_la_promesa(function(resolve,reject))
    resolve('Hey');
});   

const cow = 9; //numero de vaquitas en el ejercicio
const countCows= new Promise(function(resolve, reject) {
    if (cow>10){   // validacion de vaquitas
        resolve(`We have ${cow} cows on the farm`); //hay el numero de vaquitas en la granja
    } else{
        reject("there is no cows on the farm"); // no hay el numero de vaquitas en la granja
    }
});

countCows.then((result)=>{ //buscar documentacion de la palara reservada .then
    console.log(result); //se imprime el resultado
}).catch((err)=>{ //catch para cuando no se cumple la promesa
    console.log(err); // se imprime el reject 
}).finally(()=>{ //que hacer despues de que finaliza la promesa
    console.log('Finally'); // se imprime el finally
})