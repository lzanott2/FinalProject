$(document).ready(function() {

    // process the form
    $("form").submit(function(event) {

        var inputValue1 = $("input[name=firstName]").val()
        localStorage.setItem("firstName", inputValue1);

        var inputValue2 = $("input[name=lastName]").val()
        localStorage.setItem("lastName", inputValue2);

        var inputValue3 = $("input[name=courseTitle]").val()
        localStorage.setItem("courseTitle", inputValue3);


        var firstName = localStorage.getItem("firstName");
        console.log(firstName);

        var lastName = localStorage.getItem("lastName");
        console.log(lastName);

        var courseTitle = localStorage.getItem("courseTitle");
        console.log(courseTitle);



        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
          // below values are from the "name" attribute
          // all inputs tags have a "name" attribute
            'firstName': firstName,
            'lastName': lastName,
            'courseTitle': courseTitle
        };

        

        // process the form
        $.ajax({
            url: 'http://httpbin.org/post', // the url where we want to POST
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            data: formData, // our data object
            dataType: 'jsonp'
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
        
        var text1 = $('<p>' + formData.firstName+ '</p>');
        var text2 = $('<p>' + formData.lastName + '</p>');
        var text3 = $('<p>' + formData.courseTitle + '</p>');
 
        $('#results').empty();

        $('#results').append(text1);
        $('#results').append(text2);
        $('#results').append(text3);
    });
});





