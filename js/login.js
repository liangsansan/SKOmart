$(function(){
	$('.btn').click(function(){
        $.post('../php/login.php',{
        	name: $('#username').val(),
        	password: $('#password').val()
        }, function(response){
        	var $obj = eval('(' + response + ')');
        	if($obj.state){
            window.location.href = '../index.html';
    	} else {
        	alert($obj.message);
        	}
        })        
	})

	/*
		七天免登陆
		1）保存登录信息
			* 保留7天
			* 利用cookie技术
		2）页面刷新/重新打开，显示欢迎登录界面
			* 获取cookie
			* 根据cookie信息显示页面状态
	 */
	var $username = $('#username');
	var $password = $('#password');
	var $btn = $('.btn');
		
	var _username;
	var _psw;

		// 绑定点击事件，实现登录状态改变
		$btn.on('click',function(){
			_username = $username.val();
			_psw = $password.val();

			// 利用cookie保存登录信息
			// 设定有效期：添加expires参数

			// 七天有效期设置
			// 在当前事件基础上+7
			var now = new Date();
			now.setDate(now.getDate()+1);
			// now.setMinutes(now.getMinutes()+1);

			document.cookie = 'username=' + _username + ';expires=' + now +';path=/';
			document.cookie = 'password=' + _psw + ';expires=' + now + ';path=/';

			/*showStaus(true);*/
		})


		// 页面刷新/重新打开，显示欢迎登录界面
		// 获取cookie：document.cookie
		var cookies = document.cookie;
		console.log(cookies);

		if(cookies.length>0){
			cookies = cookies.split('; ');

			// 遍历cookies，拿到想要的cookie
			cookies.forEach(function(item){
				// 把cookie拆分成name,value
				var arr = item.split('=');

				if(arr[0] === 'username'){
					_username = arr[1];
				}else if(arr[0] === 'password'){
					_psw = arr[1];
				}
			});

			/*showStaus(true);*/
		}

		/*function showStaus(isLogin){

			// 登录
			// 显示登录信息
			// 隐藏表单
			if(isLogin){
				// 根据cookie信息显示页面状态
				// 显示欢迎界面
				welcome.innerHTML = '您好，'+_username+'，欢迎登录国家信息安全系统<button>退出</button>';

				// 隐藏表单
				form.style.display = 'none';
			}

			// 退出
			// 显示表单
			else{
				form.style.display = 'block';
				welcome.style.display = 'none';
			}
			
		}*/


		// 退出
		// 删除cookie
		// 利用设置过期时间达到删除的效果。
		/*welcome.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			if(target.tagName.toLowerCase() === 'button'){
				var now = new Date();
				now.setDate(now.getDate()-7);

				document.cookie = 'username=null;expires=' + now;
				document.cookie = 'password=null;expires=' + now;


				showStaus();
			}
		}*/
})

