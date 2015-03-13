var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=';
var endUrl = '&format=json&jsoncallback=?';

$.ajax({
    url : encodeURI(url + 'serene nature' + endUrl),
    type: 'GET',
    dataType: 'jsonp'
})
.done(function(response) {
    var results = response.items;
    console.log(response.items);
    $('#results').empty();

    $.each(results, function(i, value){
        console.log(value.media);
        $("<img/>").attr("src", value.media.m).appendTo("#results");
    });  
});


