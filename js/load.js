var preLoad;
function loaderFunc() {
	preLoad = setTimeout(showPage, 1300);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("mainBlock").style.display = "block";
}