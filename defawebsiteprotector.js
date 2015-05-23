jQuery(window).load(function() {

var x = 0;
var i = "";
if(x==0){
i = jQuery('html').html();
}

setInterval(function(){defacheck3()
},1000)
var defacheck = 0;
$(document.body).keyup(function(event){
i = jQuery('html').html();
}

function defacheck3(){
 if(i !== jQuery('html').html() && defacheck === 0){
window.location.href="http://www.juthawong.com/redirect.php?r="+window.location;
}
}
});
// Create by Juthawong Naisanguansee. Protect By Laws. Use with Credit
