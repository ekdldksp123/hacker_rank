function processData(input) {
    const queries = input.split('\n');
    const stack = [];
    
    for(let i=1; i<=parseInt(queries[0]); i++) {
        const query = queries[i].split(' ');
        switch(parseInt(query[0])){

        case 1: stack.length !== 0 ? stack.push(`${stack[stack.length-1] + query[1]}`) : stack.push(query[1]);
            break;
        case 2: 
            const str = stack[stack.length-1];
            stack.push(str.substring(0, str.length-parseInt(query[1])));
            break;
        case 3:
            console.log(stack[stack.length-1].charAt(parseInt(query[1]-1)));
            break;
        case 4:    
            stack.pop();
            break;
        }
    }
} 
