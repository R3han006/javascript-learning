const readline=require("node:readline/promises");
const{stdin:input,stdout:output}=require("node:process");
const rl=readline.createInterface({input,output});
async function mult_table(){
    const num= await rl.question("Enter the multiplication table number: ");
    let num1=parseInt(num);
    for(let i=1;i<=10;i++){
        console.log(`${num1}*${i}=${num1*i}`);
        
    }
    rl.close();
}mult_table();