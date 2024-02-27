let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalExpenses = calculateTotalExpenses(expenses);

function addExpense() {
  const description = document
    .getElementById("expenseDescription")
    .value.trim();
  const amount = parseFloat(document.getElementById("expenseAmount").value);

  if (description !== "" && !isNaN(amount) && amount > 0) {
    expenses.push({ description, amount });
    saveExpenses();
    displayExpenses();
    updateTotalExpenses();
    clearInputs();
  } else {
    alert("Please enter valid expense details.");
  }
}

function displayExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${expense.description}: ₹${expense.amount.toFixed(
      2
    )} <button onclick="removeExpense(${index})">Remove</button>`;
    expenseList.appendChild(li);
  });
}

function removeExpense(index) {
  expenses.splice(index, 1);
  saveExpenses();
  displayExpenses();
  updateTotalExpenses();
}

function updateTotalExpenses() {
  totalExpenses = calculateTotalExpenses(expenses);
  document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);
}

function clearInputs() {
  document.getElementById("expenseDescription").value = "";
  document.getElementById("expenseAmount").value = "";
}

function clearAllExpenses() {
  expenses = [];
  saveExpenses();
  displayExpenses();
  updateTotalExpenses();
}

function exportExpenses(format) {
  let exportContent = "";
  if (format === "txt") {
    expenses.forEach((expense) => {
      exportContent += `${expense.description}: ₹${expense.amount.toFixed(
        2
      )}\n`;
    });

    const total = totalExpenses.toFixed(2);
    exportContent += `\nTotal Expenses: ₹${total}`;

    const blob = new Blob([exportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.txt";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  } else if (format === "json") {
    const jsonData = JSON.stringify(expenses);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  } else {
    alert("Unsupported file format.");
  }
}

function importExpenses(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const fileContent = e.target.result.trim();
        let importedExpenses;
        if (file.name.endsWith(".json")) {
          importedExpenses = JSON.parse(fileContent);
        } else if (file.name.endsWith(".txt")) {
          importedExpenses = fileContent.split("\n").map((line) => {
            const [description, amount] = line.split(": ₹");
            return {
              description: description.trim(),
              amount: parseFloat(amount),
            };
          });
        } else {
          throw new Error("Unsupported file format.");
        }
        if (
          Array.isArray(importedExpenses) &&
          importedExpenses.every(
            (expense) =>
              typeof expense.description === "string" && !isNaN(expense.amount)
          )
        ) {
          expenses = importedExpenses;
          saveExpenses();
          displayExpenses();
          updateTotalExpenses();
        } else {
          throw new Error("Invalid data format.");
        }
      } catch (error) {
        alert(
          "Error importing expenses. Please make sure the file contains valid expense data."
        );
      }
    };
    reader.readAsText(file);
  }
}

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function calculateTotalExpenses(expenses) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    addExpense();
    document.getElementById("expenseDescription").focus();
  }
}
