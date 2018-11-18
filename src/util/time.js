const moment = require('moment')

export function setTime(){
  return moment().format("YYYY-MM-DD HH:mm")
}

export function getTime(date){
  return moment(date).format("YYYY-MM-DD")
}