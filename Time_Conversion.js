const leftPad = (num) => {
    if(num < 10) return `0${num}`;
    else return `${num}`;
}

function timeConversion(s) {
    const arr = s.split(':');
    let hour;
    if(s.search("P") >= 0) {
        hour = `${parseInt(arr[0]) >= 12 ? leftPad(parseInt(arr[0])) : parseInt(arr[0]) + 12}`;
    } else {
        hour = `${parseInt(arr[0]) === 12 ? '00' : leftPad(parseInt(arr[0]))}`;
    }
    const seconds = arr[2].substring(0,2);
    return `${hour}:${arr[1]}:${seconds}`;
    
}
