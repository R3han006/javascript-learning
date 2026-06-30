const realine=require('node:readline/promises');
const {stdin:input,stdout:output}=require('node:process');
const rl=realine.createInterface({input,output});
async function pallindrome(){
    const inp=await rl.question("Enter a string :");
    let sto=inp.toLowerCase();
    let rev="";
    for(let i=sto.length-1;i>=0;i--){
        rev+=sto[i];
    }

    if (sto==rev){
        console.log(`The string "${inp}" is a palindrome.`);
    } else {
        console.log(`The string "${inp}" is not a palindrome.`);
    }

    rl.close();
}
pallindrome();