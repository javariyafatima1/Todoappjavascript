let list = document.getElementById("list");



function addtodo(){
    let todo = document.getElementById("todo");
    let li = document.createElement('li')
    li.setAttribute("class","li")
    let liText = document.createTextNode(todo.value);
    li.appendChild(liText)


    let delet = document.createElement('button');
    let deletText = document.createTextNode("Delete")
    delet.setAttribute("class","btn")
    delet.setAttribute("onclick","deletitem(this)")

    delet.appendChild(deletText)
    li.appendChild(delet)

    let editbtn = document.createElement('button')
    let editText = document.createTextNode('Edit')
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","edititem(this)")

    editbtn.appendChild(editText)
    li.appendChild(editbtn)

    list.appendChild(li)
    
    todo.value = ""
    console.log(li); 
}
function deletitem(e){
   e.parentNode.remove()
}
function edititem(e){
    let editvalue = prompt("enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editvalue;
 }
function AlltodoDelete(){
    list.innerHTML =""
}