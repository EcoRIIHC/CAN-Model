
var index = 1;

function add_node()
{

	var id = generate_number();
	var color = generate_hex();
	console.log(typeof id)
	if (document.getElementById(id).innerHTML != ".")
	{
		index++;
		document.getElementById(id).innerHTML = "." ;
		label_zone(id,color)
		append_table(index,id,color);
	}else{
		add_node();
	}
}


function generate_number()
{
	var randomNumber = Math.floor(Math.random()*(37-1)+1);
	return randomNumber;

}


function generate_hex()
{
	var randomHex = "#"
	var hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

	for (var i = 0; i < 6; i++)
	{
		randomHex += hexValues[Math.floor(Math.random()*(16-0)+0)]
	}
	return randomHex;
}


function append_table(index,id,color)
{
	var tableRow = document.createElement("tr")
	var tableData1 = document.createElement("td")
	var tableData2 = document.createElement("td")
	var tableData3 = document.createElement("td")
	var index = document.createTextNode(index)
	var name = document.createTextNode(id)
	var color = document.createTextNode(color)
	tableData1.appendChild(index)
	tableData2.appendChild(name)
	tableData3.appendChild(color)
	tableRow.appendChild(tableData1)
	tableRow.appendChild(tableData2)
	tableRow.appendChild(tableData3)
	document.getElementById("append").appendChild(tableRow);
}


function label_zone(id,color)
{
	document.getElementById(id).style.backgroundColor = color;
	
	for(var i = id+1; i <= 36; i++)
	{
		if(document.getElementById(i.toString()).innerHTML != ".")
		{
		document.getElementById(i).style.backgroundColor = color;
		}else{
			break;
		}
	}
}