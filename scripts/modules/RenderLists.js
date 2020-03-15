import { renderCardsIntheList } from "./RenderCards.js";

export function renderList(lists) {
  let listFragment = document.createDocumentFragment();
  for (let i = 0; i < lists.length; i++) {
    const addCard = document.createElement("div");
    addCard.classList.add("add-card-list");
    addCard.innerText = "+ Add a card";
    let listWrapper = document.createElement("div");
    listWrapper.classList.add("list-wrapper");
    const list = document.createElement("div");
    list.setAttribute("data-list-id", lists[i].id);
    list.classList.add("list");
    const listHeader = document.createElement("div");
    listHeader.classList.add("list-header");
    const listHeaderTitle = document.createElement("div");
    listHeaderTitle.classList.add("list-header-title");
    listHeaderTitle.innerText = lists[i].title;
    const listCards = document.createElement("div");
    listCards.classList.add("list-cards");
    const cards = lists[i].cards || [];
    const cardsNodes = renderCardsIntheList(cards);
    listCards.appendChild(cardsNodes);
    listHeader.appendChild(listHeaderTitle);
    list.appendChild(listHeader);
    list.appendChild(listCards);
    list.appendChild(addCard);
    listWrapper.appendChild(list);
    listFragment.appendChild(listWrapper);
  }
  return listFragment;
}

function openDialogModal(card) {
  console.log(card);
}