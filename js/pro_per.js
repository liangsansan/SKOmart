$(function(){
	/*
		点击事件点下下面小图
		在鼠标移到别的小图上
		然后鼠标移出小图
		大图返回到点击事件过的小图

	 */
	
	$('.zoom').gdszoom({
			position:'right',
		});

		$('.small-list').on('click','img',function(){
			$('.zoom img').attr({
				src:"../pro_img/d1.jpg",
				'data-big':"../pro_img/dd1.jpg"
			});
		})
		
	//移入
	$('.small-list').on('mouseenter','img',function(){
		$('.zoom img').attr({
			src:"../pro_img/d1.jpg",
			'data-big':"../pro_img/dd1.jpg"
		});
	})
	// 收藏
	/*$('.btnColl').on('click',function(){
		$(this).css({background:'url("../pro_img/pro_detial_icon1.png") no-repeat 0 -220px;'})
	})*/
	// $small.on('mouseleave','img',function(){
	// 	})
	
	// 尺码选择
	var res;
	var val = $('.btnNum').val();
	$('.goods_ul').on('click','a',function(){
		$(this).css({border:'2px solid #f90'}).siblings().css({border:0})
		res = $(this).html();
		$('.btnBar_span').html(`您将购买<b>${val}</b>件&nbsp;&nbsp;<b>${res}</b>码&nbsp;&nbsp;黑色`)	
		$('.btn1').on('click',function(){
			val = $('.btnNum').val();
			$('.btnBar_span').html(`您将购买<b>${val}</b>件&nbsp;&nbsp;<b>${res}</b>码&nbsp;&nbsp;黑色`)	
		})
		$('.btn2').on('click',function(){
			val = $('.btnNum').val();
			$('.btnBar_span').html(`您将购买<b>${val}</b>件&nbsp;&nbsp;<b>${res}</b>码&nbsp;&nbsp;黑色`);
		})
	})


	// 尺码转换
	$('.btnSize').on('click',function(){
		$(this).hide();
		$('.showBox').animate({right:1},500)
	})
	//关闭
	$('.showBox').on('click','img',function(){
		$('.showBox').animate({right:-340},500,function(){
			$('.btnSize').show();
		})
	})

	//商品详情切换
	//添加高亮
	/*$pro_main_b_top = $('.pro_main_b_top');
	$pro_main_b_top.eq(0).addClass('li_highlight');
	console.log($pro_main_b_top.eq(0));
	$pro_main_b_top.on('click','li',function(){
		$(this).addClass('li_highlight').siblings().removeClass('li_highlight');
	})*/


	var $tab = $('.p_main_b');
	var $content = $tab.find('.content');
	var $title = $tab.children('.pro_main_b_top');
	// 显示第一张
	$content.children().eq(0).show();
	console.log($content.children().eq(0));
	// 高亮第一个tab
	$title.find('li').eq(0).addClass('li_highlight');
	$list = $title.find('li');
	// 绑定点击事件
	$list.on('click',function(){
		// 获取索引值
		var idx = $(this).index();

		// tab高亮
		$(this).addClass('li_highlight').siblings().removeClass('li_highlight');


		// 页面切换
		// $content.children().hide().eq(idx).show();
		// $content.children().hide().eq(idx).fadeIn(600);
		$content.children().hide().eq(idx).show();
	});


	var pop = document.querySelector('.pop');
	console.log(pop)
	// 定位到居中位置
	setCenter();

	// 当浏览器窗口大小改变时，触发onresize事件
	window.onresize = function(){
		setCenter();
	}


	// 滚动事件
	window.onscroll = function(){
		setCenter();
	}

	function setCenter(){
		pop.style.left = window.scrollX + (window.innerWidth - 600)/2 + 'px';
		pop.style.top = window.scrollY + (window.innerHeight - 200)/2 + 'px';
	}


	// 加入购物车
	$('.btn-danger').on('click',function(){
		console.log(1);
		$('.pop').css({width:412,height:172,display:'block'})
	})
	//隐藏窗口
	$('.pop_p').on('click','span',function(){
		console.log(123);
		$('.pop').animate({width:1,height:1},1000,function(){
			$('.pop').css({display:'none'})
		});
	})
})
