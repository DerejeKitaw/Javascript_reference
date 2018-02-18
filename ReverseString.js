// function reverseString(str){
//     return str.split('').reverse().join('');
// }
function reverseString(str){
    let revString='';
for (let i = str.length -1; i >= 0; i--) {
     revString = revString + str[i];
    
}
    return revString;
}

const output = reverseString('Hellow');
console.log(output);