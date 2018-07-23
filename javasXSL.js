$(document).ready(function(){$('#formicaxsl').addClass('formare'); 
	$('#formicaxsl thead').addClass('glava'); 
	$('#formicaxsl tbody tr:even').addClass('zebra'); 
	$('#formicaxsl tbody tr').hover(function(){
		$(this).addClass('zebraHover');}, function(){
			$(this).removeClass('zebraHover');});});