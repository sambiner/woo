function removeColors(el){
	document.getElementById("small1").classList.remove("blue");
	document.getElementById("small2").classList.remove("yellow");
	document.getElementById("big").classList.remove("green");
	document.getElementById("oof").src = "images/oof2.png";
	document.getElementById("bigger").classList.remove("pink");
	document.getElementById("image").src = "images/oof1.png";
	document.getElementById("no").src = "";
	var audio = document.getElementById("audiowoo");
	audio.play();
}

function addStuff(el){
	document.getElementById("small1").classList.add("blue");
	document.getElementById("small2").classList.add("yellow");
	document.getElementById("big").classList.add("green");
	document.getElementById("oof").src = "images/oof.jpg";
	document.getElementById("bigger").classList.add("pink");
	document.getElementById("image").src = "";
	document.getElementById("no").src = "images/oof1.png";
	var audio = document.getElementById("audioof");
	audio.play();
}

function no(el){
	var audio = document.getElementById("bruh");
	audio.play();
}