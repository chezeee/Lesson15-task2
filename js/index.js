class Tasks {
  /**
   * @param {string[]} todos
   */
  constructor(todos) {
    this._todos = todos;
  }

  get csvString() {
    return this._todos.join(", ");
  }
}

// Sample usage - do not modify
const tasks = new Tasks(["Laundry", "Clean kitchen"]);
tasks.csvString; // "Laundry, Clean kitchen"
