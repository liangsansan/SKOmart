$(function(){
	/*
		当select的option值不等于请选择，则判断属于哪个市
	*/
	$select = $('.select');
	$bj = $('.select_1');
	$sh = $('.select_2');
	$gz = $('.select_3');
	$sz = $('.select_4');
	$select.change(function(){
		if ($(this).val() === '北京市') {
			$bj.show();
			$sh.hide();
			$gz.hide();
			$sz.hide();
		}else if($(this).val() === '上海市') {
			$sh.show();
			$bj.hide();
			$gz.hide();
			$sz.hide();
		}else if($(this).val() === '广州市'){
			$gz.show();
			$bj.hide();
			$sh.hide();
			$sz.hide();
		}else{
			$sz.show();
			$bj.hide();
			$sh.hide();
			$gz.hide();
		}
	})
	/* 验证码 */
		var formDiv = document.querySelector('.formDiv');
		var formP = document.querySelector('.formP');
		var  num;
		

		//点击获取验证码
		formP.onclick = function(){
			num = randomNum(1000,10000);
			formDiv.innerHTML = num;
		}
		num = randomNum(1000,10000);
		formDiv.innerHTML = num;
})