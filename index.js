const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

const handleRemove = (index) => {
    const localTodos = todos();
    localTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(localTodos));
    showTodos(); 
}

const todos = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert("please fill in the input!");
        return;
    }
    const localTodos = todos();

    localTodos.push(input.value);
    localStorage.setItem("todos", JSON.stringify(localTodos));
    console.log(localTodos);
    input.value = "";
    showTodos();
})

const showTodos = () => {
    const todosHtml = todos().map((todo, index) => {
        return `<li>
            ${todo} 
            <button onclick="handleRemove(${index})">Remove</button>
        </li>`;
    }).join("");
    list.innerHTML = todosHtml;
}

showTodos();
