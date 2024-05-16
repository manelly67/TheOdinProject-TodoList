export default

function sendDataToLocal(arg1,arg2) {

/* arg1 is the name of the key - arg2 is the array with the data */

let key = arg1;
let dataToSend = arg2;

console.log(key);
console.log(dataToSend);

localStorage.setItem(key, JSON.stringify(dataToSend));


   
}