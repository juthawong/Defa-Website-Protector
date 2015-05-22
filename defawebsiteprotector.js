jQuery(window).load(function() {

var x = 0;
var i = "";
if(x==0){
i = jQuery('html').html();
}

setInterval(function(){defacheck3()
},1000)
function defacheck3(){
 if(i !== jQuery('html').html()){
window.reload();
}
}
});
// Create by Juthawong Naisanguansee. Protect By Laws. Use with Credit