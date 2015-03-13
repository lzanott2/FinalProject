$(document).ready(function() {
	addHeader();
	addFooter();


	//header code
	function addHeader () { 
	  var header = document.querySelector("header"); 
	  var nav = document.createElement("nav");
	  var ul = document.createElement("ul");
	  
	  var li = document.createElement("li");
	  var a = document.createElement("a");
	  a.setAttribute('href','index.html');
	  //li.classList.add("current");
	  a.textContent = "Home";
	  ul.appendChild(li);
	  li.appendChild(a);

	  var li2 = document.createElement("li");
	  var a2 = document.createElement("a");
	  a2.setAttribute('href','contact.html');
	  a2.textContent = "Contact";
	  ul.appendChild(li2);
	  li2.appendChild(a2);

	  var li3 = document.createElement("li");
	  var a3 = document.createElement("a");
	  a3.setAttribute('href','about.html');
	  a3.textContent = "About";
	  ul.appendChild(li3);
	  li3.appendChild(a3);

	  var li4 = document.createElement("li");
	  var a4 = document.createElement("a");
	  a4.setAttribute('href','gallery.html');
	  a4.textContent = "Image Gallery";
	  ul.appendChild(li4);
	  li4.appendChild(a4);

	  header.appendChild(nav);
	  nav.appendChild(ul);
	}


	//add footer copyright
	function addFooter () { 
	  var footer = document.querySelector("footer"); 
	  var span = document.createElement('span');
	  span.textContent = "Copyright © L. Zanotti 2015";
	  footer.appendChild(span);
	}


	//footer ip address code
	$.ajax({
		type: "GET",
	    url : "http://httpbin.org/get"

	})
	.done(function(response) {
	  	var results = response.origin;
	    console.log(response.origin);

	  	var IP = $("<p>" + "Your IP address is: " + response.origin + "</p>");
	    $("footer").append(IP);
	});
});
