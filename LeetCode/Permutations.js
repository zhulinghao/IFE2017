function permut(arr, partial) {
  if(arr.length === 0) {
    return [partial].map(item => item.join(''))
  };
  let listSol = [];
  for(let i = 0;i < arr.length;i ++) {
    var endRepeated = i;
    while(endRepeated < arr.length && arr[i] === arr[endRepeated]) {
        endRepeated++;
    }
    let arrayWithoutI = arr.slice(0,i).concat(arr.slice(i + 1, arr.length));
    let partialSol = partial.concat(arr[i]);
    let sol = permut(arrayWithoutI, partialSol);
    if (sol.length > 0) {
      listSol = listSol.concat(sol)
    }
    i = endRepeated - 1;
  }
  return listSol;
}
function permutations(str) {
  let arr = str.split('');
  return permut(arr, [])
}
console.log(permutations('aabb'))