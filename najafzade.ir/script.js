$(function(){
	
	$('div.btn').mouseover( function(){
		
		$(this).animate({

			'background-color' : 'rgba(200,200,200,0.8)'

		},500,'ease-in-out');
		
	});
	
	$('div.btn1').mouseout( function(){
		
		$(this).animate({

			'background-color' : 'rgba(154,205,52,0.8)'

		},500,'ease-in-out');
		
	});
	
	$('div.btn2').mouseout( function(){
		
		$(this).animate({

			'background-color' : 'rgba(0,96,45,0.8)'

		},500,'ease-in-out');
		
	});
	
	$('div.btn4').mouseout( function(){
		
		$(this).animate({

			'background-color' : 'rgba(254,203,2,0.8)'

		},500,'ease-in-out');
		
	});
	
	$('div.btn6').mouseout( function(){
		
		$(this).animate({

			'background-color' : 'rgba(0,200,252,0.8)'

		},500,'ease-in-out');
			
	});
	
	$('div.btn7').mouseout( function(){
		
		$(this).animate({

			'background-color' : 'rgba(255,101,1,0.8)'

		},500,'ease-in-out');
		
	});
	
	$('div.icon1').click( function(){
		
		$(this).animate({
			
			width                 : 1050,
			height                : 695,	
			'z-index'             : 1,
			'background-color'    : 'rgba(154,205,52,1)',
			'background-position' : 'top right'
			
		},1000,'ease-in-out');
		
		$('div.icon1 p').animate({

			'margin-top' : 10

		},2000,'ease-in-out');
		
	}).dblclick( function(){
		
		$(this).animate({
			
			width                 : 510,
			height                : 280,
			'background-position' : 'center center'

		},1000,'ease-in-out',function(){
			
			$(this).css({
				
				'z-index'          : 0,
				'background-color' : 'rgba(154,205,52,0.8)'
				
			});
			
		});
		
		$('div.icon1 p').animate({

			'margin-top' : '-40px'

		},500,'ease-in-out');
		
	});
	
	$('div.icon2').click( function(){
		
		$(this).animate({

			width                 : 1050,
			height                : 695,
			'z-index'             : 1,	
			'margin-left'         : 0,
			'background-color'    : 'rgba(0,96,45,1)',
			'background-position' : 'top right'

		},1000,'ease-in-out'
		).removeClass('btn2 btn');
		
		$('div.icon2 p').animate({

			'margin-top' : 10

		},2000,'ease-in-out');
		
	}).dblclick( function(){
		
		$(this).animate({

			width                 : 530,
			height                : 150,
			'margin-left'         : 520,
			'background-position' : 'center center'

		},1000,'ease-in-out',function(){
			
			$(this).css({
				
				'z-index'          : 0,
				'background-color' : 'rgba(0,96,45,0.8)'
				
			});
			
		}).addClass('btn2 btn');
		
		$('div.icon2 p').animate({

			'margin-top' : '-40px'

		},500,'ease-in-out');
		
	});
	$('div.icon4').click( function(){
		
		$(this).animate({

			width                 : 1050,
			height                : 695,	
			'z-index'             : 1,
			'margin-left'         : 0,
			'margin-top'          : 0,	
			'background-color'    : 'rgba(254,203,2,1)',
			'background-position' : 'top right'

		},1000,'ease-in-out');
		
		$('div.icon4 p').animate({

			'margin-top' : 10

		},2000,'ease-in-out');
		
	}).dblclick( function(){
		
		$(this).animate({

			width                 : 400,
			height                : 310,
			'margin-left'         : 650,
			'margin-top'          : 160,
			'background-position' : 'center center'

		},1000,'ease-in-out',function(){
			
			$(this).css({
				
				'z-index'          : 0,
				'background-color' : 'rgba(254,203,2,0.8)'
				
			});
			
		});
		
		$('div.icon4 p').animate({

			'margin-top' : '-40px'

		},500,'ease-in-out');
		
	});
	$('div.icon6').click( function(){
		
		$(this).animate({
			width                 : 1050,
			height                : 695,
			'z-index'             : 1,
			'margin-left'         : 0,
			'margin-top'          : 0,	
			'background-color'    : 'rgba(0,200,252,1)',
			'background-position' : 'top right'

		},1000,'ease-in-out');
		
		$('div.icon6 p').animate({

			'margin-top' : 10

		},2000,'ease-in-out');
		
	}).dblclick( function(){
		
		$(this).animate({

			width                 : 450,
			height                : 180,
			'margin-left '        : 190,
			'margin-top'          : 290,
			'background-position' : 'center center'

		},1000,'ease-in-out',function(){
			
			$(this).css({
				
				'z-index'          : 0,
				'background-color' : 'rgba(0,200,252,0.8)'
				
			});	
			
		});
		
		$('div.icon6 p').animate({

			'margin-top' : '-40px'

		},500,'ease-in-out');
		
	});
	$('div.icon7').click( function(){
		
		$(this).animate({

			width                 : 1050,
			height                : 695,
			'z-index'             : 1,
			'margin-top'          : 0,
			'background-color'    : 'rgba(255,101,1,1)',		
			'background-position' : 'top right'

		},1000,'ease-in-out');
		
		$('div.icon7 p').animate({

			'margin-top' : 10

		},2000,'ease-in-out');
		
	}).dblclick( function(){
		
		$(this).animate({

			width                 : 520,
			height                : 210,
			'margin-top'          : 480,
			'background-position' : 'center center'

		},1000,'ease-in-out',function(){
			$(this).css({
				
				'z-index'          : 0,
				'background-color' : 'rgba(255,101,1,0.8)'
				
			});
		});
		
		$('div.icon7 p').animate({

			'margin-top' : '-40px'

		},500,'ease-in-out');
	});

});