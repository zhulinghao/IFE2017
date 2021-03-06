/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var arr = s.split('');//转成数组,直接对s进行操作并不会缩短执行时间
  var start = 0, end = 0;//记录回文串起始
  for(let i = 0; i< arr.length; i++){//遍历s
      for(let j = 1; j <= i && i + j < arr.length; j++){//注意边界，i-j不超出左边界，i+j不超出右边界
          if(arr[i-j] == arr[i+j]){//对称字符相等
              if( 2 * j > end - start){//判断是不是最长
                  start = i - j;
                  end = i + j;
              }
              else continue;//不是就跳下次循环
          }
          else break;//对称字符一旦不同，跳出循环
      }
      if(i < arr.length - 1 && arr[i] == arr [i+1]){//回文串长度为偶数时
          if(end - start < 2){//在上面if里已经有对称相同的字符了，就需要看需不需要改写start、end
              start = i;
              end = i + 1;
          }
          for(let j = 1; j <= i && i + j +1 < arr.length; j++){//循环向两边扩散，注意边界
              if(arr[i-j] == arr[i +j +1]){//对称字符相同
                  if(2 * j + 2 > end - start +1){//判断是不是最长
                      start = i - j;
                      end = i + j + 1;
                  }
                  else continue;//不是就跳下次循环
              }
              else break;//对称字符一旦不同，跳出循环
          }
      }
  }
  return s.substring(start,end + 1);//返回最长回文子串
};