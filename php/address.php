<?php
	include 'DBHelper.php';
	
	$name = $_POST['name'];
	$tel = $_POST["tel"];
	$city = $_POST["city"];
	$region = $_POST["region"];
	$site = $_POST["site"];
	$code = $_POST["code"];
	//判断当前 email 是否已存在数据表中
	$emailCheck = "select * from site where `addSite` ='$site'";
	$result = query($emailCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into site(addName,addPhone,addCity,addRegion,addSite,addCode) values('$name','$tel','$city','$region','$site','$code')";
		// echo $sql;
		$excute = excute_oop($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: '该地址已被保存过了！！！'}";
	}
?>