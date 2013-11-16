function myFunction()
{
var x;
var txt="";
var person={fname:"John",lname:"Doe",age:25}; 

for (x in person)
{
txt=txt + person[x];
}

document.getElementById("demo").innerHTML=txt;
}

$(document).ready(function($){
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });
    $(".btn-group").click(function(){
        if($(this).hasClass('open')){
            $(".dropdown-menu").slideUp();
        }else{
            $(".dropdown-menu").slideDown();
        }
    });    
});

$(document).on('click.dropdown.data-api', function(){
        $(".dropdown-menu").slideUp();
});