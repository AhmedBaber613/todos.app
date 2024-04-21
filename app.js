const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = add => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${add}</span>
      <i class="far fa-solid fa-trash delete"></i>  
    </li>
  `;

  ul.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
});


ul.addEventListener("click", e => {
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
  }
});

const filterTodos = term => {

  // add filtered class
  Array.from(ul.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(ul.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
});