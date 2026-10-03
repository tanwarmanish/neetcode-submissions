class Solution {
 row(s,n){
  return s[n];
}

 column(s,n){
  return s.map(r=>r[n]);
}

 square(s,n){
  const values = [];
  for(let i=0;i<3;i++){
    let r = 3*(n/3 | 0) + i;
    for(let j=0;j<3;j++){
      let c = j + 3*(n%3);
      values.push(s[r][c]);
    }
  }
  return values;
}

 hasDuplicates(values){
  let filled = 0;
  let unique = new Set();
  for(let value of values){
    if(value!='.'){
      filled ++;
      unique.add(value);
    }
  }
  return filled!=unique.size;
}
    isValidSudoku(board) {
        for(let i=0;i<9;i++){
            let row = this.row(board,i);
            let column = this.column(board,i);
            let square = this.square(board,i);
            if(this.hasDuplicates(row)) return false;
            if(this.hasDuplicates(column)) return false;
            if(this.hasDuplicates(square)) return false;
        }
            return true;
    }
}
