const form=document.getElementById("form");
const input=document.getElementById("input");
const list=document.getElementById("list");


const todos=()=>{
    const todos=localStorage.getItem("todos")
    return todos ? JSON.parse(todos) : []
}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (input.value==="") {
        alert("please fill in the input!")
        return
    }
    const localTodos=todos()

    localTodos.push(input.value)
    localStorage.setItem("todos",JSON.stringify(localTodos))
    console.log(localTodos);
    input.value="";
    showTodos()
})



const showTodos=()=>{
    const todosHtml = todos().map((todo)=>{
        return `<li>${todo} X</li>`
    }).join("")
    list.innerHTML = todosHtml
}

showTodos()



