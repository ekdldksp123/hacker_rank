function diagonalDifference(arr) {
    let left = 0, right = 0;
    let lcount = 0;
    
    for(let i=0; i < arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i].length > 1 && j === lcount) {
                left += arr[i][lcount];
                right += arr[i][arr[i].length - lcount - 1];
            }
        }
        lcount++;
    }
    return Math.abs(left - right);
}
