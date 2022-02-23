function miniMaxSum(arr) {
    const result = [];
    const combinations = getCombination(arr, 4);
    for(const combi of combinations) {
        result.push(combi.reduce((acc,cur) => acc+cur,0));
    }
    result.sort((x,y) => x-y);
    console.log(`${result[0]} ${result[result.length-1]}`);

}

const getCombination = (arr, number) => {
    const result = [];
    if(number === 1) return arr.map(e => [e]);
    
    arr.forEach((fixed, idx, array) => {
        const rest = array.slice(idx + 1);
        const combinations = getCombination(rest, number - 1);
        const attached = combinations.map(combi => [fixed, ...combi]);
        result.push(...attached);
    }) 
    
    return result;
}
