import { addUrlToList, addCurrentTab, renderList, emptyList, list } from "./list.service.js"
import { constants } from "../consts/constants.js"

export function initBtns(){
  document.getElementById("save-url-btn").addEventListener("click", () =>{
    addUrlToList()
    renderList()
    constants.urlInput.value = ""
  })

  document.getElementById("save-tab-btn").addEventListener("click", () =>{
    addCurrentTab()
    renderList()
    constants.urlInput.value = ""
  })
 
  document.getElementById("delete-btn").addEventListener("dblclick", () =>{
    emptyList()
  })
}