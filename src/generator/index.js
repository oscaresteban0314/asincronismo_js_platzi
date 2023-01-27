/* function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
const g= gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
 */
function* iterate (array){
    for (let value of array){
        yield value;
    }
}
const arrayex =['oscar_1', 'omar_2', 'daniel_3', 'lucia_5', 'francisco_4']
const it =iterate(arrayex);
for(let i=0; i<=(arrayex.length-1); i++){
    console.log(it.next().value);
}