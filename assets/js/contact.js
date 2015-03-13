$(document).ready(function() {

    // process the form
    $("form").submit(function(event) {

    	var name = $("input[name=name]").val();
        var email = $("input[name=email]").val();
        var checkbox = $("input[name=checkbox]:checked").val();
        var textarea = $("textarea[name=textarea]").val();
        var select = $("select[name=select]").val();


        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
        	// below values are from the "name" attribute
        	// all inputs, select, and textarea tags have a "name" attribute
            'name': name,
            'email': email,
            'checkbox': checkbox,
            'textarea': textarea,
            'select': select
        };

        

        // process the form
        $.ajax({
            url: 'http://httpbin.org/post', // the url where we want to POST
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            data: formData, // our data object
            dataType: 'json'
            // encode: true
        })
        // using the done promise callback
        .done(function(response) {

            // log data to the console so we can see
            console.log(response); 

            // here we will handle errors and validation messages
        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
        
        var text1 = $('<p>' + formData.name+ '</p>');
        var text2 = $('<p>' + formData.email + '</p>');
        var text3 = $('<p>' + formData.checkbox + '</p>');
        var text4 = $('<p>' + formData.textarea + '</p>');
        var text5 = $('<p>' + formData.select + '</p>');

        $('#results').empty();

        $('#results').append(text1);
        $('#results').append(text2);
        $('#results').append(text3);
        $('#results').append(text4);
        $('#results').append(text5);
    });

});


// $('button').click(function() {
// 	postFormData();
// });


// function postFormData() {
// 	var url = 'http://httpbin.org/post';
		    

// 	console.log(url);

// 	$.ajax({
// 		url: url,
// 		type: 'POST', //don't need but can put
// 		dataType: 'jsonp',
// 	})

// 	.done(function(data) {
// 		console.log(data);
// 	});
// }

/*******from Adam Postma
// $.ajax({
// 	url:"https://httpbin.org", 
// 	method:"POST", 
// 	data:{"textbox":"text"}
// })

// .done(function(data){
// 	console.log(data)
// });


// $.post("https://httpbin.org/post", {
// 	"key": "value"},
// 	function(data){
// 		console.log(data)
// 	}
// )
*******/

	// $(section).each(function(index) {

	// });


	// Previous code that worked is below, instead of $.each
	// for(var i = 0; i < searches.length; i++) {
	// 	//saves all obejects in the search array to the results id
	// 	results.append(searches[i]); 
		
	// 	var text1 = $("<p></p>").text(searches[i].Text);
	// 	//var text1 = $("<li></li>").text(searches[i].Text);    Why doesn't this work?

	// 	$(section).append(text1);
	// 	//$(ul).append(text1);    Why doesn't this work?
	
	// 	console.log(searches[i].Text);
	// }


	// Not sure how to use this!!!!!!
	// $("div").each(function(index) {
	// 	console.log(index + ":" + $(this).text());   <--example, but anything can go here
	// });




	// I didn't use the below code; still need to incorporate it!!!!!!

	// var windowObjectReference;

	// function openRequestedPopup() {
	//  	windowObjectReference = window.open(
	//   		"http://www.domainname.ext/path/ImageFile.png",
	//    		"DescriptiveWindowName",
	//    		"resizable,scrollbars,status"
	//  	);
	// }



// var bingKey = 'AmNIY8wGKFfCuCl/NVwA7uG6JfW+gowaYz/Ip+noCWA'; //bing key, just for me, Lor Z
// var searchUrl = 'http://api.bing.net/qson.aspx?Query='; //bing search link


// $('input').on('keyup', function (evt) {
// 		getSearches($(this).val());
// });


// function getSearches(query) {
// 	var q = query;
// 	//var pageLimit = 10;
// 	var url = encodeURI(searchUrl + query + '&JsonType=callback&JsonCallback=?');
		    

// 	console.log(url);

// 	$.ajax({
// 		url: url,
// 		type: 'GET', //don't need but can put
// 		dataType: 'jsonp',
// 	})

// 	.done(function(response) {
// 		console.log(response);
// 		render(response.SearchSuggestion.Section); //this is calling the render function and like saying that searches equates all this in the parameter for render.
// 	});
// }


// function render(searches) {
// 	var results = $('#results');
// 	$(results).empty();
// 	var section = $('section');
// 	//var ul = $('ul');    Why doesn't this work?

// 	for(var i = 0; i < searches.length; i++) {
// 		//saves all obejects in the search array to the results id
// 		results.append(searches[i]); 
		
// 		var text1 = $("<p></p>").text(searches[i].Text);
// 		//var text1 = $("<li></li>").text(searches[i].Text);    Why doesn't this work?

// 		$(section).append(text1);
// 		//$(ul).append(text1);    Why doesn't this work?
	
// 		console.log(searches[i].Text);
// 	}


// 	// $(section).each(function(index) {

// 	// });


// 	// Previous code that worked is below, instead of $.each
// 	// for(var i = 0; i < searches.length; i++) {
// 	// 	//saves all obejects in the search array to the results id
// 	// 	results.append(searches[i]); 
		
// 	// 	var text1 = $("<p></p>").text(searches[i].Text);
// 	// 	//var text1 = $("<li></li>").text(searches[i].Text);    Why doesn't this work?

// 	// 	$(section).append(text1);
// 	// 	//$(ul).append(text1);    Why doesn't this work?
	
// 	// 	console.log(searches[i].Text);
// 	// }


// 	// Not sure how to use this!!!!!!
// 	// $("div").each(function(index) {
// 	// 	console.log(index + ":" + $(this).text());   <--example, but anything can go here
// 	// });




// 	// I didn't use the below code; still need to incorporate it!!!!!!

// 	// var windowObjectReference;

// 	// function openRequestedPopup() {
// 	//  	windowObjectReference = window.open(
// 	//   		"http://www.domainname.ext/path/ImageFile.png",
// 	//    		"DescriptiveWindowName",
// 	//    		"resizable,scrollbars,status"
// 	//  	);
// 	// }
// }


