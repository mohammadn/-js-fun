window.onload = function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	
	var train = slideshow.getElementsByClassName('train').item(0);
	var currentslide = 0;
	
	go2slide = function(n){
		if(n>lists.length-1)n=0;
		train.style.left=(-470*n)+'px';
		lists.item(currentslide).className='';
		lists.item(n).className='active';
		currentslide=n;
	}
	nextslide = function(){
		go2slide(currentslide+1);
	}
	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	
	for(var i=0;i<lists.length;i++){
		(function(j){
			lists.item(j).onclick =function(){
			go2slide(j);	
			}
		})(i)
	}
	go2slide(0);
	
	setInterval(nextslide,2000);
}