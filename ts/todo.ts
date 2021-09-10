type Todo = { id: number; text: string; complete: boolean };
type Todos = Todo[];

class Model {
  todos: Todos;

  constructor() {
    this.todos = [
      { id: 1, text: "Learn JS more", complete: false },
      { id: 2, text: "Learn TS", complete: false },
      { id: 3, text: "Learn React", complete: false },
    ];
  }

  addTodo(todoText: string): void {
    const todo: Todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };
    this.todos.push(todo);
  }

  editTodo(id: number, updatedText: string): void {
    this.todos = this.todos.map((todo: Todo) =>
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo,
    );
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
  }

  toggleTodo(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo,
    );
  }
}

class View {
  app: HTMLElement | null;
  title: HTMLElement | null;
  form: HTMLElement | null;
  input: HTMLElement | null;
  submitButton: HTMLElement | null;
  todoList: HTMLElement | null;

  constructor() {
    this.app = this.getElement("#root");

    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    this.form = this.createElement("form");

    this.input = this.createElement("input");
    // this.input.type = "text";
    // this.input.placeholder = "Add todo";
    // this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Add Todo";

    this.todoList = this.createElement("ul", "todo-list");

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoList);
  }

  createElement(tag: string, className?: string): HTMLElement {
    const element: HTMLElement = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector: string): HTMLElement {
    const element: HTMLElement = document.querySelector(selector);

    return element;
  }
}

class Controller {
  model: object;
  view: object;

  constructor(model: any, view: any) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
