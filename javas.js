jQuery(document).ready(function(){
//Slider 

SlideShow();

//Random 10 ucitavanje blokova na index strani

$.ajax({
url: "http://filmazija.esy.es/movies.xml", 

success: function(data)
{var row=$( data ).find('row'); 
for(var i=0;i<10;i++){
	var number=Math.floor((Math.random() * 71) + 1);
	val=row[number]; 
	for (var j=0;j<row.length;j++){
		if(number==row[j]){
			i--;
			console.log(number);
		}
	}
	var a=$("<a/>",{"class":"moviesblocks", "href":"film.html#"+$( val ).find('imdbID').text()}); 
	$("#mid2").append(a.html('<img alt="slikafilma"src="'+$( val).find('Poster').text()+'"/><h2>'+$( val).find('Title').text()+' ('+$( val).find('Year').text()+')</h2>'));
}}});

$( "#search" ).focus();
//search polje

$('#search').keydown(function(e){if(e.keyCode==13){var term=$(this).val();$.ajax({url: "http://www.omdbapi.com/?s="+term+"&type=movie",type:"GET",success: function(data){if(data.Response=="True"){
//Poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"
//Title:"Batman Begins"
//Type:"movie"
//Year:"2005"
//imdbID:"tt0372784"

$("#mid2").html("");
$.each( data.Search, function( key, val ){

	if(val.Poster=='N/A') 
		return true;

	var div=$( "<a/>",{"class": "moviesblocks","href": "film.html#"+val.imdbID});
	console.log(data);
	$("#mid2").append(div.html('<img src="'+val.Poster+'"/><h2>'+ val.Title + ' (' + val.Year + ') </h2>'))
	;})
;}

else{
	$("#mid2").html("");
	$(".details").append(div.html("<p> FAIL! Try again with another ID!(LOOK YOUR ULR!)</p>"));
	console.log(data.Error);
}}});}});});

//Sliderfunction 

function SlideShow()
{var current=$('#slider .showp');
var next=current.next().length ? current.next() : current.parent().children(':first');
current.hide().removeClass('showp');
next.fadeIn().addClass('showp');
setTimeout(SlideShow, 3000);}