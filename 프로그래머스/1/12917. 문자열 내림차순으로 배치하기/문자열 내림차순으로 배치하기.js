function solution(s) {
   
    const arr = [...s].sort((a, b)=> a.charCodeAt() - b.charCodeAt());
    return arr.reverse().join("");
 
}