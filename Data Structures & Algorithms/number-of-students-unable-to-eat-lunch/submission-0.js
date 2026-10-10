class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let ate = false;
        for(let i=0;i<=sandwiches.length;i++){
            const s = sandwiches[i];
            ate = false;
            for(let j=0;j<students.length;j++){
                if(s==students[j]){
                    ate = true;
                    students = students.filter((v,k)=>k!=j);
                    break;
                }
            }
            if(!ate) return students.length;
        }
        return 0;
    }
}
