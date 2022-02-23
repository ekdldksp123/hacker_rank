function countingSort(arr) {
    const result = Array(arr.length).fill(0);
    for(let i=0; i < arr.length; i++) {
        result[arr[i]] ++;
    }
    return result.filter((v,i,arr) => v !== 0);
}
