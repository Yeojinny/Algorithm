function solution(d, budget) {
    
    let arr = d.sort((a, b)=> a - b);
    let answer = 0;
    
    for(let i=0; i<arr.length; i++){
        budget -= arr[i];
       
       if(budget < 0) break;
       answer += 1;
    }
    
    return answer;
    
}