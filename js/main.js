var cfg = {
		media: 'media/'
};

var instrus = [];

instrus.push({
		sound : 'HelmsDeepSound.ogg',
		off: 'thumb.jpg' ,
		on: 'thumb.gif' ,
		key: 65 //a
});

instrus.push({
		sound : 'ACDC_-_Back_In_Black-sample.ogg',
		off: 'thumb22.jpg' ,
		on: 'thumb2.gif' ,
		key: 90 //b
});

instrus.push({
	sound : 'bg.ogg',
	off: 'thumbuioio.jpg' ,
	on: 'thumbuioio.gif' ,
	key: 69 //e
});

function displayInstru(instru)
{
	var active = false ;

	var e = $('<img>').attr('src', cfg.media + instru.off) ;
	e.appendTo('#instrus');
	
	var audioElement = new Audio(cfg.media + instru.sound); 
	audioElement.load();
	audioElement.addEventListener('ended', function() {console.log("end sound");this.currentTime = 0;this.play();}, false);
	
	$(document).keydown(function(event){
		if(event.which != instru.key || active) return ;
		active = true ;
		e.attr('src', cfg.media + instru.on) ;
		audioElement.play();
		event.preventDefault();
	}).keyup(function(event){
		if(event.which != instru.key) return ;
		active = false ;
		e.attr('src', cfg.media + instru.off) ;
		audioElement.pause();
		audioElement.currentTime=0;
		event.preventDefault();
	});
}

$(function(){
	for(var i in instrus) displayInstru(instrus[i]);
});