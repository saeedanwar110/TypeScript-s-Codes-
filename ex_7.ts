/*1. var be redecleared and reassigned.\

functin_scope  or globelly_scope.
not recommended for use in modern TypeScript.
*/



function myFun(){
let myName: string = "Ali";


if(true){

    let myName: string = "saeed";
    console.log(myName);
}

console.log(myName);

}

myfun();