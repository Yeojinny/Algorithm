function solution(dartResult) {
    
    let result = [];
    let score = 0;
 
    for(let i = 0; i < dartResult.length; i++){
        let letter = dartResult[i];
      
        if(!isNaN(letter)){
            if(score === 1 && Number(letter) === 0) score = 10;
            else score = Number(letter);
            continue;
        }
        
        if(letter === 'S'){
            if(dartResult[i+1] && dartResult[i+1] === '*') continue;
            if(dartResult[i+1] && dartResult[i+1] === '#') continue;
        }
      
        if(letter === 'D') {
            score = Math.pow(score, 2);
            if(dartResult[i+1] && dartResult[i+1] === '*') continue;
            if(dartResult[i+1] && dartResult[i+1] === '#') continue;
        }
        else if(letter === 'T') {
            score = Math.pow(score, 3);
            if(dartResult[i+1] && dartResult[i+1] === '*') continue;
            if(dartResult[i+1] && dartResult[i+1] === '#') continue;
        }
        else if(letter === '*') {
            score *= 2;
            if(result.length > 0){
                let last = result.pop();
                result.push(last *= 2);
            }   
        }
        else if(letter === "#") score = -score;
          
      
        result.push(score);
    }
    
    console.log(result);
    return result.reduce((a,b)=> a+b)
    
   
}