var uinput= document.getElementById('userinput');
var ubutton=document.getElementById('userbutton');
var todo=document.getElementById('todolist')
ubutton.addEventListener("click",elementCreater)
uinput.addEventListener("keypress",function(){
	if(event.keyCode===13){
		elementCreater();
	}
})

function togglelement(e){
	e.classList.toggle("done");

}

function deleteElement(em){
	em.parentNode.remove();
}





function elementCreater(){

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(uinput.value));
    todo.appendChild(li);
    uinput.value="";
	var but=document.createElement("button");
	but.appendChild(document.createTextNode("X"));
	li.appendChild(but);
	but.classList.add("todobuttons");
	li.classList.add("elementss");





}

todo.addEventListener("click",function(event){
	if (event.target.nodeName ==="LI"){togglelement(event.target);
}
	else if(event.target.nodeName==="BUTTON"){
		deleteElement(event.target);
	}


});

