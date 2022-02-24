function caesarCipher(s, k) {
    k = k%26;
    const upperCase = Array(26).fill().map((v,i) => i+65);
    const lowerCase = Array(26).fill().map((v,i) => i+97);
    const result = [];
    
    for(let i = 0; i < s.length; i++) {
        if(upperCase.includes(s[i].charCodeAt(0))) {
            const code = s[i].charCodeAt(0) + k;
            if(upperCase.includes(code)) result.push(String.fromCharCode(code));
            else result.push(String.fromCharCode(code-26));
        } else if(lowerCase.includes(s[i].charCodeAt(0))) {
            const code = s[i].charCodeAt(0) + k;
            if(lowerCase.includes(code)) result.push(String.fromCharCode(code));
            else result.push(String.fromCharCode(code-26));
        } else result.push(s[i]);
    }
    
    return result.join('');
}
