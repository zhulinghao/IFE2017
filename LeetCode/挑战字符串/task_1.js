// 无重复字符串的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subStr = '', maxlength = 0;
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        let findIndex = subStr.indexOf(item);
        //  如果findIndex为0执行if条件下的语句
        if (~findIndex) {
            subStr = subStr.substring(findIndex + 1);
        }
        subStr += item;
        if (subStr.length > maxlength) maxlength = subStr.length;
    }
    return maxlength;
};

console.log(lengthOfLongestSubstring(''));

