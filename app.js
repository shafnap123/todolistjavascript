let todoinput=document.querySelector('.to-in');
let todobutton=document.querySelector('.to-btn');
let todolist=document.querySelector('.todo-list')


todobutton.addEventListener('click',addto)

todolist.addEventListener('click',del)

function addto(e){
     e.preventDefault(); 

    if (todoinput.value.trim() === "") return;



    const tododiv =document.createElement('div')

    tododiv.classList.add('todo')


        const toli =document.createElement('li')
    
    toli.classList.add('todoitems')

toli.innerText = todoinput.value

tododiv.appendChild(toli)

const trashbtn=document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerText ='-Del'
tododiv.appendChild(trashbtn)

todolist.appendChild(tododiv)
}
 

todovalue=" "

function del(e){

    const item = e.target;
     if (item.classList.contains('trash')) {
        const todo = item.parentElement;
        todo.remove();
    }
    

}



