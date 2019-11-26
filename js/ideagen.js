function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

for (var i = 0; i < iNames.length; i++) {
    preloadImage('source/'+(i+1)+'.jpg');
}

jQuery( document ).ready(function() {
    jQuery('#randomator').on('click', function(){
        var randNum1 = rand(0, (iNames.length-1));
        var randNum2 = rand(0, (iNames.length-1));
        var randNum3 = rand(0, (iNames.length-1));
        
        jQuery('#e-1').html('<img src="source/'+(randNum1+1)+'.jpg"><br><span>'+iNames[randNum1]+'</span>');
        jQuery('#e-2').html('<img src="source/'+(randNum2+1)+'.jpg"><br><span>'+iNames[randNum2]+'</span>');
        jQuery('#e-3').html('<img src="source/'+(randNum3+1)+'.jpg"><br><span>'+iNames[randNum3]+'</span>');

    });
});