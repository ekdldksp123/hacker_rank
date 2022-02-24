function gridChallenge(grid) {
    let result = 'YES';
    
    grid = grid.map((v,i) => 
        v.split('').sort((x,y)=> x.charCodeAt(0) - y.charCodeAt(0)).join(''));
    
    for(let i=0; i < grid.length; i++) {
        for(let j=0; j< grid[i].length; j++) {
            if(i < grid.length - 1) {
                if(grid[i].charCodeAt(j) > grid[i+1].charCodeAt(j)) {
                    result = 'NO';
                    return result;
                }
            }
        }
    }
    return result;
}
