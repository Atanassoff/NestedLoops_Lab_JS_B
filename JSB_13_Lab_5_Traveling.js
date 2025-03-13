function traveling(input){
    let i = 0;
    command = input[0];
    while(command !== "End"){
        let sum = 0;
        let country = command;
        i++;
        let budget = Number(input[i]);
        i++;
        while(sum < budget){
            sum += Number(input[i]);
            i++;
        }
        console.log(`Going to ${country}!`);
        command = input[i];
    }
}


// function traveling(input){
//     let country = input[0];
//     let budget = input[1];
//     let money = 0;
//     for(let i = 2; i < input.length; i++){
//         money += Number(input[i]);
//         if(money >= budget){console.log(`Going to ${country}!`);
//         country = input[i + 1];
//         budget = Number(input[i + 2]);
//         money = 0;
//         i += 2;
//         }
//     }
// }

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240",
    "Spain", "1200", "300", "500", "193", "423", "End"])
    //Going to Greece! 
    //Going to Spain! 
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", 
        "Portugal", "1450", "400", "400", "200", "300", "300", 
        "Egypt", "1900", "1000", "280", "300", "500", "End"]) 
    //Going to France! 
    //Going to Portugal! 
    //Going to Egypt!