import { constants } from "../consts/constants.js"
import { list } from "../index.js"

export function getList() {
  return JSON.parse(localStorage.getItem("list"))
}

export function addUrlToList(){
  if(constants.urlInput.value){
    list.push(constants.urlInput.value)
  }
  localStorage.setItem("list", JSON.stringify(list))
}