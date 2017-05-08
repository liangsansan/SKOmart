$(function(){
	$topLink_3 = $('.topLink_3');
	$login = $('.login');
	$topLink_3.on('mouseenter',function(){
		$login.show();
	})

	$topLink_3.on('mouseleave',function(){
		$login.hide();
	})


	$topLink_4 = $('.topLink_4');
	$erwei = $('.erwei');
	$topLink_4.on('mouseenter',function(){
		$erwei.show();
	})

	$topLink_4.on('mouseleave',function(){
		$erwei.hide();
	})


	$nav_p = $('.nav_p');
	$nav_p_ul = $('.nav_p_ul');
	$nav_p.on('mouseenter',function(){
		$nav_p_ul.show();
	})

	$nav_p.on('mouseleave',function(){
		$nav_p_ul.hide();

	})


	$nav_Sport = $('.nav_Sport');
	$Sport = $('.Sport');
	$nav_Sport.on('mouseenter',function(){
		$Sport.show();
	})
	$nav_Sport.on('mouseleave',function(){
		$Sport.hide();
	})


	$Sport.on('mouseenter','h3',function(){
		$(this).children('i').stop().animate({left:10},300)
	})
	$Sport.on('mouseleave','h3',function(){
		$(this).children('i').animate({left:1},300)
	})


	$nav_ul_2 = $('.nav_ul_2');
	$nav_Men = $('.nav_Men');
	$nav_ul_2.on('mouseenter',function(){
		$nav_Men.show()
	})

	$nav_ul_2.on('mouseleave',function(){
		$nav_Men.hide();
	})


	$nav_ul_3 = $('.nav_ul_3');
	$nav_WoMen = $('.nav_WoMen');
	$nav_ul_3.on('mouseenter',function(){
		$nav_WoMen.show()
	})
	$nav_ul_3.on('mouseleave',function(){
		$nav_WoMen.hide();
	})

	$weixin =$('.weixin');
	$weixin.on('mouseenter',function(){
		$(this).children('span').show();
	})
	$weixin.on('mouseleave',function(){
		$(this).children('span').hide();
	})
})