function saveText(row, column)
{
	let text = document.getElementsByTagName("table")[0].children[0]
		.children[row].children[column].children[0].value;
	document.getElementsByTagName("table")[0].remove();
	document.write(text);
}

function changeWidth()
{
	let width = document.getElementsByTagName("div")[0].children[0].value;
	let border = document.getElementsByTagName("div")[0].children[1].value;
	document.getElementsByTagName("table")[0].style =
      "width: " +  width + "px; border: 2px " + border + " black;";
}

function changeWidthText()
{
	let width = document.getElementsByTagName("div")[0].children[0].value;
	let border = document.getElementsByTagName("div")[0].children[1].value;
	document.getElementsByTagName("div")[0].children[2].value =
      "Submit with width " + width + "px and " + border + " border";
}

function addHeader()
{
    let oldHeader = document.getElementsByTagName("th")[0];
    if (typeof(oldHeader) != "undefined")
      oldHeader.remove();
	let header = document.getElementsByTagName("div")[1].children[0].value;
	document.getElementsByTagName("tbody")[0].innerHTML = "<tr><th colspan='"
		+ document.getElementsByTagName("tbody")[0].children[0].cells.length
        + "'>" + header + "</th></tr>"
		+ document.getElementsByTagName("tbody")[0].innerHTML;
}

function deleteRow()
{
	let row = document.getElementsByTagName("div")[2].children[0].value;
	let tableRows = document.getElementsByTagName("tbody")[0].children.length;
	try
    {
		document.getElementsByTagName("tbody")[0].children[row-1].remove();
	}
	catch
    {
		alert("Input incorrect");
	}
}

function magic()
{
	let row = Math.floor(Math.random()*document.getElementsByTagName("table")[0]
		.children[0].children.length);
	let column = Math.floor(Math.random()*document.getElementsByTagName("table")[0]
		.children[0].children[row].children.length);
	let cell = document.getElementsByTagName("table")[0].children[0]
        .children[row].children[column];
	let color = [Math.floor(Math.random() * 256),
                 Math.floor(Math.random() * 256),
                 Math.floor(Math.random() * 256)];
	switch (Math.ceil(Math.random() * 4))
    {
		case 1:
			cell.style = "color: rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
			for (var i = 0; i < cell.children.length; i++)
				cell.children[i].style = "color: rgb(" + color[0] + ", " + color[1]
					+ ", " + color[2] + ")";
			break;
		case 2:
			cell.style = "background-color: rgb(" + color[0] + ", " + color[1]
				+ ", " + color[2] + ")";
			for (var i = 0; i < cell.children.length; i++)
				cell.children[i].style = "background-color: rgb(" + color[0] + ", " + color[1]
					+ ", " + color[2] + ")";
			break;
		case 3:
			cell.style = 'font-size: ' + Math.ceil(Math.random() * 11 + 14)+ 'pt;';
			for (var i = 0; i < cell.children.length; i++)
				cell.children[i].style = 'font-size: ' + Math.ceil(Math.random() * 11 + 14)
			       + 'pt;';
			break;
		case 4:
			cell.remove();
			break;
	}
}

function deleteThis()
{
	for (var i = 0; i < document.getElementsByTagName("body")[0].children.length; i++)
    {
		document.getElementsByTagName("body")[0].children[i].remove();
    }
	document.getElementsByTagName("body")[0].innerHTML="<form>Количество строк:"
		+ '<input type="number" id="row">Количество столбцов:'
		+ '<input type="number" id="column">'
        + '<button onclick="createTable()">Submit</button>'
		+ '<script type="text/javascript" src="script.js"></script></form>';
}

function createTable()
{
	let row = document.getElementById('row').value;
	let column = document.getElementById('column').value;
	let changeWidthText = "Submit";

	document.write("<div>Change width: <input type='text' onInput='changeWidthText()'></input>"
		+ "<select onChange='changeWidthText()'><option>solid</option><option>dotted</option>"
		+ "<option>dashed</option><option>double</option></select>"
        + "<input type='button' onclick='changeWidth()' value=changeWidthText></input></div>");
	document.write("<div>Add header: <input type='text'></input>"
		+ "<input type='button' onclick='addHeader()' value=Add header></input></div>");
	document.write("<div>Delete row: <input type='text'></input>"
		+ "<input type='button' onclick='deleteRow()' value=Delete row></input></div>");
	document.write("<div><input type='button' onclick='magic()' value=Magic></input></div>");
	document.write("<div><input type='button' onclick='deleteThis()' value=Delete></input></div>");
	
	for (var i = 0; i < document.getElementsByTagName("div").length; i++)
    {
		document.getElementsByTagName("div")[i].style = "float:left";
	}

	let table = document.createElement("table");
	let tableBody = document.createElement("tbody");

	for (var i = 0; i < row; i++)
    {
		let row = document.createElement("tr");
		for (var j = 0; j < column; j++)
        {
			let cell = document.createElement("td");
			let cellInput = document.createElement("input", "type=textarea");
			let cellButton = document.createElement("button");
			cell.appendChild(cellInput);
			cellButton.setAttribute("onClick", "saveText(" + j + ", " + i + ")");
			cellButton.innerHTML = "Save";
			cell.appendChild(cellButton);
			row.appendChild(cell);
		}
		tableBody.appendChild(row);
	}

	table.appendChild(tableBody);
	document.getElementsByTagName('body')[0].appendChild(table);
	table.setAttribute('border', '2');
}
