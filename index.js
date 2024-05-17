const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

// Function geting the todos from localStorage
const todos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

// Event listener for the submission of the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("please fill in the input!");
    return;
  }
  const localTodos = todos();

  localTodos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(localTodos));
  // console.log(localTodos);
  input.value = "";
  showTodos();
});

// Function to show the tods in the list
// added index identifier for the function to target specific items
// onclick atribute added to call deleteTodo function
const showTodos = () => {
  const todosHtml = todos()
    .map((todo, index) => {
      let res = `<li>
        <input type="checkbox" id="mark" value='${todo}' > ${todo} <button id=btn value='${todo}' onClick='edit(this,${index})'>
        <i id="editBtn" class="fa-solid fa-pen-to-square">
        </i></button>
        <button onclick="deleteTodo(${index})">
        <i id="deleteBtn" class="fa-solid fa-trash"></i></button>
        </li>`;

      return res;
    })
    .join("");

  list.innerHTML = todosHtml;

  //const x=document.getElementById("btn").addEventListener("click", edit());
};

// Function to delete a todo from the list
// Targets the items from the array with their unique id to delete them and updates the list
const deleteTodo = (index) => {
  const localTodos = todos();
  localTodos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(localTodos));
  showTodos();
};

showTodos();

const mark = document.getElementById("mark");
mark.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(123);
  let a = document.getElementById("mark").checked;
});

////Edit Function/////////////////

function form2(value) {
  // alert("hello");

  list.innerHTML = `<li>${value}<form id="form2">
    <input type="text" id="input2"/>
    <button id="btn2">Save</button>
</form></li>`;
}

function edit(a, index) {
  //x=document.getElementById("btn");
  console.log(a.value);
  console.log(index);

  //let value_index=a.value;
  //console.log(value_index)

  form2(a.value);

  const h = document.getElementById("btn2").addEventListener("click", (e) => {
    e.preventDefault();

    let b = localStorage.getItem("todos");

    const c = JSON.parse(b);
    //const newvalue=input2.value;
    //console.log(newvalue);
    //console.log(b);

    // let i=c.indexOf(a.value);

    //console.log(i);

    c[index] = input2.value;
    //console.log(c);

    localStorage.setItem("todos", JSON.stringify(c));
    console.log(c);
    edit_form.innerHTML = "";
    showTodos();
  });
}

// const l=localStorage.getItem(x);
// console.log(l);

// const index= localTodos.indexOf(x);
//console.log(index);
// newvalue(x.value);
