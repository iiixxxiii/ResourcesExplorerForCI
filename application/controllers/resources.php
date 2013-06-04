<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
 * @class
 *
 * @description 资源处理类
 *
 * @author lixin
 *
 * @version 0.1 2013年6月3日20:18:23
 *
 * @property JSMin.php http://code.google.com/p/minify/
 *
 */
class Resources extends CI_Controller {

	private  $father_folder = 'views';
	//资源文件夹名
	private  $resources_folder = 'resources';

	//资源地址 可强制设定
	private $resources_basepath = '';


	function __construct()
    {
        parent::__construct();

		$this->resources_basepath = $this->resources_basepath !=''? $this->resources_basepath:APPPATH.$this->father_folder.'/'.$this->resources_folder.'/';

		if (!is_dir($this->resources_basepath))
		{
			$this->is_404();
		}

    }


	/**
	 * @description js 资源管理
	 *
	 * @author lixin
	 *
	 * @version 0.1 2013年6月3日20:18:23
	 */
	public function js($js_name='')
	{
		if($js_name=='')
		{
			$this->is_404();
		}

		/*
		 *  取文件名的第一节
		 *	test.min.js 取 test
		 */
		$names = explode('.',$js_name);

		$type = $names[1] && $names[1] == 'min' ? '.min' : '';
			
		$js_name = $names[0].$type.'.js';

		$this->resources_basepath .= 'js/';

		$min = 'min/';
		$src = 'src/';

		$file_name = $this->resources_basepath.$min.$js_name;

		//文件不存在 创建
		if (!file_exists($file_name))
		{

			$src_dir = $this->resources_basepath.$src.$names[0];

			if (!is_dir($src_dir))
			{
				$this->is_404();
			}

			/*$files =
			 * array{
			 *		0 => string '.' (length=1)
			 *		1 => string '..' (length=2)
			 *		2 => string 'BaseTool.js' (length=11)
			 *		3 => string 'BeanXml.js' (length=10)
			 *		}
			 * 从2开始是文件名
			 */
			$files = scandir($src_dir);

			array_splice($files, 0, 2);

			if(count($files)==0)
			{
				$this->is_404();
			}

			if(!file_exists($this->resources_basepath.'JSMin.php'))
			{
				$this->is_404();
			}

			$js_Content = '';

			foreach ($files as $value) {
				$js_Content .= file_get_contents($src_dir . '/' . $value) . ';';
			}

			if ($type == '.min') {
				//引入js压缩文件
				require $this->resources_basepath . 'JSMin.php';

				$js_Content = JSMin::minify($js_Content);
			}
			//写入文件
			file_put_contents($file_name, $js_Content);

		}

		//压缩文件未创建成功
		if (!file_exists($file_name))
		{
			$this->is_404();
		}

		header('Content-type: text/javascript');
		echo  file_get_contents($file_name);
	}


	public function css($css_name=''){

		if($css_name=='')
		{
			$this->is_404();
		}

		$names = explode('.',$css_name);

		$type = $names[1] && $names[1] == 'min' ? '.min' : '';

		$css_name = $names[0].$type.'.css';

		$this->resources_basepath .= 'css/';

		$min = 'min/';
		$src = 'src/';

		$file_name = $this->resources_basepath.$min.$css_name;

		//文件不存在 创建
		if (!file_exists($file_name))
		{
			$src_dir = $this->resources_basepath.$src.$names[0];

			if (!is_dir($src_dir))
			{
				$this->is_404();
			}

			$files = scandir($src_dir);

			array_splice($files, 0, 2);

			if(count($files)==0)
			{
				$this->is_404();
			}

			$js_Content = '';

			foreach ($files as $value) {
				$js_Content .= file_get_contents($src_dir . '/' . $value) . ';';
			}

			if ($type == '.min') {
				$js_Content = $this->compress($js_Content);
			}
			//写入文件
			file_put_contents($file_name, $js_Content);

		}

		//压缩文件未创建成功
		if (!file_exists($file_name))
		{
			$this->is_404();
		}

		header('Content-type: text/css');
		echo  file_get_contents($file_name);

	}

	private  function compress($buffer){
		/* remove comments */
		$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
		/* remove tabs, spaces, newlines, etc. */
		$buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
		return $buffer;
	}






	/**
	 * @description 服务器方法 404 错误
	 *
	 * @author lixin
	 *
	 * @version 1.0 2013年6月3日20:18:23
	 */
	private function is_404()
	{
			header("HTTP/1.0 404 Not Found");
			header("Status: 404 Not Found");
			exit;
	}
}
