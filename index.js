

let form=document.getElementById("form");
let input=document.getElementById("input");
const list=document.getElementById("list");


const todos=()=>{
    const todos=localStorage.getitems("todos")
    return todos ? JSON.parse(todos): []
}

form.addEventlistener("submit",(e)=>{
    e.preventDefault()
    if(input.value===""){
    alert("Input field is empty")
    return
}

const localTodos=todos()

localTodos.push(input.value);
localStorage.setItem("todos",JSON.stringify(localTodos))
console.log(localTodos);
input.value=" ";
showTodos();
})


const showTodos=()=>{
    const todosHtml=todos().map((todo)=>{
        return '<li>${todo} X</<li>'
    }).join("")
    list.innerHTML=todosHtml
}

showTodos()


