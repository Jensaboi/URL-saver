import { constants } from "../consts/constants.js"
import { list } from "../index.js"

export function getList() {
  return JSON.parse(localStorage.getItem("list"))
}

export const SetLocalStorage = (item) =>{
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