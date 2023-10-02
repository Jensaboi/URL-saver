import { constants } from "../consts/constants.js"

export let list = (getList()) ? getList() : []

export function getList() {
  return JSON.parse(localStorage.getItem("list"))
}

export let SetLocalStorage = (item) =>{
  localStorage.setItem("list", JSON.stringify(item))
}

export function addUrlToList(){
  if(constants.urlInput.value){
    list.push(constants.urlInput.value)
  }
  SetLocalStorage(list)
}

export function addCurrentTab(){
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    console.log("url=", url);
    list.push(url);
    SetLocalStorage(list)
  });
}

export function removeListItem(){

}

export function emptyList(){
   list = []
    SetLocalStorage(list)
    renderList()
}

export function renderList(){ 
  document.getElementById("url-list").innerHTML = ""
  for(let i = 0; i < list.length; i++){
    let listSak = document.createElement("li")
    listSak.className = "list-item"
    listSak.innerHTML = `<a href="${list[i]}">${list[i]}</a>`
    document.querySelector("#url-list").appendChild(listSak)
  }
}