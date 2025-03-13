function building(floor, room){
    let sign = "";
    let row = "";
    for(let i = floor; i >= 1; i--){
        for(let j = 0; j < room; j++){
            if(i === floor){sign = "L";}
            else if(i % 2 === 1){sign = "A";}
            else if(i % 2 === 0){sign = "O";}
            row += `${sign}${i}${j} `;
        }
        console.log(row);
        row = "";
    }
}

building(6, 4)
//L60 L61 L62 L63 
//A50 A51 A52 A53 
//O40 O41 O42 O43 
//A30 A31 A32 A33 
//O20 O21 O22 O23
//A10 A11 A12 A13 
building(9, 5)
//L90 L91 L92 L93 L94 
//O80 O81 O82 O83 O84 
//A70 A71 A72 A73 A74 
//O60 O61 O62 O63 O64 
//A50 A51 A52 A53 A54 
//O40 O41 O42 O43 O44 
//A30 A31 A32 A33 A34 
//O20 O21 O22 O23 O24 
//A10 A11 A12 A13 A14 
building(4, 4) 
//L40 L41 L42 L43 
//A30 A31 A32 A33 
//O20 O21 O22 O23 
//A10 A11 A12 A13