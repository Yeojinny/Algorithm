function solution(x) {
    const sum = [...x.toString()].reduce((acc, cur)=> Number(acc) + Number(cur));
    return x % sum === 0 ? true : false;
}