<?php
	include 'DBHelper.php';
	
	$name = $_POST['name'];
	$tel = $_POST["tel"];
	$datebirth = $_POST["datebirth"];
	$city = $_POST["city"];
	$region = $_POST["region"];
	$address = $_POST["address"];
	$email = $_POST["email"];
	$code = $_POST["code"];
	$qq = $_POST["qq"];
	//判断当前 email 是否已存在数据表中
	$emailCheck = "select * from personal where `pername` ='$name'";
	$result = query($emailCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into personal(pername,prophone,prodatebirth,procity,proregion,proaddress,proemail,procode,proqq) values('$name','$tel','$datebirth','$city','$region','$address','$email','$code','$qq')";
		// echo $sql;
		$excute = excute_oop($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: '该信息已被保存过了！！！'}";
	}
?>