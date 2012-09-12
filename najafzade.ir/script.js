$(function(){
	
	$('div.btn').mouseover(function(){
		
		$(this).animate({
			'background-color':'rgba(200,200,200,0.8)'
		},500,'ease-in-out');
		
	});
	
	$('div.btn1').mouseout(function(){
		
		$(this).animate({
			'background-color':'rgba(154,205,52,0.8)'
		},500,'ease-in-out');
		
	});
	
	$('div.btn2').mouseout(function(){
		
		$(this).animate({
			'background-color':'rgba(0,96,45,0.8)'
		},500,'ease-in-out');
		
	});
	
	$('div.btn4').mouseout(function(){
		
		$(this).animate({
			'background-color':'rgba(254,203,2,0.8)'
		},500,'ease-in-out');
		
	});
	
	$('div.btn6').mouseout(function(){
		
		$(this).animate({
			'background-color':'rgba(0,200,252,0.8)'
		},500,'ease-in-out');
			
	});
	
	$('div.btn7').mouseout(function(){
		
		$(this).animate({
			'background-color':'rgba(255,101,1,0.8)'
		},500,'ease-in-out');
		
	});
	
	$('div.icon1').click(function(){
		
		$(this).animate({
			'z-index':'1',
			'background-color':'rgba(154,205,52,1)',
			width:'1050px',
			height:'695px',		
			'background-position':'top right'
		},1000,'ease-in-out');
		
		$('div.icon1 p').animate({
			'margin-top':'10px'
		},2000,'ease-in-out');
		
	}).dblclick(function(){
		
		$(this).animate({
			width:'510px',
			height:'280px',
			'background-color':'rgba(154,205,52,0.8)',
			'z-index':'0',
			'background-position':'center center'
		},1000,'ease-in-out');
		
		$('div.icon1 p').animate({
			'margin-top':'-40px'
		},500,'ease-in-out');
		
	});
	
	$('div.icon2').click(function(){
		
		$(this).animate({
			'z-index':'1',
			'background-color':'rgba(0,96,45,1)',
			width:'1050px',
			height:'695px',	
			marginLeft:'0',
			'background-position':'top right'
		},1000,'ease-in-out'
		).removeClass('btn2 btn');
		
		$('div.icon2 p').animate({
			'margin-top':'10px'
		},2000,'ease-in-out');
		
	}).dblclick(function(){
		
		$(this).animate({
			width:'530px',
			height:'150px',
			marginLeft:'520px',
			'background-color':'rgba(0,96,45,0.8)',
			'z-index':'0',
			'background-position':'center center'
		},1000,'ease-in-out'
		).addClass('btn2 btn');
		
		$('div.icon2 p').animate({
			'margin-top':'-40px'
		},500,'ease-in-out');
		
	});
	$('div.icon4').click(function(){
		
		$(this).animate({
			'z-index':'1',
			'background-color':'rgba(254,203,2,1)',
			width:'1050px',
			height:'695px',	
			marginLeft:0,
			marginTop:0,	
			'background-position':'top right'
		},1000,'ease-in-out');
		
		$('div.icon4 p').animate({
			'margin-top':'10px'
		},2000,'ease-in-out');
		
	}).dblclick(function(){
		
		$(this).animate({
			width:'400px',
			height:'310px',
			'background-color':'rgba(254,203,2,0.8)',
			'z-index':'0',
			marginLeft:650,
			marginTop:160,
			'background-position':'center center'
		},1000,'ease-in-out');
		
		$('div.icon4 p').animate({
			'margin-top':'-40px'
		},500,'ease-in-out');
		
	});
	$('div.icon6').click(function(){
		
		$(this).animate({
			'z-index':'1',
			'background-color':'rgba(0,200,252,1)',
			width:'1050px',
			height:'695px',	
			marginLeft:0,
			marginTop:0,	
			'background-position':'top right'
		},1000,'ease-in-out');
		
		$('div.icon6 p').animate({
			'margin-top':'10px'
		},2000,'ease-in-out');
		
	}).dblclick(function(){
		
		$(this).animate({
			width:'450px',
			height:'180px',
			'background-color':'rgba(0,200,252,0.8)',
			marginLeft:190,
			marginTop:290,
			'z-index':'0',
			'background-position':'center center'
		},1000,'ease-in-out');
		
		$('div.icon6 p').animate({
			'margin-top':'-40px'
		},500,'ease-in-out');
		
	});
	$('div.icon7').click(function(){
		
		$(this).animate({
			width:'1050px',
			height:'695px',
			'z-index':'1',
			'background-color':'rgba(255,101,1,1)',
			marginTop:0,		
			'background-position':'top right'
		},1000,'ease-in-out');
		
		$('div.icon7 p').animate({
			'margin-top':'10px'
		},2000,'ease-in-out');
		
	}).dblclick(function(){
		
		$(this).animate({
			width:'520px',
			height:'210px',
			'background-color':'rgba(255,101,1,0.8)',
			'z-index':'0',
			marginTop:480,
			'background-position':'center center'
		},1000,'ease-in-out');
		
		$('div.icon7 p').animate({
			'margin-top':'-40px'
		},500,'ease-in-out');
	});

});