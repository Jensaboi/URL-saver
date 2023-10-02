import { addUrlToList } from "./list.service.js"
import { list, renderList } from "../index.js"
import { constants } from "../consts/constants.js"

export function initBtns(){
  document.getElementById("save-url-btn").addEventListener("click", () =>{
    addUrlToList()
    renderList()
    constants.urlInput.value = ""
    console.log(list)
  })

  document.getElementById("save-tab-btn").addEventListener("click", () =>{
    constants.urlInput.value = ""
    console.log(list)
  })
 
}