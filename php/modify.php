<?php
	include 'DBHelper.php';

	session_start();

	$oldPwd = $_POST["oldPwd"];
	$newPwd = $_POST["newPwd"];

	$sql = "select * from login where password = '$oldPwd'";
	$result = query($sql);
	// echo $sql;
	if(count($result) > 0){
		if($result[0]->password == $oldPwd){
			//执行修改操作
			$update = "update login set password = '$newPwd'";
			if(excute($update)){
				echo "{state: true}";
			} else {
				echo "{state: false, message: '修改失败！！'}";
			}
		} else {
			echo "{state: false, message: '旧密码不正确！'}";
		}
	} else {
		echo "{state: false, message: '当前操作无效！！'}";
	}

	
?>