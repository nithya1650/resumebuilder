function generateCV(){
	//console.log("generating cv");

	let nameField=document.getElementById('nameField').value;

	let nameT1=document.getElementById('nameT1');

	nameT1.innerHTML=nameField;

	//direct

	document.getElementById("nameT2").innerHTML=nameField;

	document.getElementById("contactT").innerHTML=document.getElementById("contact").value;

	document.getElementById("addressT").innerHTML=document.getElementById("address").value;

	document.getElementById("linT").innerHTML=document.getElementById("linkedin").value;
	
	document.getElementById("LeetT").innerHTML=document.getElementById("leetcode").value;
	
	document.getElementById("codeT").innerHTML=document.getElementById("codechef").value;
	
	document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

	document.getElementById("weT").innerHTML=document.getElementById("weField").value;


	document.getElementById("aqT").innerHTML=document.getElementById("aqField").value;

	document.getElementById("skT").innerHTML=document.getElementById("skField").value;

	//set image

	let file=document.getElementById("imgField").files[0];

	let reader=new FileReader();
	reader.readAsDataURL(file);

	console.log(reader.result);

	reader.onloadend= function(){
		document.getElementById("imgtemplate").src=reader.result;
	};

	document.getElementById("cv-form").style.display="none";

	document.getElementById("cv-template").style.display="block";
		
}

//printing cv

function PrintCV(){
	window.print();
}