function solution(N, stages) {

    //1번 스테이지부터 N번 스테이지까지 돌면서 확인한다.
    //n번 스테이지 사용자 / n번 이상 사용자 수
    let result = [];
    
    for(let i=1; i<=N; i++){
        let unClear = stages.filter((it) => it == i).length;
        let clear = stages.filter((it) => it >= i).length;
        result.push({stage:i, fail : unClear/clear});
    }
    
    return result.sort((a, b)=> b.fail - a.fail).map((it)=>it.stage);
    

}