"use strict";

const budgetButton = document.querySelector(".budget-button");
const budgetH2 = document.querySelector(".entered-budget");
const budgetInput = document.querySelector(".budget-input");
const budgetForm = document.querySelector(".budget-submit");
const itemsBought = document.querySelector(".budget-form");
const purchaseList = document.querySelector(".list-of-purchases");
const moneySpent = document.querySelector(".money-spent");
const updatedBudget = document.querySelector(".updated-budget");
const totalBills = document.querySelector(".total-bills");
const totalFood = document.querySelector(".total-food");
const totalClothes = document.querySelector(".total-clothes");
const totalEntertain = document.querySelector(".total-entertain");
const alertContainer = document.querySelector(".alert-container");
const closePopUp = document.querySelector(".close-popup");
const budgetDiv = document.querySelector(".starting-budget");
const moneyDiv = document.querySelector(".total-money");
const updatedDiv = document.querySelector(".new-budget");
let budget = 0;
let counter = 0;
let expenseItems = [];

budgetForm.addEventListener("submit", (e) => {
  budgetDiv.innerHTML = `<h3 class="h3 entered-budget">Budget:</h3>`;
  e.preventDefault();
  console.dir(budgetInput.value);
  budget = budgetInput.value;
  console.log(budget);
  // budgetH2.innerHTML = `Budget: <span class="numbers">$${budget}</span>`;
  const budgetParagraph = document.createElement("p");
  budgetParagraph.innerHTML = `$${budget}`;
  budgetDiv.append(budgetParagraph);
});

const newExpense = () => {
  purchaseList.innerHTML = `<tr>
    <th class="item-header">Item</th>
    <th class="item-header">Amount ($)</th>
    <th class="item-header">Category</th>
  </tr>`;
  expenseItems.forEach((item, index) => {
    const newTR = document.createElement("tr");
    const newItem = document.createElement("td");
    const newPrice = document.createElement("td");
    const newCategory = document.createElement("td");
    const deleteButton = document.createElement("p");
    const icon = document.createElement("i");
    newItem.textContent = item.item;
    newPrice.textContent = item.price;
    newCategory.textContent = item.category;
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-index", index);
    icon.classList.add("fa-solid", "fa-trash-can");
    deleteButton.append(icon);
    newTR.append(newItem, newPrice, newCategory, deleteButton);
    purchaseList.append(newTR);
  });
};

const updateHeadings = () => {
  updatedDiv.innerHTML = `<h3 class="h3 updated-budget">Updated Budget:</h3>`;
  moneyDiv.innerHTML = `<h3 class="h3 money-spent">Money Spent:</h3>`;
  console.log(expenseItems);
  counter = 0;
  expenseItems.forEach((item) => {
    counter += parseInt(item.price);
  });

  const moneyParagraph = document.createElement("p");
  moneyParagraph.textContent = `$${counter}`;
  moneyDiv.append(moneyParagraph);

  let updated = 0;
  updated = budget - counter;
  // updatedBudget.innerHTML = `Updated Budget: <span class="numbers">$${updated}</span>`;
  const updatedParagraph = document.createElement("p");
  updatedParagraph.textContent = `$${updated}`;
  updatedDiv.append(updatedParagraph);

  let totalB = 0;
  let totalC = 0;
  let totalF = 0;
  let totalE = 0;
  expenseItems.forEach((item) => {
    if (item.category === "bills") {
      totalB += parseInt(item.price);
    } else if (item.category === "clothing") {
      totalC += parseInt(item.price);
    } else if (item.category === "food") {
      totalF += parseInt(item.price);
    } else if (item.category === "entertainment") {
      totalE += parseInt(item.price);
    }
  });
  totalBills.innerHTML = `Total spent in bills: <span class="numbers">$${totalB}</span>`;
  totalFood.innerHTML = `Total spent in food: <span class="numbers">$${totalF}</span>`;
  totalEntertain.innerHTML = `Total spent in entertainment: <span class ="numbers">$${totalE}</span>`;

  totalClothes.innerHTML = `Total spent in clothes: <span class="numbers">$${totalC}</span>`;
  if (updated <= 0) {
    alertContainer.style.display = "flex";
  }
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
  updateHeadings();
  document.querySelector("#item").value = "";
  document.querySelector("#how-much").value = "";
  document.querySelector("#category").value = "bills";
});

closePopUp.addEventListener("click", () => {
  budget = 0;
  counter = 0;
  expenseItems = [];
  alertContainer.style.display = "none";
  totalClothes.textContent = `Total spent in clothes: $0`;
  totalBills.textContent = `Total spent in bills: $0`;
  totalFood.textContent = `Total spent in food: $0`;
  totalEntertain.textContent = `Total spent in entertainment: $0`;
  updatedDiv.innerHTML = `<h3 class="h3 updated-budget">Updated Budget:</h3>`;
  moneyDiv.innerHTML = `<h3 class="h3 money-spent">Money Spent:</h3>`;
  budgetDiv.innerHTML = `<h3 class="h3 entered-budget">Budget:</h3>`;
  budgetInput.value = "";
  purchaseList.innerHTML = `<tr>
  <th class="item-header">Item</th>
  <th class="item-header">Amount ($)</th>
  <th class="item-header">Category</th>
</tr>`;
});
purchaseList.addEventListener("click", (e) => {
  const index = e.target.getAttribute("data-index");
  if (e.target.classList.contains("fa-solid")) {
    expenseItems.splice(index, 1);
    newExpense();
    updateHeadings();
  }
});
