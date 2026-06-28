const readline=require("node:readline/promises");
const {stdin:input,stdout:output}=require('node:process');
const rl=readline.createInterface({input,output});
async function pattern(){
        const num=await rl.question("Enter a number: ");
        let n=parseInt(num);
        for(let i=1;i<=n;i++){
            console.log("*".repeat(i));
        }
        rl.close();
    }
pattern();