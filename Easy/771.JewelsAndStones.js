var numJewelsInStones = function(jewels, stones) {
    let set = new Set (jewels);
    let counter = 0;
    for(let i = 0; i < stones.length; i++){
        if(set.has(stones[i])){
            counter++;
        }
    }
    return counter;
};
//https://leetcode.com/problems/jewels-and-stones/