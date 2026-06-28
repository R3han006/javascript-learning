const readline= require("node:readline/promises");
const {stdin:input,stdout:output}=require("node:process");
const rl=readline.createInterface({input,output});
async function factorial(){
    const num=await rl.question("Enter a number:");
    let n=parseInt(num);
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    console.log("Factorial of", n, "is", fact);
    rl.close();
}
factorial();
