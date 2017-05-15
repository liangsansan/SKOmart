<?php
	include 'charset.php';
	include 'util.php';

	/*
		微博消息获取：
	    返回包含多条产品记录的json数据
	 */
	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 12;
	$file_url = 'sjon/product.json';

	// 打开文件
	$myfile = fopen($file_url, 'r');

	// 读取打开的文件
	$content = fread($myfile, filesize($file_url));

	// 把读取到的内容转成数组
	$arr_data = json_decode($content);

	// 根据分页截取数据
	$res = array(
		'data'=>array_slice($arr_data, ($page_no-1)*$qty,$qty),
		'total'=>count($arr_data)
	);

	// 输出json字符串
	echo Util::json_encode($res);

	fclose($myfile);
?>