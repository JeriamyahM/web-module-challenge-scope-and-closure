1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

// function addSix(x){
//     let addition = x
//     function addition(){
//         return addition = x + 6
    
//     }
//     return addition
// }
// console.log(addSix(10));

function addSix(number){
  
    const math = number + 6;
    
    function equation(){
      
        return math ;
 
    }
  
    return equation();
}

const addSix1 = addSix(10);
const addSix2 = addSix(21);

console.log(addSix1);
console.log(addSix2);

