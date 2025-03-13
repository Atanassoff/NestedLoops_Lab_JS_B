function combinations(n){
    let counter = 0;
    for(let a = 0; a <= n; a++){
        for(let b = 0; b <= n; b++){
            for(let c = 0; c <= n; c++){
                if(a + b + c === n){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
    
}

combinations(25) // 351
combinations(20) // 231
combinations(5)  //21