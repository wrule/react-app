/**
 * 来自 https://github.com/darkskyapp/string-hash/blob/master/index.js
 * @param str 需要进行hash计算的字符串
 */
export default function hash(str: string): number {
  let hash = 5381, i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0;
}
