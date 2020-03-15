import { addForm, lists } from "./modules/Form.js";
import { renderList } from './modules/RenderLists.js';


let headerTitles;
let addCardButttons;
let cardLists;
let formCards;
let board = document.querySelector('.board');
let listWrappers;

document.addEventListener("DOMContentLoaded", () => {
  const renderedLists = renderList(lists);
  board.appendChild(renderedLists);
  headerTitles = document.querySelectorAll(".list-header-title");
  for (let i = 0; i < headerTitles.length; i++) {
    headerTitles[i].addEventListener("click", function() {
      editHeader(headerTitles[i]);
    });
    headerTitles[i].addEventListener("blur", function() {
      saveHeaderTitle(headerTitles[i]);
    });
  }
  addCardButttons = document.querySelectorAll(".add-card-list");
  for (let i = 0; i < addCardButttons.length; i++) {
    addCardButttons[i].setAttribute("add-btn-id", i);
    addCardButttons[i].addEventListener("click", function() {
      addFormCard(addCardButttons[i], i);
    });
  }
  board.addEventListener('dragover', function(e){
    e.preventDefault();
  });
  
  board.addEventListener('drop', function(event){
    event.preventDefault();
    let target = event.target;
    let srcId = event.dataTransfer.getData('srcId');
    target.appendChild(document.getElementById(srcId));
  });
});
function editHeader(event) {
  event.contentEditable = true;
}

function saveHeaderTitle(event) {
  console.dir(event);
}

function addFormCard(addBtn, index) {
  let form;
  if (formCards === undefined) {
    form = addForm(1);
  } else {
    let length = formCards.length;
    form = addForm(++length);
  }
  cardLists = document.querySelectorAll(".list-cards");
  cardLists[index].appendChild(form);
  formCards = document.querySelectorAll(".form");
  if (addBtn.classList.contains("hide")) {
    addBtn.classList.remove("hide");
  } else {
    addBtn.classList.add("hide");
  }
}
function dropEvent(e){
    e.preventDefault();
    let data = e.dataTransfer.getData();
}