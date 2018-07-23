//jQuery za film.html

jQuery(document).ready(function()
	{var id=window.location.hash;

		if(id)
			{var url="http://www.omdbapi.com/?i="+id.substring(1)+"&plot=full&r=xml"; 
		console.log(url); 
		$.ajax(
			{url: url, type: "GET", 

			success: function(data){

				console.log(data.root); 

				data=$( data ).find("root"); 
				if(data.attr('response')=='True'){

					var movie=$( data ).find("movie"); 
					var title=movie.attr("title"); 
					var year=movie.attr("year"); 
					var released=movie.attr("released"); 
					var poster=movie.attr("poster"); 
					var imdbRating=movie.attr("imdbRating"); 
					var genre=movie.attr("genre"); 
					var plot=movie.attr('plot'); 
					var imdbID=movie.attr('imdbID'); 
//<movie title="Batman" year="1966–1968" rated="TV-G" 
//released="12 Jan 1966" runtime="25 min" genre="Action, Adventure, Comedy" 
//director="N/A" writer="Bill Finger, Lorenzo Semple Jr., William Dozier" 
// actors="Adam West, Burt Ward, Alan Napier, Neil Hamilton" 
// plot="Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually the crime-fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon summons the Dynamic Duo on the Batphone with the latest emergency threatening Gotham City. Racing to the scene of the crime in the jet-powered Batmobile, Batman and Robin must (with the help of their trusty utility-belts) thwart the efforts of a rogues gallery of flamboyant arch-villains, including the Joker, the Penguin, the Riddler and the Catwoman." 
// language="English" country="USA" awards="Nominated for 3 Primetime Emmys. Another 4 wins & 2 nominations." poster="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_SX300.jpg" 
// metascore="N/A" imdbRating="7.5" imdbVotes="13,206" imdbID="tt0059968" type="series"/> 

$(".moviesname").append(title); 
$(".moviesyear").append(year); 
$(".moviesreleased").append(released); 
$(".moviesposter").append('<img src='+poster+'/>'); 
$(".moviesrating").append('<b>'+imdbRating+'/10</b>'); 
$(".moviesgenre").append('Genre:'+genre); 
$('.moviesplot').append(plot); 
$('.moviesimdb').append('<a target="_blank" href="http://www.imdb.com/title/'+imdbID+'/?ref_=fn_al_tt_1"><img class="pulse2" src="pics/moviesimdb.png" alt="moviesimdb"/></a>');}
else{
	$("#mid").html($( data ).find("error").text());
}}});
}
else{
	window.location="hhttp://filmazija.esy.es/index.html";
}});