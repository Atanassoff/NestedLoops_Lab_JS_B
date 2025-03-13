function sumTwoNumbers(n1, n2, magic){
    let count = 0;
    let result = 0; 
    let found = false;
    for(let i = n1; i <= n2; i++){
        for(let j = n1; j <= n2; j++){
            count++
            result = i + j;
            if(result === magic){
                found = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${result})`);
                i = n2; j = n2;
            }
        }
    }
    if(!found){
        console.log(`${count} combinations - neither equals ${magic}`);
    }
}

sumTwoNumbers(1, 10, 5) 
//Combination N:4 (1 + 4 = 5)
sumTwoNumbers(88, 888, 1000) 
//Combination N:20025 (112 + 888 = 1000)  
sumTwoNumbers(23, 24, 20) 
//4 combinations - neither equals 20 
sumTwoNumbers(88, 888, 2000) 
//641601 combinations - neither equals 2000

