function solution(s, n) {
   //a:97-122 A:65-90
   let arr = [...s].map((it)=> it.charCodeAt())

   let answer = [];
   arr.forEach((it)=>{
    for(let i=1; i<=n; i++){
       if(it === 32) break;
       else if(it === 122) it = 97;
       else if(it === 90) it = 65;
       else it += 1;
   }
       
       answer.push(String.fromCharCode(it)); 
    })
   
     return answer.join("");

    
 

}