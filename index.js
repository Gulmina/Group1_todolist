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
        const x=todo
        console.log(x);
       
        let res= `<li>${todo} <button id=btn value='${x}' onClick='edit(this)'>e</button></li>`

        return res
    }).join()

    
    list.innerHTML=todosHtml
    
    //const x=document.getElementById("btn").addEventListener("click", edit());
}

showTodos()

////Edit Function/////////////////

function form2(value_index){
   // alert("hello");
   
  
   /*  list.innerHTML=`<li>${value_index}<form id="form2">
    <input type="text" id="input2"/>
    <button id="btn2">Save</button>
</form></li>` */
 

}

function edit(a){
    //x=document.getElementById("btn");
    
    let value_index=a.value;
    

   // form2(value_index)

   list.innerHTML=`<li>${value_index}<form id="form2">
   <input type="text" id="input2"/>
   <button id="btn2">Save</button>
</form></li>`


    const h=document.getElementById("btn2").addEventListener("click", (e)=>{
        e.preventDefault();
        let b=localStorage.getItem("todos");
        const c=JSON.parse(b);
        //const newvalue=input2.value;
        //console.log(newvalue);
    
        let i=c.indexOf(value_index);

        //console.log(i);
        
        c[i]=input2.value;
        //console.log(c);
        
        localStorage.setItem("todos",JSON.stringify(c))
        console.log(c);
        edit_form.innerHTML=""
        showTodos()
    });

}



    



// const l=localStorage.getItem(x);
// console.log(l);
 
   // const index= localTodos.indexOf(x);
    //console.log(index);
  // newvalue(x.value);
    