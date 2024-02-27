# Expense Tracker

The Expense Tracker is a simple web application designed to help you manage your expenses efficiently. With this application, you can easily add, remove, and track your expenses, as well as export and import your expense data.

## Features

- **Add Expense:** Input a description and amount for your expense, then click the "Add Expense" button to add it to your list of expenses.

- **Remove Expense:** Easily remove individual expenses from your list by clicking the "Remove" button next to each expense.

- **Clear All Expenses:** Clear your entire list of expenses with a single click using the "Clear All Expenses" button.

- **Export Expenses:** Export your expenses to a text file (.txt) or a JSON file (.json) for easy backup or sharing.

- **Import Expenses:** Import expenses from a compatible text file or JSON file to quickly populate your expense list.

## Usage

1. **Clone the Repository:**

    Clone the repository to your local machine using the following command:

    ```bash
    git clone https://github.com/jeremiahcaleb/Expense-Tracker.git
    ```

2. **Open the Application:**

    Open the `index.html` file in your preferred web browser.

3. **Add Expenses:**

    - Enter the description and amount of your expense in the respective input fields.
    - Press the "Enter" key or click the "Add Expense" button to add the expense to your list.

4. **Remove Expenses:**

    - To remove an expense, click the "Remove" button next to the expense you want to delete.

5. **Clear All Expenses:**

    - Click the "Clear All Expenses" button to remove all expenses from your list.

6. **Export Expenses:**

    - To export your expenses, click either the "Export as Text" button or the "Export as JSON" button, depending on your preferred format.
    - Follow the on-screen prompts to download the exported file.

7. **Import Expenses:**

    - To import expenses, click the "Choose File" button under the "Import Expense" section.
    - Select a compatible text file (.txt) or JSON file (.json) containing your expense data.
    - Your expenses will be imported and displayed in the list.

## File Import Format

When importing expenses, ensure your file is formatted correctly:

- **Text File (.txt) Example:**

    ```
    Lunch: ₹250.00
    Transport: ₹150.00
    Dinner: ₹200.00
    ```

- **JSON File (.json) Example:**

    ```json
    [
      {"description": "Lunch", "amount": 250.00},
      {"description": "Transport", "amount": 150.00},
      {"description": "Dinner", "amount": 200.00}
    ]
    ```

Ensure that your text file follows the specified format, with each expense on a separate line and the total expenses indicated at the end. For JSON files, ensure that the data is formatted as a valid JSON array of objects, where each object represents an expense with `description` and `amount` properties.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please feel free to open an issue or submit a pull request.
