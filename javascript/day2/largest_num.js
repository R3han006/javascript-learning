const readline=require("node:readline/promises)");
const {stdin:input,stdout:output}=require("node:process");
const rl=readline.createInterface({input,output});
async function largest(){
    const num1=await rl.question("Enter the first number:");
    const num2=await rl.question("Enter the second number:");
    const num3=await rl.question("Enter the third number:");

    let largest=num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }

    console.log(`The largest number is: ${largest}`);
    rl.close();
}
largest();