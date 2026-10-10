class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // put cars in order
        const timeMap = new Map();
        for(let i=0;i<position.length;i++){
            const distance = target - position[i];
            const time = distance/speed[i];
            timeMap[position[i]] = time;
        }
        position = position.sort((a, b) => a - b);

        //fleets
        let fleets = 0;
        let lastTime = 0;
        for(let i=position.length-1;i>=0;i--){
            const time = timeMap[position[i]];
            if(time>lastTime){
                fleets++;
                lastTime = time;
            }
        }
        return fleets;
    }
}
