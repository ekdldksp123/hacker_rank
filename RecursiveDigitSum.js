function superDigit(n, k) {
    
    let count = 0;
    while(count < k) {
        n = `${n.split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur),0)}`;
        if(n.length === 1) return parseInt(n);
        count++;
    }
    return parseInt(n);
}
