document.getElementById("addItemButton").addEventListener("click", function () {
    addTodoItem();
    clearTodoItemInputText();
});

document.querySelector('.delete-selected-button').addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('.checkbox:checked');
    checkboxes.forEach(function (checkbox) {
        checkbox.parentElement.remove();
    });
});

function addTodoItem() {
    var todoItemValue = document.getElementById("todoItem").value;
    console.log(todoItemValue);

    var todoList = document.getElementById('todoList');

    var listElement = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.id = 'todoItemCheckbox';

    var spanElement = document.createElement('span');
    spanElement.textContent = todoItemValue;

    listElement.append(checkbox);
    listElement.append(spanElement);
    console.log(listElement);

    todoList.append(listElement);
    console.log(todoList);
}

function clearTodoItemInputText() {
    document.getElementById("todoItem").value = '';
}