const readline=require('node:readline/promises');
const{stdin:input,stdout:output}=require('node:process');
const rl=readline.createInterface({input,output});
async function eligible(){
    const age=await rl.question("Enter your age :");
    let a=parseInt(age);
    const citizen=await rl.question("Are you a citizen (y/n) :");
    let c=citizen.toLowerCase();
    if (a < 18 && c == 'n') {
        console.log("You are not eligible: You are under 18 AND not a citizen!");
    } 
    else if (a < 18) {
        console.log("You are not eligible to vote, you are under 18!");
    } 
    else if (c == 'n') { 
        console.log("You are not eligible to vote, you are not a citizen!");
    } 
    else {
        console.log("You are eligible to vote!");
    }
    rl.close();
}
eligible();