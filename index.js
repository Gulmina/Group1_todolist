const form=document.getElementById("form");
const input=document.getElementById("input");
const list=document.getElementById("list");

// Function geting the todos from localStorage
const todos=()=>{
    const todos=localStorage.getItem("todos")
    return todos ? JSON.parse(todos) : []
}

// Event listener for the submission of the form
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (input.value==="") {
        alert("please fill in the input!")
        return
    }
    const localTodos=todos()

    localTodos.push(input.value)
    localStorage.setItem("todos",JSON.stringify(localTodos))
    // console.log(localTodos);
    input.value="";
    showTodos()
})

// Function to show the tods in the list
// added index identifier for the function to target specific items
// onclick atribute added to call deleteTodo function
const showTodos=()=>{
    const todosHtml = todos().map((todo, index)=>{
        return `<li>${todo} <button onclick="deleteTodo(${index})" >Delete</button></li>`
    }).join("")
    list.innerHTML = todosHtml
}

// Function to delete a todo from the list
// Targets the items from the array with their unique id to delete them and updates the list
const deleteTodo = (index) => {
    const localTodos = todos();
    localTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(localTodos));
    showTodos();
};

showTodos()



