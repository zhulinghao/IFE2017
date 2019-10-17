/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  var len = s1.length, index = -1, hash = {}, count = len;
  setHash();

  function setHash() {
    hash = {};
    for (var i = 0; i < len; i++) {
      if (!hash[s1[i]]) {
        hash[s1[i]] = 1
      } else {
        hash[s1[i]]++;
      }
    }
  }

  console.log(hash)

  for (var i = 0; i < s2.length; i++) {
    var letter = s2[i];
    if (hash[letter] == undefined) {

      // 初始化
      setHash();
      count = len;
      index = -1;
    } else {
      if (hash[letter] >= 1) {
        hash[letter]--;
        count--;
        if (index == -1) {
          index = i
        }
        if (count == 0) {
          return true;
        }
      } else {
        // console.log(index, i, hash)
        // 某个字母多个一个
        for (var j = index; j < i; j++) {
          if (s2[j] == letter) {
            index = j + 1;
            break;
          } else {
            hash[s2[j]]++;
            count++;
          }
        }
      }
    }
  }
  return false
};
console.log(checkInclusion('ba', 'abcc'))