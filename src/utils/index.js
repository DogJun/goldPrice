/*
 * @Author: DogJun
 * @Date: 2018-06-13 19:11:22
 * @Last Modified by: DogJun
 * @Last Modified time: 2018-06-24 23:50:59
 */
/**
 *
 * @param {Number} num 未来天数
 * @return {Array} arr 未来日期数组
 */
 export function getDates (num) {
  let arr = []
  let current = new Date()
  for (let i = 0; i < num; i++) {
    current.setDate(current.getDate() + 1)
    arr.push({'active': false, 'date': `${(current.getMonth() + 1)}月${current.getDate()}日`})
  }
  return arr
}
