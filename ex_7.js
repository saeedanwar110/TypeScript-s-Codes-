/*1. var be redecleared and reassigned.\

functin_scope  or globelly_scope.
not recommended for use in modern TypeScript.
*/
function myfun() {
    var myName = "Ali";
    if (true) {
        var myName_1 = "saeed";
        console.log(myName_1);
    }
    console.log(myName);
}
myfun();
