var Model = /** @class */ (function () {
    function Model() {
        this.todos = [
            { id: 1, text: "Learn JS more", complete: false },
            { id: 2, text: "Learn TS", complete: false },
            { id: 3, text: "Learn React", complete: false },
        ];
    }
    Model.prototype.addTodo = function (todoText) {
        var todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false
        };
        this.todos.push(todo);
    };
    Model.prototype.editTodo = function (id, updatedText) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id
                ? { id: todo.id, text: updatedText, complete: todo.complete }
                : todo;
        });
    };
    Model.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    Model.prototype.toggleTodo = function (id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id
                ? { id: todo.id, text: todo.text, complete: !todo.complete }
                : todo;
        });
    };
    return Model;
}());
var View = /** @class */ (function () {
    function View() {
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
    View.prototype.createElement = function (tag, className) {
        var element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    };
    View.prototype.getElement = function (selector) {
        var element = document.querySelector(selector);
        return element;
    };
    return View;
}());
var Controller = /** @class */ (function () {
    function Controller(model, view) {
        this.model = model;
        this.view = view;
    }
    return Controller;
}());
var app = new Controller(new Model(), new View());
