const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
async function array(){
    let ar=[];
    let n= parseInt( await rl.question('Enter the size of array :'));
    for (let i=0;i<n;i++){
        let inp= await rl.question('Enter the element :');
        let num=parseInt(inp);
        ar.push(num);
    }   
    return ar;
}
function max(ar){
    let max=ar[0];
    for(let i=0;i<ar.length;i++){ 
        if (ar[i]>max){
            max=ar[i];
        }
    }
    return max;
}
function rev(ar){
    let rev=[];
    for(let i=ar.length-1;i>=0;i--){
        rev.push(ar[i]);
    }
    return rev;
}

function sun(ar){
    let sum=0;
    for(let i=0;i<ar.length;i++){
        sum+=ar[i];
    }
    return sum;
}
async function main() {
    let ar = await array(); 
    
    let m = max(ar);
    let r = rev(ar);
    let s = sun(ar); 
    
    console.log("The maximum number is : " + m);
    console.log("The reverse of array is : " + r);
    console.log("The sum of array is : " + s);   
    
    rl.close();
}

main();