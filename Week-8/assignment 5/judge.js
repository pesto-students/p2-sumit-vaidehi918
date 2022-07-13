var findJudge = function(n, trust, indegree = {}, outdegree = {}) {
    if (n === 1 && trust.length === 0) {
        return 1;
    }
    
    trust.forEach(([follower, trusted]) => {
        if(indegree[trusted]){
            indegree[trusted] = indegree[trusted] + 1
        }else{
            indegree[trusted] = 1;
        }
        
        if(outdegree[follower]){
            outdegree[follower] = outdegree[follower] + 1
        }else{
            outdegree[follower] = 1;
        }
    });
    
    const judgeProspects = Object.keys(indegree).filter((ele) => indegree[ele] === n-1);
    const judge = judgeProspects.find((judge) => !Boolean(outdegree[judge]))
    
    return judge || -1
};