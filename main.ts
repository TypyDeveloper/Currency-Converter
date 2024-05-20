import inquirer from "inquirer";

let pkr2:any = {
    
    USD :0.0036 ,
    EURO :0.0033,
    Riyal : 0.013,

}

let currency = await inquirer.prompt(
   [ {
     name : "from",
     message : "Which currency you want to convert",
     type : "list",
     choices : ["PKR","USD","EURO","Riyal"]   
    },
    {
        name : "to",
        message : "To?",
        type : "list",
        choices : ["PKR","USD","EURO","Riyal"]  
    },
    {
    name : "amount",
    type : "number",
    message : "Enter your amount"
    }
    
])
let fromcurrency = pkr2[currency.from];
let  tocurrency = pkr2[currency.to];
let amount2 = currency.amount * tocurrency;
console.log(amount2);



































// // For convert PKR to other currency
// if(currency.from === "PKR" ){
//     let pkr = await inquirer.prompt(
//         {
//             name : "Q1",
//             message : "Enter your amount",
//             type : "number"
//         })
//         if(currency.to === "USD") {
//             let convert2 =pkr.Q1 * pkr2.USD;
//             console.log(`Your converted amount is ${convert2}`);
//         }
//         else if(currency.to === "EURO" ){
//             let convert1 = pkr.Q1 * pkr2.EURO;
//             console.log(`Your converted amount is ${convert1}`);
//         }
//         else if ( currency.to === "Riyal"){
//             let convert3 =pkr.Q1 * pkr2.Riyal;
//             console.log(`Your converted amount is ${convert3}`);
//         }
    


















