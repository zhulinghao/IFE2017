// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return '';
//     function removeRepeat(msg){  
//         var res=[];  
//         var arr=msg.split("");  
//         for(var i=0;i<arr.length;i++){  
//             if(res.indexOf(arr[i])==-1){  
//                 res.push(arr[i]);  
//             }  
//         }  
//         return res.join("");  
//     }  
//     let pubs = [];
//     let pubStr = '';
//     let minLength = strs.sort((a, b) => { return a.length - b.length })[0].length;
//     for(let i = 0;i < strs.length; i ++) {
//         for(let j = 0;j < minLength;j ++) {
//             if (!pubs[j]) {
//                 pubs[j] = (strs[i][j]);
//             } else {
//                 pubs[j] += (strs[i][j]);
//             }
//         }
//     }
//     canBreak:
//     for(let n = 0;n < pubs.length; n++) {
//         let tmp = removeRepeat(pubs[n]);
//         if (tmp.length !== 1) break canBreak;
//         pubStr = pubStr + tmp;
//     }
//     return pubStr;
// };
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let res = '';
    for(let i = 0;i < strs[0].length;i ++) {
        let char = strs[0][i];
        for(let j = 1;j < strs.length;j ++) {
            if(char !== strs[j][i]) return res;
        }
        res += char;
    }
    return res;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))