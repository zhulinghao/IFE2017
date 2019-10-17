// 简化路径
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.split('/');
  let arr = [];
  for(let i = 0;i < path.length;i ++) {
    let item =  path[i];
    if (item === "..") {
      arr.pop();
    } else if(item !== '.' && item) {
      arr.push(item)
    }
  }
  return `/${arr.join('/')}`;
};

console.log(simplifyPath("/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///"))