function provera(){var Ime=document.getElementById("Ime").value; var Prezime=document.getElementById("Prezime").value; var Email1=document.getElementById("Email1").value; var Lozinka1=document.getElementById("Lozinka1").value; var reIme=/^[A-Z][a-z]{3,}$/; var rePrezime=/^[A-Z][a-z]{3,}$/; var reLozinka1=/^[a-zA-Z0-9!@#$%^&*]{5,}$/; var reEmail1=/^\w+[\-\.]*\w+@(\w+\.)+[A-Za-z]+$/; var Email2=document.getElementById("Email2").value; var Lozinka2=document.getElementById("Lozinka2").value; 


//ime 

if(reIme.test(Ime)){document.getElementById("Ime").style.border="1px solid green";}
else{document.getElementById("Ime").style.border="1px solid red";}
//prezime 
if(rePrezime.test(Prezime)){document.getElementById("Prezime").style.border="1px solid green";}
else{document.getElementById("Prezime").style.border="1px solid red";}
//lozinka 
if(reLozinka1.test(Lozinka1)){document.getElementById("Lozinka1").style.border="1px solid green";}
else{document.getElementById("Lozinka1").style.border="1px solid red";}
//mail 
if(reEmail1.test(Email1)){document.getElementById("Email1").style.border="1px solid green";}
else{document.getElementById("Email1").style.border="1px solid red";}}
// Strana druga

function provera2(){var reLozinka1=/^[a-zA-Z0-9!@#$%^&*]{5,}$/; 
var reEmail1=/^\w+[\-\.]*\w+@(\w+\.)+[A-Za-z]+$/; 
var Email2=document.getElementById("Email2").value; 
var Lozinka2=document.getElementById("Lozinka2").value; 
//mail na log-in-u 
if(reEmail1.test(Email2)){document.getElementById("Email2").style.border="1px solid green";}
else{document.getElementById("Email2").style.border="1px solid red";}
//lozinka na log-in-u 
if(reLozinka1.test(Lozinka2)){document.getElementById("Lozinka2").style.border="1px solid green";}
else{document.getElementById("Lozinka2").style.border="1px solid red";}}
//btn reset
function resetuj(){
document.getElementById("Ime").style.border="1px solid white"; 
document.getElementById("Prezime").style.border="1px solid white"; 
document.getElementById("Email1").style.border="1px solid white"; 
document.getElementById("Lozinka1").style.border="1px solid white"; 
document.getElementById("Email2").style.border="1px solid white"; 
document.getElementById("Lozinka2").style.border="1px solid white";}
$(".restart").click(function(){$("label").removeClass("active");});$('.form').find('.inputs, textarea').on('keyup blur focus', function (e){var $this=$(this), label=$this.prev('label'); if (e.type==='keyup'){if ($this.val()===''){label.removeClass('active highlight');}else{label.addClass('active highlight');}}else if (e.type==='blur'){if( $this.val()==='' ){label.removeClass('active highlight');}else{label.removeClass('highlight');}}else if (e.type==='focus'){if( $this.val()==='' ){label.removeClass('highlight');}else if( $this.val() !=='' ){label.addClass('highlight');}}});$('.tab a').on('click', function (e){e.preventDefault(); $(this).parent().addClass('active'); $(this).parent().siblings().removeClass('active'); target=$(this).attr('href'); $('.tab-content > div').not(target).hide(); $(target).fadeIn(600);});