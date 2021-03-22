var para = document.createElement("p");
var node = document.createTextNode("Hello world 2.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);