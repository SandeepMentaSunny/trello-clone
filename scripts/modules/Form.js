export function addForm(index) {
  const fragment = document.createDocumentFragment();
  const addForm = document.createElement("div");
  addForm.classList.add("form");
  addForm.setAttribute("add-form-id", index);
  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea-form");
  textarea.setAttribute('placeholder', 'Enter a title for this card...')
  const ul = document.createElement("ul");
  const liOne = document.createElement("li");
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-btn");
  addBtn.setAttribute("add-btn-id", index);
  const liTwo = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.setAttribute("remove-btn-id", index);
  removeBtn.innerHTML = '<i class="fas fa-times"></i>';
  addBtn.innerText = "Add Card";
  liOne.appendChild(addBtn);
  liTwo.appendChild(removeBtn);
  addForm.appendChild(textarea);
  ul.appendChild(liOne);
  ul.appendChild(liTwo);
  addForm.appendChild(textarea);
  addForm.appendChild(ul);
  fragment.appendChild(addForm);
  addBtn.addEventListener("click", () => {
    addCardToList(index);
  });
  removeBtn.addEventListener("click", () => {
    removeCardFromList();
  });
  return fragment;
}

function addCardToList(i) {}

export const lists = [
  {
    id: "list-1",
    title: "Backlog",
    cards: [
      {
        id: "card-1",
        title: "Add Employment form in Personal Loan(PL) creation",
        description: "At step-7 of the application creation add Employment"
      },
      {
        id: "card-2",
        title:
          "Add Address form in Personal Loan(PL) creation contains Present & Residential Address",
        description: "At step-3 of the application creation add address"
      },
      {
        id: "card-3",
        title: "Add Employment form in Personal Loan(PL) creation",
        description: "At step-7 of the application creation add Employment"
      },
      {
        id: "card-4",
        title:
          "Add Address form in Personal Loan(PL) creation contains Present & Residential Address",
        description: "At step-3 of the application creation add address"
      },
      {
        id: "card-5",
        title: "Add Employment form in Personal Loan(PL) creation",
        description: "At step-7 of the application creation add Employment"
      },
      {
        id: "card-6",
        title:
          "Add Address form in Personal Loan(PL) creation contains Present & Residential Address",
        description: "At step-3 of the application creation add address"
      },
      {
        id: "card-7",
        title: "Add Employment form in Personal Loan(PL) creation",
        description: "At step-7 of the application creation add Employment"
      },
      {
        id: "card-8",
        title:
          "Add Address form in Personal Loan(PL) creation contains Present & Residential Address",
        description: "At step-3 of the application creation add address"
      },
      {
        id: "card-9",
        title: "Add Employment form in Personal Loan(PL) creation",
        description: "At step-7 of the application creation add Employment"
      },
      {
        id: "card-10",
        title:
          "Add Address form in Personal Loan(PL) creation contains Present & Residential Address",
        description: "At step-3 of the application creation add address"
      },
      {
        id: "card-11",
        title: "Add Employment form in Personal Loan(PL) creation",
        description: "At step-7 of the application creation add Employment"
      },
      {
        id: "card-12",
        title:
          "Add Address form in Personal Loan(PL) creation contains Present & Residential Address",
        description: "At step-3 of the application creation add address"
      }
    ]
  },
  {
    id: "list-2",
    title: "Development",
    cards: []
  },
  {
    id: "list-3",
    title: "Incode Review",
    cards: []
  },
  {
    id: "list-4",
    title: "In Testing",
    cards: []
  },
  {
    id: "list-5",
    title: "Done",
    cards: []
  },
];
