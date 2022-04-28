"use strict";

const budgetButton = document.querySelector(".budget-button");
const budgetH2 = document.querySelector(".entered-budget");
const budgetInput = document.querySelector(".budget-input");
const budgetForm = document.querySelector(".budget-submit");
const itemsBought = document.querySelector(".budget-form");
const purchaseList = document.querySelector(".list-of-purchases");
let budget = 0;
const expenseItems = [
  {
    Item: "",
    Price: "",
    Category: "",
  },
];

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.dir(budgetInput.value);
  budget = budgetInput.value;
  console.log(budget);
  budgetH2.textContent = `Budget: $${budget}`;
});

itemsBought.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.querySelector("#item").value;
  console.log(item);
  const howMuch = document.querySelector("#how-much").value;
  console.log(howMuch);
  const category = document.querySelector("#category").value;
  console.log(category);
  const newTR = document.createElement("tr");
  const newItem = document.createElement("td");
  const newPrice = document.createElement("td");
  const newCategory = document.createElement("td");
  newItem.textContent = item;
  newPrice.textContent = howMuch;
  newCategory.textContent = category;
  newTR.append(newItem, newPrice, newCategory);
  purchaseList.append(newTR);
});
