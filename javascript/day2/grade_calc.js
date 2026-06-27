const readline= require('node:readline/promises');
const {stdin :input,stdout:output}=require('node:process');
const rl=readline.createInterface({input,output});
async function calcgrade(){
    let ans;
   do{
    const marks =await rl.question("Enter you Marks :");
   let m =parseInt(marks);
    switch (true){
        case m>=90:
            console.log("A+");
            break;
        case m>=80:
            console.log("A");
            break;
        case m>=70:
            console.log("B");
            break;
        case m>=60:
            console.log("C");
            break;
        case m<60:
            console.log("fail");
            break;
        default:
            console.log("Invalid Marks");
            break;    
    }
    ans=await rl.question("Do you want to continue (y/n) :");
}
while(ans=='y'||ans=='Y');
rl.close();
}
calcgrade();