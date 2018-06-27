/*
 * @Author: DogJun
 * @Date: 2018-06-13 19:11:22
 * @Last Modified by: DogJun
 * @Last Modified time: 2018-06-27 17:48:02
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
/**
 * @desc 不足几位小数补0
 * @param {Number} number 数字
 * @param {Number} n 几位小数
 * @return {String} str 返回补0后的字符串
 */
export function addZeros (number, n) {
  let str = number.toString().padStart(2, '0')
  return str
}
/**
 * @desc 判读当前时间是否在某个时间段内
 * @param {String} beginTime 开始时间
 * @param {String} endTime 结束时间
 * @return {Boolean} 是/否
 */
export function timeRange (beginTime, endTime) {
  var strb = beginTime.split (':')
  if (strb.length !== 2) {
    return false
  }

  var stre = endTime.split (':')
  if (stre.length !== 2) {
    return false
  }

  var b = new Date ()
  var e = new Date ()
  var n = new Date ()

  b.setHours (strb[0])
  b.setMinutes (strb[1])
  e.setHours (stre[0])
  e.setMinutes (stre[1])

  if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
    return true
  } else {
    console.log(`当前时间是: ${n.getHours ()}:${n.getMinutes ()},不在该时间范围内!`)
    return false
  }
}
