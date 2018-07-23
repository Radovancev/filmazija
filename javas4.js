$(document).ready(function(){
	$('#aboutpics').hover(function(){$(this).find('img:eq(1)').stop(true,true).fadeIn();}, 
		function(){$(this).find('img:eq(1)').fadeOut();});}); 
$('#submit').click(function(){$('#toggle').toggle( "slide" );});

function glasao() {

	alert("Thanks, we know that. :)")
}

function move() {
	var elem1 = document.getElementById("myProgress");
    var elem = document.getElementById("myBar"); 
    elem1.style.display="block";
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
    
    setTimeout(function(){ elem1.style.display="none"; }, 1500);
}