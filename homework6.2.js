//ЗАВДАННЯ 2

function pow(x, y){
    let result = x;
    for (i=1; i<y; i++) {
result = result*x
    };
    if(y===0){
        result = 1;
    }
    console.log(result);
}

pow(3, 5);