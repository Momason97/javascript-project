"use strict";

const budgetButton = document.querySelector(".budget-button");
const budgetH2 = document.querySelector(".entered-budget");
const budgetInput = document.querySelector(".budget-input");
const budgetForm = document.querySelector(".budget-submit");
const itemsBought = document.querySelector(".budget-form");
const purchaseList = document.querySelector(".list-of-purchases");
const moneySpent = document.querySelector(".money-spent");
let budget = 0;
const expenseItems = [];

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.dir(budgetInput.value);
  budget = budgetInput.value;
  console.log(budget);
  budgetH2.textContent = `Budget: $${budget}`;
});

const newExpense = () => {
  purchaseList.innerHTML = `<tr>
    <th class="item-header">Item</th>
    <th class="item-header">Amount ($)</th>
    <th class="item-header">Category</th>
  </tr>`;
  expenseItems.forEach((item) => {
    const newTR = document.createElement("tr");
    const newItem = document.createElement("td");
    const newPrice = document.createElement("td");
    const newCategory = document.createElement("td");
    newItem.textContent = item.item;
    newPrice.textContent = item.price;
    newCategory.textContent = item.category;
    newTR.append(newItem, newPrice, newCategory);
    purchaseList.append(newTR);
  });
};

itemsBought.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.querySelector("#item").value;
  console.log(item);
  const howMuch = document.querySelector("#how-much").value;
  console.log(howMuch);
  const category = document.querySelector("#category").value;
  console.log(category);
  expenseItems.push({
    item,
    price: howMuch,
    category,
  });
  newExpense();
  document.querySelector("#item").value = "";
  document.querySelector("#how-much").value = "";
  document.querySelector("#category").value = "";
  console.log(expenseItems);
  let counter = 0;
  expenseItems.forEach((item) => {
    counter += item.price;
  });

  moneySpent.textContent = `Money Spent: $${parseInt(counter)}`;
});
