function isBalanced(s) {
    if(s.length % 2 !== 0) return 'NO';
    
    const map = { '(':')', '{':'}', '[':']' };
    const arr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(arr.length > 0 && map[arr[arr.length-1]] === s[i]) {
            arr.pop();
        } else {
            arr.push(s[i]);
        } 
    }
    return arr.length === 0 ? 'YES' : 'NO';
}
