function solution(arr) {
    const min = Math.min(...arr);
    const result = arr.filter((it)=> it !== min);
    return result.length === 0 ?  [-1] : result;
    
}