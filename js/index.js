$(function(){

	$main_top_left = $('.main_top_left');
	$main_top_left.on('mouseenter','a',function(){
		$(this).css({background:'#ccc',opacity:0.4})
	})

	$main_top_left.on('mouseleave','a',function(){
		$(this).css({background:'#fff',opacity:0})
	})

	$i_li1 = $('.i_li1');
	$li_1 = $('.li_1');
	$li_2 = $('.li_2');
	$i_li1.on('mouseenter',function(){
		$(this).css({width:10,height:10,background:'red'}).siblings().css({width:8,height:8,background:'#ccc'});
		
		$li_1.show();
		$li_2.hide();

	})
	$i_li2 =$('.i_li2');
	$i_li2.on('mouseenter',function(){
		$(this).css({width:10,height:10,background:'red'}).siblings().css({width:8,height:8,background:'#ccc'});
		$li_2.show();
		$li_1.hide();
	})

	$main_c_p = $('.main_c_p');
	$main_c_p.on('mouseenter','li',function(){
		$(this).css({border:'3px solid #fff'})
	})

	$main_c_p.on('mouseleave','li',function(){
		$(this).css({border:'0'})
	})


	$main_l_l1 = $('.main_l_l1');
	$main_l_l_n = $('.main_l_l_n');
	$main_l_l_b = $('.main_l_l_b');
	$main_l_l1.on('mouseenter',function(){
		$(this).css({opacity:1})
		$(this).siblings().css({opacity:0.5})
		$main_l_l_n.css({display:'none'})
		$main_l_l_b.css({display:'block'})
	})


	$main_l_l2 = $('.main_l_l2');
	$main_l_l2.on('mouseenter',function(){
		$(this).css({opacity:1})
		$(this).siblings().css({opacity:0.5})
		$main_l_l_n.css({display:'block'})
		$main_l_l_b.css({display:'none'})
	})


	$main_l_c1 = $('.main_l_c1');
	$main_l_c_n = $('.main_l_c_n');
	$main_l_c_b = $('.main_l_c_b');
	$main_l_c1.on('mouseenter',function(){
		$(this).css({opacity:1})
		$(this).siblings().css({opacity:0.5})
		$main_l_c_n.css({display:'none'})
		$main_l_c_b.css({display:'block'})
	})


	$main_l_c2 = $('.main_l_c2');
	$main_l_c2.on('mouseenter',function(){
		$(this).css({opacity:1})
		$(this).siblings().css({opacity:0.5})
		$main_l_c_n.css({display:'block'})
		$main_l_c_b.css({display:'none'})
	})


	$main_1F_link = $('.main_1F_link');
	$main_1F_link.on('mouseenter','li',function(){
		$(this).children('a').show().css({display: 'inline-block'});
	})

	$main_1F_link.on('mouseleave','li',function(){
		$(this).children('a').hide();
	})


	$main_1F_img = $('.main_1F_img');
	$main_1F_img.on('mouseenter','a',function(){
		$(this).children('img').animate({left:1},200);
	})

	$main_1F_img.on('mouseleave','a',function(){
		$(this).children('img').animate({left:8},200)/*.stop()*/;
	})


	$main_1F_right = $('.main_1F_right');
	$main_1F_right.on('mouseenter','a',function(){
		$(this).children('img').animate({right:0},200);
	})

	$main_1F_right.on('mouseleave','a',function(){
		$(this).children('img').animate({right:-8},200)/*.stop()*/;
	})



	var $list_a = $('.list_a');
		// 1）获取cookie
		var goodslist = getCookie('username');
		if (goodslist ==='') {
			$list_a.html('欢迎登录名鞋库');
		}else{
			$list_a.html(goodslist);
		}
})

