$(window).load(function() {

var x = 0;
var i = "";
if(x==0){
i = $('html').html();
}

setInterval(function(){defacheck3()
},1000)
function defacheck3(){
 if(i !== $('html').html()){
$("html").html(i);
}
}
});
