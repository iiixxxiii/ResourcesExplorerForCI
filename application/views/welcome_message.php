<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<script src="/resources/js/min/jquery-1.6.min.js" type="text/javascript"></script>
	<script src="/resources/js/test.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/resources/css/test.min.css" type="text/css"></link>

</head>
<body>

<div id="container">
	<h1>CI的资源管理解决方案 V0.1</h1>

	<h6>特点:</h6>
	<ul>
		<li>1.实现简单不用修改核心,不用扩展框架</li>
		<li>2.支持支持js , css压缩</li>
		<li>3.可以和正常的资源请求共存</li>
	</ul>
	<br/>
	<div id="body">
		<p>更新时间:2013年6月4日 </p>
		<p>使用方法:</p>

		<p>1.配置在项目根目录配置 .htaccess</p>
		<pre>
		RewriteEngine on
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond $1 !^(index\.php|images|robots\.txt)
		RewriteRule ^(.*)$ /index.php/$1 [L]
		</pre>

		<p>2.在views 建立如下结构目录 </p>
		<pre>
 └─views
   └─resources
       ├─css
       │  ├─min
       │  └─src
       │      └─test
       └─js
           ├─min
           └─src
               └─test
		</pre>

		<p>3.拷贝resources.php 和 JSMin.php</p>
		<pre>
		resources.php 放在
		<code>application/controllers/</code>

		JSMin.php 默认 放在
		<code>application/views/resources/js</code>
		</pre>

		<p>4.在项目根目录建立一个 resources 文件夹</p>
		<pre>
		你可以在这个 resources 放图片资源  然后用类似下面的地址调用
		<code>resources/img/1111.gif</code>
		比如下面这张图片
		<img src='resources/img/1111.jpg'>


		也可以用下面地址调用js
		<code>/resources/js/test.min.js</code>
		或者调用css
		<code>/resources/css/test.min.css</code>
		</pre>


		也可以调用根目录 resources 文件夹里存在的文件,如
		<code>/resources/js/min/jquery-1.6.min.js</code>
			<script>
				$(document).ready(function(){
					$('#text').html("jquery已加载");
				  });
			</script>
		<p id="text">

		</P>
		</pre>

	</div>

	<p class="footer">页面加载时间 <strong>{elapsed_time}</strong> 秒</p>

	
</div>

</body>
</html>