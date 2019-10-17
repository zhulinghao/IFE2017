function towerBuilder(n) {
  let arr = [], end = n * 2 -1;
  for(let i = 1;i <= n;i ++) {
    let tmp = "", item = i * 2 - 1, x = (end - item)/2;
    for(let j = 1;j <= end;j ++) {
      if(j > x && j <= end - x) tmp += "*";
      else tmp += " ";
    }
    arr.push(tmp)
  }
  return arr;
}

console.log(towerBuilder(5))
towerBuilder(5).forEach(item => {
  console.log(item)
})