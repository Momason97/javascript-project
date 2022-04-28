"use strict";

const budgetButton = document.querySelector(".budget-button");
const budgetH2 = document.querySelector(".entered-budget");
const budgetInput = document.querySelector(".budget-input");
const budgetForm = document.querySelector(".budget-submit");
let budget = 0;
const expenseItems = [
  {
    itemPurchased: "Red bull",
    price: 4,
    category: "food",
  },
];

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.dir(budgetInput.value);
  budget = budgetInput.value;
  console.log(budget);
  budgetH2.textContent = `Budget: $${budget}`;
});
