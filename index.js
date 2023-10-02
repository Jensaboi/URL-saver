import { constants } from "./consts/constants.js";

import { initBtns } from "./service/init.service.js";

import { getList } from "./service/list.service.js";

export let list = (getList()) ? getList() : []

export function renderList(){ 
  constants.listEl.innerHTML = ""
  for(let i = 0; i < list.length; i++){
    let listSak = document.createElement("li")
    listSak.className = "list-item"
    listSak.textContent = `${list[i]}`
    document.querySelector("#url-list").appendChild(listSak)
  }
}

renderList()
initBtns()