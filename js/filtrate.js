$(function(){
	$pro_classes = $('.pro_classes');
	$more = $('.more');
	$pack_up = $('.pack_up');
	//更多
	$more.on('click',function(){
		$pro_classes.find('li').show();
		$more.hide();
		$pack_up.show();
	})
	//收起
	$pack_up.on('click',function(){
		//lt 范围前14个开始算
		//gt 范围后13个开始算
		$pro_classes.find('li:lt(14)').show();
		$pro_classes.find('li:gt(13)').hide();
		$more.show();
		$pack_up.hide();

	})
	
	$unfold = $('.unfold');
	$up = $('.up');
	$f_size_dl = $('.f_size_dl');
	//大框架展开
	$unfold.on('click',function(){
	$f_size_dl.children().show();
	$unfold.hide();
	$up.show();
	})
	//大框架收起
	$up.on('click',function(){
	$f_size_dl.find('div:lt(2)').show();
	$f_size_dl.find('div:gt(3)').hide();
	$unfold.show();
	$up.hide();
	})




	//图片切换
	var $product = $('.product');
	var $max_img = $product.find('.pro_max_img');
	var $title = $product.find('.title');
	// 显示第一张
	$max_img.find('img:first-child').show();

	// 绑定点击事件
	$title.on('mouseenter','li',function(){
		// 获取索引值
		var idx = $(this).index();
		//$(this)=>title:li
		//closest('ul')=>li的父级元素ul
		//prev('div')=>ul的上个兄弟元素div:pro_max_img
		//find('img')=>div:pro_max_img的后代img,隐藏，idx显示
		$(this).closest('ul').prev('div').find('img').hide().eq(idx).show();
		// $(this).closest('ul').find('img').hide();
		// $(this).find('img').show();
		// 图片切换
		// $content.children().hide().eq(idx).show();
		// $content.children().hide().eq(idx).fadeIn(600);
		// $max_img.find('img').hide().eq(idx).show();
	});

	//鼠标移到product，背景变颜色后接着ul显示出来
	$('.pro_introduce').on('mouseenter',function(){
		$(this).closest('div').closest('div').css({background:'#eee'});
		$(this).css({background:'#eee'}).animate({height:135});
	});
	//移除
	$('.pro_introduce').on('mouseleave',function(){
		$(this).animate({height:84},function(){
		$(this).closest('div').closest('div').css({background:'#fff'});
		});
		
	})
})