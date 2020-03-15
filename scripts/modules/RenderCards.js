export function renderCardsIntheList(cards) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("draggable", true);
    card.setAttribute('id', cards[i].id);
    const title = document.createElement("h5");
    title.innerText = cards[i].title;
    card.setAttribute(`data-card-id`, cards[i].id);
    card.addEventListener("click", () => {
      openDialogModal(card);
    });
    card.appendChild(title);
    fragment.appendChild(card);
    card.addEventListener('dragstart', (e) => {
        dragEvent(e);
    });
  }
  return fragment;
}

function dragEvent(e){
    e.dataTransfer.setData("srcId", e.target.getAttribute('id'));
}