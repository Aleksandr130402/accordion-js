const root = document.getElementById('root');
const accordion = document.createElement('div');

accordion.className = "accordion";
accordion.id = "accordionExample";
root.append(accordion);

const methods = [
	{
		name: "push", 
		desc: `добавляет элементы в конец`
	}, 
	{
		name: "pop", 
		desc: `извлекает элемент с конца`
	}, 
	{
		name: "shift", 
		desc: `извлекает элемент с начала`
	}, 
	{
		name: "unshift", 
		desc: `добавляет элементы в начало`
	}, 
	{
		name: "splice", 
		desc: `начиная с индекса pos, удаляет deleteCount элементов и вставляет items.`
	}, 
	{
		name: "slice", 
		desc: `создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).`
	}, 
	{
		name: "concat", 
		desc: `возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.`
	}, 
	{
		name: "indexOf", 
		desc: `ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.`
	}, 
	{
		name: "includes", 
		desc: `возвращает true, если в массиве имеется элемент value, в противном случае false.`
	}, 
	{
		name: "find", 
		desc: `фильтрует элементы через функцию и отдаёт первое значение, при прохождении которых через функцию возвращается true.`
	}, 
	{
		name: "filter", 
		desc: `фильтрует элементы через функцию и отдаёт все значения, при прохождении которых через функцию возвращается true.`
	}, 
	{
		name: "findIndex", 
		desc: `похож на find, но возвращает индекс вместо значения.`
	}, 
	{
		name: "forEach", 
		desc: `вызывает func для каждого элемента.`
	}, 
	{
		name: "map", 
		desc: `создаёт новый массив из результатов вызова func для каждого элемента.`
	},
	{
		name: "sort", 
		desc: `сортирует массив`
	},
	{
		name: "reverse", 
		desc: `меняет порядок следования элементов на противоположный`
	},
	{
		name: "split", 
		desc: `преобразует строку в массив`
	},
	{
		name: "join", 
		desc: `преобразует массив в строку`
	},
	{
		name: "reduce", 
		desc: `вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.`
	}
];

methods.forEach((method) => {

	let accordionItem = document.createElement('div');
	let accordionBody = document.createElement('div');
	let accordionHeader = document.createElement('h2');
	let accordionButton = document.createElement('button');
	let accordionCollapse = document.createElement('div');
	let p = document.createElement('p');
	let row = document.createElement('div');
	let colFirst = document.createElement('div');
	let colSecond = document.createElement('div');
	let field = document.createElement('input');
	let opr = document.createElement('button');
	let reset = document.createElement('button');
	let result = document.createElement('div');

	accordionItem.className = "accordion-item";
	accordionBody.className = "accordion-body";
	accordionHeader.className = "accordion-header";
	accordionButton.className = "accordion-button";
	accordionButton.type = "button";
	accordionButton.setAttribute("data-bs-toggle", "collapse");
	accordionButton.setAttribute("aria-expanded", "true");
	accordionCollapse.className = "accordion-collapse collapse";
	accordionCollapse.setAttribute("data-bs-parent", "#accordionExample");
	opr.className = "opr";
	reset.className = "reset";
	reset.textContent = "reset";
	colFirst.className = "col-3";
	colSecond.className = "col-3";
	field.className = "field";
	field.value = "1,2,3,4,5";
	row.className = "row";
	result.className = "result";

	accordionButton.setAttribute("data-bs-toggle", "collapse");
	accordionButton.setAttribute("data-bs-target", `#${method.name}`);
	accordionButton.setAttribute("aria-controls", `${method.name}`);
	accordionButton.textContent = `${method.name === 'indexOf' ? 'indexOf / lastIndexOf' : method.name}`;
	
	accordionHeader.id = `heading-${method.name}`;
	accordionHeader.append(accordionButton);

	accordionCollapse.id = `${method.name}`;
	accordionCollapse.setAttribute("aria-labelledby", `heading-${method.name}`);

	accordionBody.classList.add("row");
	p.textContent = `${method.desc}`;

	colFirst.append(field);

	opr.append(colFirst);
	opr.textContent = `${method.name}`;
	colSecond.append(opr, reset);

	if(method.name === 'indexOf') {
		const lastIndexOf = document.createElement('button');
		lastIndexOf.className = "opr";
		lastIndexOf.id = "lastIndexOf";
		lastIndexOf.textContent = "lastIndexOf";
		colSecond.querySelector(".opr").after(lastIndexOf)
	}

	row.append(colFirst, colSecond);

	accordionBody.append(p, row, result);

	accordionCollapse.append(accordionBody);

	accordionItem.append(accordionHeader, accordionCollapse);
	
	accordion.append(accordionItem);
});

function createInput(item, name, placeholder, type) {

	let input = document.createElement('input');

	input.name = name;
	input.placeholder = placeholder;
	if(type === undefined) {
		type = input.type;
	} else {
		input.type = type;
	}
	
	item.querySelector("input:last-child").after(input);
}

const splice = document.getElementById('splice');

createInput(splice, "start", "pos", "number");
createInput(splice, "deleteCount", "delete count", "number");
createInput(splice, "insertItems", "items");

const slice = document.getElementById('slice');

createInput(slice, "start", "start", "number");
createInput(slice, "end", "end", "number");

const concat = document.getElementById('concat');

createInput(concat, "addItems", "items");

const indexOf = document.getElementById('indexOf');

createInput(indexOf, "indexOfItem", "item");
createInput(indexOf, "pos", "pos");

const includes = document.getElementById('includes');

createInput(includes, "includesValue", "value");

const find = document.getElementById('find');

createInput(find, "findValue", "value");

const filter = document.getElementById('filter');

createInput(filter, "filterValue", "value");

const findIndex = document.getElementById('findIndex');

createInput(findIndex, "findIndexValue", "value");

const split = document.getElementById('split');

createInput(split, "separator", "separator");

const join = document.getElementById('join');

createInput(join, "separator", "separator");

let mainInput;
let inputs;
let result;

const accordButtons = document.getElementsByClassName('accordion-button');
const fields = document.getElementsByClassName('field');
const buttons = document.getElementsByClassName('opr');
const resets = document.getElementsByClassName('reset');

for (let accordButton of accordButtons) {

	accordButton.onclick = function(e) {
		accordButtonCliked(e);
	}
} 

for (let field of fields) {

	field.onclick = function() {
		field.onkeydown = function(e) {

			if (e.key === ' '){
				e.preventDefault();
			};
		}	
	}
} 

for (let button of buttons) {

	button.onclick = function(e) {
		oprCliked(e);
	}
} 

for (let reset of resets) {
	reset.onclick = function() {
		resetClicked();
	}
}

function accordButtonCliked(e) {

	let accordItem = e.target.closest('.accordion-item');
	let accordBody = accordItem.querySelector('.accordion-body');
	//получить все инпуты выбранного в аккордионе метода
	inputs = accordBody.getElementsByTagName('input');
	mainInput = accordBody.querySelector('.field');
	result = accordBody.querySelector('.result');
}

function oprCliked(e) {

	let array = [];
	let buttonName = e.target.outerText;
	let value = mainInput.value;

	function splitValue() {
		return value.split(',');
	}

	if (result.innerText !== "") 
		array = result.innerText.split(',');

	if (buttonName !== "push" && buttonName !== "unshift")
		array = splitValue();

	switch(buttonName) {
		
		case 'push': 
			array.push(splitValue());
			break;

		case 'pop':
			array.pop();
			break;

		case 'unshift':
			array.unshift(splitValue());
			break;

		case 'shift':
			array.shift();
			break;

		case 'splice':

			let spliceStart = inputs.start.value;
			let deleteCount = inputs.deleteCount.value;
			let insertItems = inputs.insertItems.value;

			array.splice(spliceStart, deleteCount, insertItems);
			break;

		case 'slice':

			let sliceStart = inputs.start.value;
			let sliceEnd = inputs.end.value;

			array = array.slice(sliceStart, sliceEnd);
			break;

		case 'concat': 

			let items = inputs.addItems.value;

			array = array.concat(items);
			break;

		case 'indexOf':	

			let indexOfItem = inputs.indexOfItem.value;
			let indexOfPos = inputs.pos.value;

			array = array.indexOf(indexOfItem, indexOfPos);
			break;

		case 'lastIndexOf':
			
			let lastIndexOfItem = inputs.indexOfItem.value;
			let lastIndexOfPos = inputs.pos.value;

			array = array.lastIndexOf(lastIndexOfItem, lastIndexOfPos);
			break;

		case 'includes':

			let includesValue = inputs.includesValue.value;

			array = array.includes(includesValue);
			break;

		case 'find':

			let findValue = inputs.findValue.value;

			array = array.find(i => i === findValue);
			break;

		case 'filter':

			let filterValue = inputs.filterValue.value;

			array = array.filter(i => i === filterValue);
			break;

		case 'findIndex':

			let findIndexValue = inputs.findIndexValue.value;

			array = array.findIndex(i => i === findIndexValue);
			break;

		case 'forEach':

			array.forEach(i => {
				alert("item "+i+" on position "+ array.indexOf(i));
			});
			break;

		case 'map':

			array = array.map(i => i.length);
			break;

		case 'sort': 

			array = array.sort((a, b) => a - b);
			break;

		case 'reverse': 

			array = array.reverse();
			break;

		case 'split':

			let str = array.toString();
			let splitSep = inputs.separator.value;
			
			array = str.split(splitSep);
			break;

		case 'join':

			let joinSep = inputs.separator.value;

			array = array.join(joinSep);
			break;

		case 'reduce':

			array = array.reduce((prev, current) => +prev + +current);
			break;

		default: alert('no such method!');
	}

	if(buttonName !== 'forEach')
		result.innerText = array;
}

function resetClicked() {

	for(let input of inputs) {
		input.value = '';
	}

	result.innerText = '';	
}