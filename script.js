var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
mklist(list);
function cut(list1){
	list1.addEventListener("click", function(){
	list1.classList.toggle("done");
	});
}

function createButton(list1){
	var bu= document.createElement("BUTTON");
	bu.innerHTML = "Delete";
	list1.appendChild(bu);
	del(bu,list1);
	}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	cut(li);
	createButton(li);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function mklist(list){
for(var i=0; i< list.length; i++){
	var list1 = document.getElementsByTagName("li")[i];
	cut(list1);
	createButton(list1);

}
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var butt = document.querySelectorAll("button");

for (var j=0; j<butt.length; j++){
	var butt1= document.getElementsByTagName("button")[j];
	var list2= document.getElementsByTagName("li")[j-1];
	del(butt1,list2);
}

function del(butt1,list2){
	butt1.addEventListener("click",function(){
		ul.removeChild(list2);
	});
}
