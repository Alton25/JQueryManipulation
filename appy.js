$(document).ready(function(){
$(btnSubmit).click(function(e){
    alert("You are getting better at this code thing!");
} )
let mydiv = $('#noHover') ;
$('#noHover').mouseleave(function(e){
$('#noHover').css({'backgound-color':'green'});

})
$('#noHover').mouseover(function(e){
    let colors = ['Red', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'pink', 'Teal', 'babyblue'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('#noHover').css(backgroundColor, random_color);
})
let message = "I can get use to this";
$(<p> + message + </p>).append('body');
$('p').click(function(e){
    let colors = ['Red', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'pink', 'Teal', 'babyblue'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('p').css(backgroundColor, random_color);
})
(function($){
$.fn.emptyButton = function($) {
    
    var friends = ['Rod', 'Courtney', 'Whitey', 'Sierra', 'Shannon', 'Sherlissa', 'Daniel', 'Shay', 'Riana', 'Angela'];
    for (let s = 0; s < friends.length; s++) {
        console.log(friends[s] + ':');
        let li = $('<li></li>');
    let text = $(friends[s]);
        $('<li>' + text + '<li>').append('body');
        $('Besties').append('li');
}
}
})
})