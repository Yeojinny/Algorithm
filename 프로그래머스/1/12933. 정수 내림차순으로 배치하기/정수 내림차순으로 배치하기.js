function solution(n) {
   return Number([...n.toString()].map((it)=> Number(it)).sort((a, b) => b - a).join(''))
}