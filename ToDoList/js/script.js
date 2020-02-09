var header_null = 0;
var conten_null = 0;
var header_null_edit = 0;
var conten_null_edit = 0;
var test = 0;
var a = 0; //Переменная назначения события onclick="done(n)"
var k = 0; //Переменная для присвоения id div-блоками
var n = 10; //Переменная для присвоения id input-блокам
var Iform = document.input_form;

function input(){
	header = Iform.header.value;
	content = Iform.content.value;

	if (header !== ""){
		var err = document.getElementById('err');
		if (header_null > 0) document.getElementsByClassName('err')[0].removeChild(err);	
		create_block();

		document.getElementById("save").setAttribute("data-dismiss", "modal")

		header_null = 0;
	}
	else{
		document.getElementById("save").setAttribute("data-dismiss", "")
		if (header_null < 1) error_head();
		header_null += 1;
	}

	Iform.header.value = "";
	Iform.content.value = "";
}



function error_head(){
	var err = document.createElement('h6');
	err.id = "err";
	err.innerHTML = "Вы не ввели заголовок";
	document.getElementsByClassName('err')[0].appendChild(err);
}

function error_head_edit(){
	var err = document.createElement('h6');
	err.id = "err_edit";
	err.innerHTML = "Вы не ввели заголовок";
	document.getElementsByClassName('err_edit')[0].appendChild(err);
}



function create_block(){
	
	var div = document.createElement('div');
	div.classList.add('task_content')
	div.id = k;
	
	var dt = document.createElement('dt');
	var input = document.createElement('input');
	input.type = "checkbox"; //Создание чекбокса
	input.id = n;
	var head = document.createElement('span')
	head.innerHTML = header;

	var del = document.createElement('a')
	del.setAttribute("aria-hidden", "true")
	dele = "del(" + k +")"
	del.setAttribute("onclick", dele)
	del.classList.add("del")
	del.innerHTML = "&#9747;"

	var edit = document.createElement('a')
	edit.setAttribute("aria-hidden", "true")
	editor = "edit(" + k +")"
	edit.setAttribute("onclick", editor)
	edit.setAttribute("data-target", "#exampleModalCenter1")
	edit.setAttribute("data-toggle", "modal")
	edit.classList.add("edit")
	edit.innerHTML = "&#128393;"

	var cont = document.createElement('dd');
	cont.innerHTML = content;


	a = "done(" + k + "," + n + ")" //переменная присвоения функции done
	document.getElementsByTagName('dl')[0].appendChild(div).appendChild(dt).appendChild(input)
	document.getElementsByTagName('dl')[0].appendChild(div).appendChild(dt).appendChild(head)
	document.getElementsByTagName('dl')[0].appendChild(div).appendChild(dt).appendChild(del)
	document.getElementsByTagName('dl')[0].appendChild(div).appendChild(dt).appendChild(edit)
	document.getElementsByTagName('dl')[0].appendChild(div).appendChild(cont)

	document.getElementById(n).setAttribute("onclick", a)
	k += 1;
	n += 1;
}

function done(num, n){
	document.getElementById(num).getElementsByClassName('edit')[0].remove()

	b = "task(" + num + "," + n + ")"
	document.getElementById(n).removeAttribute("onclick")
	

	var test = document.getElementById(num)


	document.getElementsByClassName('done')[0].appendChild(test)
	
	document.getElementById(n).setAttribute("onclick", b)

}

function task(num, n){
	var edit = document.createElement('a')
	edit.setAttribute("aria-hidden", "true")
	editor = "edit(" + num +")"
	edit.setAttribute("onclick", editor)
	edit.setAttribute("data-target", "#exampleModalCenter1")
	edit.setAttribute("data-toggle", "modal")
	edit.classList.add("edit")
	edit.innerHTML = "&#128393;"

	c = "done(" + num + "," + n + ")"
	document.getElementById(num).removeAttribute("onclick")
	var block = document.getElementById(num)
	

	document.getElementsByTagName('dl')[0].appendChild(block)
	document.getElementById(num).getElementsByTagName('dt')[0].appendChild(edit)
	document.getElementById(n).setAttribute("onclick", c)	
}

function del(num){
	document.getElementById(num).remove()
}

function edit(num){
	var b_ed = document.getElementById('edit')
	var v_ed = "b_edit(" + num + ")"
	b_ed.setAttribute("onclick", v_ed)

}

function b_edit(num){
	var Iform_edit = document.input_form_edit;
	header_edit = Iform_edit.header.value;
	content_edit = Iform_edit.content.value;

	
	if (header_edit !== ""){
		var err = document.getElementById('err_edit');
		if (header_null_edit > 0) document.getElementsByClassName('err_edit')[0].removeChild(err);	
		head_edit = document.getElementById(num).getElementsByTagName('span')[0]
		head_edit.innerHTML = header_edit
		cont_edit = document.getElementById(num).getElementsByTagName('dd')[0]
		cont_edit.innerHTML = content_edit

		document.getElementById("edit").setAttribute("data-dismiss", "modal")

		header_null_edit = 0;
	}
	else{
		document.getElementById("edit").setAttribute("data-dismiss", "")
		if (header_null_edit < 1) error_head_edit();
		header_null_edit += 1;
	}
	

	Iform_edit.header.value = ""
	Iform_edit.content.value = ""
}