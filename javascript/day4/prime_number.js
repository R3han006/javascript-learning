const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
async function prime(){
    const inp= await rl.question('Enter a number :');
    let num=parseInt(inp);
    let isprime=true;
    if (num <=1){
        isprime=false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isprime=false;
                break;
            }
        }
    }
    if (isprime) {
        console.log(num + " is a prime number");
    } else {
        console.log(num + " is not a prime number");
    }
    rl.close();
 }

prime();