function solution(s) {
    let arr = s.split(" ");
    let result = [];
  
    arr.forEach((word)=>{
        let test = [...word].map((it, idx)=> idx%2 === 0 ? it.toUpperCase():it.toLowerCase());
        result.push(test.join(""));
    })
    
    return result.join(" ");
}