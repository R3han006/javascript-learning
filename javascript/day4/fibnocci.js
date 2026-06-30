const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
async function fibno(){
    const n = parseInt(await rl.question("Enter the number of terms: "));
    let a=0,b=1,next;
    for (let i=0;i<n;i++){
        console.log(a);
        next=a+b;
        a=b;
        b=next;
}
}
fibno();
