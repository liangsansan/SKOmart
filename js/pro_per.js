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
					src:"../pro_img/f2.jpg",
					'data-big':"../pro_img/f3.jpg"
				});
			})
			
	//移入
	$small.on('mouseenter','img',function(){
		$pro_maxImg.attr({
			src:this.src,
			'data-big':this.src
		});
	})

	$small.on('mouseleave','img',function(){
		})

})
