// JavaScript Document

var windowTitle = "Window Properties";
var documentTitle = "Document Properties";

document.getElementById("window").innerHTML = windowTitle;
document.getElementById("update").innerHTML = documentTitle;


function myWindowResize() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var offsetX = window.pageXOffset;
	var offsetY = window.pageYOffset;
	var fullURL = document.URL;
	var documentName = document.title;
	var docLastUpdated = document.lastModified;

	var size = "Window size is " + width + " wide by " + height + " tall.<br>" + "Window offset is " + offsetX + " from the left edge and " + offsetY + " from the top of the display.<br>" + "The page URL is " + fullURL;
	var pageName = "Document title is " + documentName + "<br>The Document was last updated on " + docLastUpdated;
	document.getElementById("stats").innerHTML = size;
	document.getElementById("documentInfo").innerHTML = pageName;
}

myWindowResize();
