var CalcF = document.calc_form;
var Value = 0;
var FlagNewNum = false;
var operation = "";
var answer1 = 0;
var answer2 = 0;

function NumSelect (Num) 
{
		if (FlagNewNum) 
		{
			CalcF.answer1.value = Num;
			FlagNewNum = false;
			console.log('Выбор второго числа');
		}	
		else 
		{
			if (CalcF.answer1.value == "0"){
				CalcF.answer1.value = Num;
				console.log('Выбор первого числа');
			}


			else{
				CalcF.answer1.value += Num;
				console.log('Дополнение числа');
			}

		}
};

function Back(){
	var test = CalcF.answer1.value.substring(0, CalcF.answer1.value.length-1);
	CalcF.answer1.value = test;
}

//Инициализация выбора арифметичесих действий
function op(op){
	answer1 = CalcF.answer1.value; //инициализация ответа1
	answer2 = CalcF.answer2.value; //инициализация ответа2

	if (FlagNewNum && operation != "="){
		CalcF.answer1.value = Value;
		console.log('Выбор знака "равно", без второго числа');
	}
	//Выбор действия
	else{
		FlagNewNum = true;
		switch (operation){
			case '+':
				Value += parseFloat(answer1);
				CalcF.answer1.value = 'Выполнилось сложение';
				console.log('Выполнилось сложение');
				break;
			case '-':
				Value -= parseFloat(answer1);
				CalcF.answer1.value = 'Выполнилось вычитание';
				console.log('Выполнилось вычитание');
				break;
			case '*':
				Value *= parseFloat(answer1);
				CalcF.answer1.value = 'Выполнилось умножение';
				console.log('Выполнилось умножение');
				break;
			case '/':
				Value /= parseFloat(answer1);
				CalcF.answer1.value = 'Выполнилось деление';
				console.log('Выполнилось деление');
				break;
			case '<--':
				
			default:
				Value = parseFloat(answer1);
				CalcF.answer1.value = 0;
				console.log('Первое действие после выбора знака');
		}
		//Вывод первого числа на второе окно
		CalcF.answer2.value = Value;

		console.log(answer1);
		console.log(answer2);
		operation = op;
	}
}

//Функция добавления десятичной точки
function Decimal(){
	var CurAnswer = CalcF.answer1.value;
	if (FlagNewNum){
		CurAnswer = "0.";
		FlagNewNum = false;
	}
	else {
		if(CurAnswer.indexOf(".") == -1)
			CurAnswer += ".";
	}
	CalcF.answer1.value = CurAnswer;
}

//Функция смены знака у числа
function Neg () 
{
	CalcF.answer1.value = parseFloat(CalcF.answer1.value) * -1;
}

//Функция очистки текущего введённого числа 
function ClearEntry(){
	CalcF.answer1.value = "0";
	FlagNewNum = true;
	CalcF.answer2.value = Value;
}

//Функция полной очистки результатов
function Clear(){
	Value = 0;
	operation = "";
	ClearEntry();
}