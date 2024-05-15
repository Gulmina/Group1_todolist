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
        
        let res= `<li>${todo}</li>`+"<button id=btn value="+`${todo}`+" onClick=edit()>e</button>"

        return res
    }).join()
    list.innerHTML = todosHtml
    
    //const x=document.getElementById("btn").addEventListener("click", edit());
}

showTodos()

////Edit Function/////////////////

function form2(){
    alert("hello");
    edit_form.innerHTML= ` <form id="form2">
    <input type="text" id="input2"/>
    <button id="edit-btn">Enter</button>
</form>`

}

function edit(){
    x=document.getElementById("btn");
console.log(x);

    
    form2()
 

    let b=localStorage.getItem("todos");
    const c=JSON.parse(b);
    //console.log(c);

    let i=c.indexOf("gul");
    console.log(i);
    
    c[i]="apple";
    //console.log(c);
    
    localStorage.setItem("todos",JSON.stringify(c))
    console.log(c);
    input.value="";
    showTodos()
     



// const l=localStorage.getItem(x);
// console.log(l);
 
   // const index= localTodos.indexOf(x);
    //console.log(index);
  // newvalue(x.value);
    
}


