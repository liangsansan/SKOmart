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

	
})