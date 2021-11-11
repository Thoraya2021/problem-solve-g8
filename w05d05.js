/*function highestRank(arr){
    return arr.sort((a,b)=>arr.filter(index=>index===a).length.arr.filter(
    index=>index===b).length).pop()
    }
*/


function highestRank(arr) {
    b = {};
    (max = []), (maxi = 0);
    for (let k of arr) {
      if (b[k]) b[k]++;
      else b[k] = 1;
      if (maxi < b[k]) {
        max = k;
        maxi = b[k];
      }
    } return;
  }
  