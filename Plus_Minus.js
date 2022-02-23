function plusMinus(arr) {
    const positive = (arr.filter(e => e > 0).length/arr.length).toFixed(6);
    console.log(positive);
    const negative = (arr.filter(e => e < 0).length/arr.length).toFixed(6);
    console.log(negative);
    const zero = (arr.filter(e => e === 0).length/arr.length).toFixed(6);
    console.log(zero);
}
