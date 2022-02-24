function processData(input) {
    const result = [];
    const arr = input.split('\n');
    
    for(let i=1; i <= parseInt(arr[0]); i++) {
        const query = arr[i].split(' ');
        
        switch(parseInt(query[0])) {
        case 1: result.push(parseInt(query[1]));
            break;
        case 2: result.shift();
            break;
        case 3: console.log(result[0]);
            break;
        }
    }
}
