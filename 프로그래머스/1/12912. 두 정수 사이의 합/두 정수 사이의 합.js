function solution(a, b) {
    
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let add = min;
    let result = min;
    while(add !== max){
        add += 1;
        result += add;
    }
    
    return result;
}