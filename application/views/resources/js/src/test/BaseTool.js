
var com = {};
com.xjwgraph = {};

var PathGlobal = com.xjwgraph.PathGlobal = {
	
	/** 
	 * @field 
	 * @default 1
	 * @description 模型左上拖动点
	 */
	pointTypeLeftUp : 1,
	
	/** 
	 * @field 
	 * @default 2
	 * @description 模型上拖动点
	 */
	pointTypeUp : 2,
	
	/** 
	 * @field 
	 * @default 3
	 * @description 模型右上拖动点
	 */
	pointTypeUpRight : 3,
	
	/** 
	 * @field 
	 * @default 4
	 * @description 模型左拖动点
	 */
	pointTypeLeft : 4,
	
	/** 
	 * @field 
	 * @default 5
	 * @description 模型右拖动点
	 */
	pointTypeRight :5,
	
	/** 
	 * @field 
	 * @default 6
	 * @description 模型左下拖动点
	 */
	pointTypeLeftDown : 6,
	
	/** 
	 * @field 
	 * @default 7
	 * @description 模型下拖动点
	 */
	pointTypeDown : 7,
	
	/** 
	 * @field 
	 * @default 8
	 * @description 模型右下拖动点
	 */
	pointTypeDownRight : 8,
	
	/** 
	 * @field 
	 * @default 10
	 * @description 线元id序列
	 */
	lineDefIndex : 10,
	
	/** 
	 * @field 
	 * @default 2
	 * @description 线元id步长
	 */
	lineDefStep : 2,
	
	/** 
	 * @field 
	 * @default 10
	 * @description 模元id序列
	 */
	modeDefIndex : 10,
	
	/** 
	 * @field 
	 * @default 2
	 * @description 模元步长
	 */
	modeDefStep : 2,
	
	/** 
	 * @field 
	 * @default 3
	 * @description 模元inc
	 */
	modeInc : 3,
	
	/** 
	 * @field 
	 * @default 10
	 * @description 滑动间隔时间
	 */
	pauseTime : 10,
	
	/** 
	 * @field 
	 * @default 0
	 * @description 模元默认高
	 */
	modeHeigh : 0,
	
	/** 
	 * @field 
	 * @default 10
	 * @description 拷贝模元位差值
	 */
	copyModeDec : 10,
	
	/** 
	 * @field 
	 * @default false
	 * @description 是否开启右键
	 */
	rightMenu : false,
	
	/** 
	 * @field 
	 * @default true
	 * @description 是否启用像素精度
	 */
	isPixel : true,
	
	/** 
	 * @field 
	 * @default 17
	 * @description 最大保留历史操作记录数
	 */
	maxEvent : 17,
	
	/** 
	 * @field 
	 * @default 32
	 * @description 模元最小的高
	 */
	minHeight : 32,
	
	/** 
	 * @field 
	 * @default 32
	 * @description 模元最小的宽
	 */
	minWidth : 32,
	
	/** 
	 * @field 
	 * @default 'C5E7F6'
	 * @description 选中色
	 */
	selectColor : 'C5E7F6',
	
	/** 
	 * @field 
	 * @default blue
	 * @description 未选中时边线色
	 */
	clearBoderColor : 'blue',
	
	/** 
	 * @field 
	 * @default green
	 * @description 默认色
	 */
	defaultColor : 'green',
	
	/** 
	 * @field 
	 * @default 0.5
	 * @description 默认最大的缩放度
	 */
	defaultMaxMag : 0.5,
	
	/** 
	 * @field 
	 * @default 2
	 * @description 默认最小的缩放度
	 */
	defaultMinMag : 2,
	
	/** 
	 * @field 
	 * @default black
	 * @description 线颜色
	 */
	lineColor : 'black',
	
	/** 
	 * @field 
	 * @default red
	 * @description 线选中颜色
	 */
	lineCheckColor : 'red',
	
	/** 
	 * @field 
	 * @default 1.8
	 * @description 线宽
	 */
	strokeweight : 1.8,
	
	/** 
	 * @field 
	 * @default 新建模型
	 * @description newGraph文言
	 */
	newGraph : '\u65b0\u5efa\u56fe\u5c42',
	
	/** 
	 * @field 
	 * @default 模元创建
	 * @description modeCreate文言
	 */
	modeCreate : '\u521b\u5efa\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 线创建
	 * @description lineCreate文言
	 */
	lineCreate : '\u521b\u5efa\u7ebf\u5143',
	
	/** 
	 * @field 
	 * @default 模元移动
	 * @description modeMove文言
	 */
	modeMove : '\u79fb\u52a8\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 线移动
	 * @description lineMove文言
	 */
	lineMove : '\u79fb\u52a8\u7ebf\u5143',
	
	/** 
	 * @field 
	 * @default 模元拖动
	 * @description modeDragPoint文言
	 */
	modeDragPoint : '\u7f29\u653e\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 模元更新
	 * @description updateMode文言
	 */
	updateMode : '\u7f16\u8f91\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 复制模元
	 * @description copyMode文言
	 */
	copyMode : '\u62f7\u8d1d\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 移除模元
	 * @description removeMode文言
	 */
	removeMode : '\u5220\u9664\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 删除线元
	 * @description remodeLine文言
	 */
	remodeLine : '\u5220\u9664\u7ebf\u5143',
	
	/** 
	 * @field 
	 * @default 模元清除
	 * @description baseClear文言
	 */
	baseClear : '\u9009\u62e9\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 合并区域
	 * @description toMerge文言
	 */
	toMerge : '\u7ec4\u5408\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 拆分区域
	 * @description toSeparate文言
	 */
	toSeparate : '\u89e3\u7ec4\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 清除区域
	 * @description clearContext文言
	 */
	clearContext : '\u6e05\u9664\u533a\u57df',
	
	/** 
	 * @field 
	 * @default 区域拖拽
	 * @description contextDivDrag文言
	 */
	contextDivDrag : '\u79fb\u52a8\u533a\u57df',
	
	/** 
	 * @field 
	 * @default 左对齐
	 * @description toLeft文言
	 */
	toLeft : '\u5de6\u5bf9\u9f50',
	
	/** 
	 * @field 
	 * @default 右对齐
	 * @description toRight文言
	 */
	toRight : '\u53f3\u5bf9\u9f50',
	
	/** 
	 * @field 
	 * @default 水平居中
	 * @description toMiddleWidth文言
	 */
	toMiddleWidth : '\u5782\u76f4\u5c45\u4e2d',
	
	/** 
	 * @field 
	 * @default 顶端对齐
	 * @description toTop文言
	 */
	toTop : '\u9876\u5bf9\u9f50',
	
	/** 
	 * @field 
	 * @default 居中对齐
	 * @description toMiddleHeight文言
	 */
	toMiddleHeight : '\u6c34\u5e73\u5c45\u4e2d',
	
	/** 
	 * @field 
	 * @default 低端对齐
	 * @description toBottom文言
	 */
	toBottom : '\u5e95\u5bf9\u9f50',
	
	/** 
	 * @field 
	 * @default 关系建立
	 * @description buildLineAndMode文言
	 */
	buildLineAndMode : '\u7ed1\u5b9a\u7ebf\u5143',
	
	/** 
	 * @field 
	 * @default 模元剪切
	 * @description modeCutter文言
	 */
	modeCutter : '\u526a\u5207\u6a21\u5143',
	
	/** 
	 * @field 
	 * @default 模元复制
	 * @description modeDuplicate文言
	 */
	modeDuplicate : '\u590d\u5236\u6a21\u578b',
	
	/** 
	 * @field 
	 * @default 事件名称
	 * @description eventName文言
	 */
	eventName : '\u89e6\u53d1\u4e8b\u4ef6'
	
}
 	
var UndoRedoEventFactory = com.xjwgraph.UndoRedoEventFactory = 
							 /**
								* @class
								* @name com.xjwgraph.UndoRedoEventFactory
								* @description UndoRedo事件工厂
                * @author xiaojw 
                * @version 0.1 
                * @param hisMessageDiv 历史现实区域
                * @property hisMessageDiv 历史现实区域.
                * @property stack 事件队列.
                * @property index 当前事件指针.
                * @property redo 执行重做.
                * @property undo 执行撤销.
                * @property addEvent 添加新事件.
                */ function (hisMessageDiv) {
	
	var self = this;
	
	self.hisMessageDiv = hisMessageDiv;
	self.stack = [];
	self.index = 0;
	
	self.redo = function() {
		
		stopEvent = true;
		
		var fn = self.stack[self.index];

		if (fn) {
			fn.redo();
			this.index++;
		}
		
		var endLength = self.stack.length;
		
		if (this.index > endLength) {
			this.index = endLength;
		}
		
		self.history();
	
	}
	
	self.undo = function() {
		
		stopEvent = true;
		
		var fn = self.stack[self.index - 1];
		
		if (fn) {
			fn.undo();
			self.index--;
		}
		
		if (this.index < 1) {
			self.index = 1;
		}
		
		self.history();
	
	}
	
	self.addEvent = function(undoRedoEvent) {
		
		self.stack.splice(self.index, (self.stack.length - self.index++), undoRedoEvent);
		
		if (self.stack.length > PathGlobal.maxEvent) {
			self.stack.splice(0, 1);
			this.index = PathGlobal.maxEvent;
		}
		
		self.history();
		
	}
	
}

UndoRedoEventFactory.prototype = /** @scope com.xjwgraph.UndoRedoEventFactory */ {
	
	/**
	 * @description 初始化方法
	 */
	init : function () {
	
		var newGraph = new com.xjwgraph.UndoRedoEvent(function () {}, PathGlobal.newGraph);
		newGraph.setRedo(function() {});

	}, 
	
	/**
	 * @description 历史记录操作
	 * @param historyDiv 历史区域
	 * @param indexDiv 目标事件位置
	 */
	onHistory : function (historyDiv, indexDiv) {
	
		var self = this;
	
		historyDiv.onclick = function () {
		
			stopEvent = true;
		
			if (indexDiv > self.index) {

				for (var i = self.index; i <= indexDiv - 1; i++) {
			
					var fn = self.stack[i];
				
					if (fn && fn.redo) {
						fn.redo();
					}
			
				}
		
			} else if (indexDiv < self.index) {
			
				for (var i = self.index; i >= indexDiv; i--) {
			
					var fn = self.stack[i];
				
					if (fn && fn.undo) {
						fn.undo();
					}
			
				}
			
			}
		
			self.index = indexDiv;
			self.history();
	
		}
	
	},
	
	/**
	 * @description 重构历史日志
	 */
	history : function () {
	
		var history = $id(this.hisMessageDiv);
	
		if (!history) {
			return;
		}
	
		var self = this;
		history.innerHTML = "";
	
		var stackLength = self.stack.length,
		doc = document,
		tempFragment = doc.createDocumentFragment();
	
		for (var i = 0; i < stackLength; i++) {
		
			var div = doc.createElement("div");
			div.style.cssText = "position:relative;text-align:center;border-bottom:1px dotted #cccccc; width:112px;height:20px;line-height:20px;";
			div.innerHTML = self.stack[i].name;
		 
			var indexDiv = i + 1;
			self.onHistory(div, indexDiv);
		 
			if ((self.index) == indexDiv) {
				div.style.backgroundColor = PathGlobal.selectColor;
			}
		 
			tempFragment.appendChild(div);

		}
	
		history.appendChild(tempFragment);
	
	}, 
	
	/**
	 * @description 清空所有历史信息
	 */
	clear : function () {
	
		var self = this;
	
		delete self.stack;
	
		self.stack = [];
		self.index = 0;
		
		self.history();
	
	}

}

var UndoRedoEvent = com.xjwgraph.UndoRedoEvent = 
							 /**
								* @class
								* @name com.xjwgraph.UndoRedoEvent
								* @description 重做/撤销事件封装
                * @author xiaojw 
                * @version 0.1 
                * @param undoFn 撤销事件
                * @param name 事件名称
                * @property name 事件名称.
                * @property undo 撤销事件.
                * @property redo 重做事件.
                * @property setUndo 设置Undo事件.
                * @property setRedo 设置Redo事件.
                */ function (undoFn, name) {
	
	var self = this;
	
	self.name = name ? name : PathGlobal.eventName;
	self.undo = undoFn;
	self.redo;
	
	com.xjwgraph.Global.undoRedoEventFactory.addEvent(self);
	
	self.setUndo = function (undoFn) {
		self.undo = undoFn;
	}
	
	self.setRedo = function (redoFn) {
		self.redo = redoFn;
	}
	
}
		
var BaseTool = com.xjwgraph.BaseTool = 
							 /**
								* @class
								* @name com.xjwgraph.BaseTool
								* @description 基础工具类,提供基础模型.
                * @author xiaojw 
                * @version 0.1 
                * @param pathBody 绘图区域.
                * @param width 预设宽
                * @param height 预设高
                * @property pathBody 绘图区域.
                * @property checkColor 选中颜色.
                * @property areaDiv 区域层.
                * @property contextMoveAbale 区域是否移动.
                * @property contextMoveAttempt 临时区域移动.
                * @property contextMap 区域集.
                * @property tempContextId 当前活动临时区域.
                * @property isOpera 判断是否opera浏览器
                * @property isIE 判断是否ie浏览器
                * @property isIE7 判断是否ie7浏览器
                * @property isIE8 判断是否ie8浏览器
                * @property isIE6 判断是否ie6浏览器
                * @property isChrome 判断是否chrome浏览器
                * @property isWebKit 判断是否webKit浏览器
                * @property isSafari 判断是否safari浏览器
                * @property isSafari2 判断是否safari2浏览器
                * @property isSafari3 判断是否safari3浏览器
                * @property isSafari4 判断是否safari4浏览器
                * @property isGecko 判断是否gecko浏览器
                * @property isGecko2 判断是否gecko2浏览器
                * @property isGecko3 判断是否gecko3浏览器
                */function (pathBody, width, height) {
	
	var self = this;
	
	self.pathBody = pathBody;
	self.checkColor = "#00ff00";
	self.areaDiv = document.createElement("div");
	self.initEndDiv(width, height);
	self.initPathBody(self.pathBody);
	self.contextMoveAbale = false;
	self.contextMoveAttempt = false;
	self.contextMap = new Map();
	self.tempContextId = null;
	
	self.checkBrowser();
	
}

BaseTool.prototype = /** @scope com.xjwgraph.BaseTool */ {
	
	/**
	 * @description 依据比率值,重新绘制区域模型.
	 * @param multiple 比率.
	 */
	initScaling : function (multiple) {
	
		var self = this,
				tempSmallTool = com.xjwgraph.Global.smallTool;
	
		self.forEach(self.contextMap, function (contextId) {
		
			var context = $id(contextId),
			contextStyle = context.style;
		
			contextStyle.top = 0 + "px";
			contextStyle.left = 0 + "px";
		
			var contextWidth = 0,
					contextHeight = 0,
					modeMaps = self.contextMap.get(contextId);
		
			self.forEach(modeMaps, function (modeId) {
			
				var mode = $id(modeId),
				modeStyle = mode.style,
			
				modeTop = parseInt(modeStyle.top),
				modeLeft = parseInt(modeStyle.left),
				modeWidth = parseInt(mode.offsetWidth),
				modeHeight = parseInt(mode.offsetHeight),
			
				contextTop = parseInt(contextStyle.top),
				contextLeft = parseInt(contextStyle.left);
			
				if (contextTop > modeTop || contextTop == 0) {
					contextStyle.top = modeTop + "px";
				}
			
				if (contextLeft > modeLeft || contextLeft == 0) {
					contextStyle.left = modeLeft + "px";
				}
			
				if (contextWidth < modeWidth + modeLeft) {
					contextWidth = modeWidth + modeLeft;
				}
			
				if (contextHeight < modeHeight + modeTop) {
					contextHeight = modeHeight + modeTop;
				}
			
			});

			contextStyle.width = contextWidth - parseInt(contextStyle.left) + "px";
			contextStyle.height = contextHeight - parseInt(contextStyle.top) + "px";
		
		});
	
	}, 
	
	/**
	 * @description 查找出所有需要操作的Mode集合
	 * @param tempContextId 操作区域Id
	 * @returns modes 模元集合
	 */
	getOptionMap : function (tempContextId) {
	
		var self = this,
		map = null;

		if (tempContextId) {
			map = self.contextMap.get(tempContextId);
		} else {
			
			var global = com.xjwgraph.Global;
			
			map = new Map();
			map.putAll(global.modeMap);
		
			var tempBaseTool = global.baseTool;
		
			tempBaseTool.forEach(tempBaseTool.contextMap, function (contextId) {
				
				var sonContextModeMap = tempBaseTool.contextMap.get(contextId),
				sonContextDiv = $id(contextId),
				isGroups = sonContextDiv.getAttribute("groups");
				
				tempBaseTool.forEach(sonContextModeMap, function (modeId) {
				
					if (isGroups == "true" || isGroups) {
						map.remove(modeId);
					}
					
				});
				
			});
		
		}
	
		return map;

	},
	
	/**
	 * @description 左排序
	 */
	toLeft : function () {
	
		var self = this,
		map = self.getOptionMap(self.tempContextId),
		
		left = -1;
	
		self.forEach(map, function (modeId) {
			
			var mode = $id(modeId),
			modeLeft = parseInt(mode.style.left);
		
			if (left > modeLeft || left == -1) {
				left = modeLeft;
			}
		
		});
		
		var global = com.xjwgraph.Global,
	
		tempModeTool = global.modeTool,
		tempSmallTool = global.smallTool,
	
		oldLeftMap = new Map(),
		afterLeftMap = new Map();
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style;
		
			oldLeftMap.put(modeId, parseInt(modeStyle.left));
		
			modeStyle.left = left + "px";
		
			afterLeftMap.put(modeId, parseInt(modeStyle.left));
		
			tempModeTool.showPointer(mode);
			tempModeTool.changeBaseModeAndLine(mode, true);
		
			tempSmallTool.drawMode(mode);
		
		});
	
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.left = oldLeftMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
				
		}, PathGlobal.toLeft);
	
		undoRedoEvent.setRedo(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.left = afterLeftMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
		
		});
	
	},
	
	/**
	 * @description 居中对齐
	 */
	toMiddleWidth : function () {
	
		var self = this,
		map = self.getOptionMap(self.tempContextId),
		middleWidthArray = [],
		i = 0;
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId);
			middleWidthArray[i++] = parseInt(mode.style.left) + parseInt(parseInt(mode.offsetWidth) / 2);
		
		});
	
		middleWidthArray = middleWidthArray.sort(function (n1, n2) { 
			return n1 - n2
		});
	
		var middleNumber = parseInt(middleWidthArray.length / 2),
		middleLeft = middleWidthArray[middleNumber],
	
		global = com.xjwgraph.Global,
		
		tempModeTool = global.modeTool,
		tempSmallTool = global.smallTool,
	
		oldLeftMap = new Map(),
		afterLeftMap = new Map();
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style;
		
			oldLeftMap.put(modeId, parseInt(modeStyle.left));
		
			var decLeft = parseInt(parseInt(modeStyle.left) + parseInt(parseInt(mode.offsetWidth) / 2) - middleLeft);
			modeStyle.left = parseInt(parseInt(modeStyle.left) - decLeft) + "px";
		
			afterLeftMap.put(modeId, parseInt(modeStyle.left));
		
			tempModeTool.showPointer(mode);
			tempModeTool.changeBaseModeAndLine(mode, true);
		
			tempSmallTool.drawMode(mode);
		
		});
	
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.left = oldLeftMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
				
		}, PathGlobal.toMiddleWidth);
	
		undoRedoEvent.setRedo(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.left = afterLeftMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
		
		});
	
	},
	
	/**
	 * @description 右对齐
	 */
	toRight : function () {
	
		var self = this,
		map = self.getOptionMap(self.tempContextId),
	
		right = -1;
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeRight = parseInt(mode.style.left) + parseInt(mode.offsetWidth);
		
			if (right < modeRight) {
				right = modeRight;
			}
		
		});
		
		var global = com.xjwgraph.Global,
		
		tempModeTool = global.modeTool,
		tempSmallTool = global.smallTool,
	
		oldLeftMap = new Map(),
		afterLeftMap = new Map();
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style;
		
			oldLeftMap.put(modeId, parseInt(modeStyle.left));
		
			var modeRight = parseInt(modeStyle.left) + parseInt(mode.offsetWidth);
			modeStyle.left = (right - modeRight) + parseInt(modeStyle.left) + "px";
		
			afterLeftMap.put(modeId, parseInt(modeStyle.left));
		
			tempModeTool.showPointer(mode);
			tempModeTool.changeBaseModeAndLine(mode, true);
		
			tempSmallTool.drawMode(mode);
		
		});
	
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.left = oldLeftMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
				
		}, PathGlobal.toRight);
	
		undoRedoEvent.setRedo(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.left = afterLeftMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
		
		});
	
	}, 
	
	/**
	 * @description 顶端对齐
	 */
	toTop : function () {
	
		var self = this,
		map = self.getOptionMap(self.tempContextId),
		top = -1;
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeTop = parseInt(mode.style.top);
		
			if (top > modeTop || top == -1) {
				top = modeTop;
			}
		
		});
		
		var global = com.xjwgraph.Global,
	
		tempModeTool = global.modeTool,
		tempSmallTool = global.smallTool,
	
		oldTopMap = new Map(),
		afterTopMap = new Map();
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style;
		
			oldTopMap.put(modeId, parseInt(modeStyle.top));
		
			modeStyle.top = top + "px";
		
			afterTopMap.put(modeId, parseInt(modeStyle.top));
		
			tempModeTool.showPointer(mode);
			tempModeTool.changeBaseModeAndLine(mode, true);
		
			tempSmallTool.drawMode(mode);
		
		});
	
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.top = oldTopMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
				
		}, PathGlobal.toTop);
	
		undoRedoEvent.setRedo(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.top = afterTopMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
		
		});
	
	},
	
	/**
	 * @description 垂直居中
	 */
	toMiddleHeight : function () {
	
		var self = this,
		map = self.getOptionMap(self.tempContextId),
		middleHeightArray = [],
		i = 0;
	
		this.forEach(map, function (modeId) {
		
			var mode = $id(modeId);
			middleHeightArray[i++] = parseInt(mode.style.top) + parseInt(parseInt(mode.offsetHeight) / 2);
		
		});
	
		middleHeightArray = middleHeightArray.sort(function (n1, n2) { 
			return n1 - n2
		});
	
		var middleNumber = parseInt(middleHeightArray.length / 2),
		middleTop = middleHeightArray[middleNumber],
		
		global = com.xjwgraph.Global,
		
		tempModeTool = global.modeTool,
		tempSmallTool = global.smallTool,
	
		oldTopMap = new Map(),
		afterTopMap = new Map();
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style,
		
			decTop = parseInt(parseInt(modeStyle.top) + parseInt(parseInt(mode.offsetHeight) / 2) - middleTop);
		
			oldTopMap.put(modeId, parseInt(modeStyle.top));
		
			modeStyle.top = parseInt(parseInt(modeStyle.top) - decTop) + "px";
		
			afterTopMap.put(modeId, parseInt(modeStyle.top));
		
			tempModeTool.showPointer(mode);
			tempModeTool.changeBaseModeAndLine(mode, true);
		
			tempSmallTool.drawMode(mode);
		
		});
	
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.top = oldTopMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
				
		}, PathGlobal.toMiddleHeight);
	
		undoRedoEvent.setRedo(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.top = afterTopMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
		
		});
	
	},
	
	/**
	 * @description 底端对齐
	 */
	toBottom : function () {
	
		var self = this,
		
		map = self.getOptionMap(self.tempContextId),
		bottom = -1;

		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeBottom = parseInt(mode.style.top) + parseInt(mode.offsetHeight);
		
			if (bottom < modeBottom) {
				bottom = modeBottom
			}
		
		});
		
		var global = com.xjwgraph.Global,
		
		tempModeTool = global.modeTool,
		tempSmallTool = global.smallTool,
	
		oldTopMap = new Map(),
		afterTopMap = new Map();
	
		self.forEach(map, function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style,
		
			modeBottom = parseInt(modeStyle.top) + parseInt(mode.offsetHeight);
		
			oldTopMap.put(modeId, parseInt(modeStyle.top));
		
			modeStyle.top = (bottom - modeBottom) + parseInt(modeStyle.top) + "px";
		
			afterTopMap.put(modeId, parseInt(modeStyle.top));
		
			tempModeTool.showPointer(mode);
			tempModeTool.changeBaseModeAndLine(mode, true);
		
			tempSmallTool.drawMode(mode);
		
		});
	
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.top = oldTopMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
				
		}, PathGlobal.toBottom);
	
		undoRedoEvent.setRedo(function () {
		
			self.forEach(map, function (modeId) {
		
				var mode = $id(modeId);
		
				mode.style.top = afterTopMap.get(modeId) + "px";
		
				tempModeTool.showPointer(mode);
				tempModeTool.changeBaseModeAndLine(mode, true);
		
				tempSmallTool.drawMode(mode);
		
			});
		
		});
	
	}, 
	
	/**
	 * @description 计算父对象的left,top.
	 * @param body 绘图区域
	 * @param sumLeft 汇总的left
	 * @param sumTop 汇总的top
	 * @returns [left, top] 数组汇总集
	 */
	sumLeftTop : function (body, sumLeft, sumTop) {
	
		if (!sumLeft) {
			sumLeft = body.offsetLeft;
		}
	
		if (!sumTop) {
			sumTop = body.offsetTop;
		}
	
		var parent = body.offsetParent;
					
		if (parent) {
						
			sumLeft += parent.offsetLeft;
			sumTop += parent.offsetTop; 
						
			return this.sumLeftTop(parent, sumLeft, sumTop);
					
		} else {
			return [sumLeft, sumTop];
		}
	
	},
	
	/**
	 * @description 改变样式
	 * @param div 菜单提示
	 */
	changStyle : function (div) {
	
		PathGlobal.isPixel = !PathGlobal.isPixel;
		div.innerHTML = PathGlobal.isPixel ? "Pixel" : "Grid";
	
	},
	
	/**
	 * @description 区域菜单
	 * @param event window事件
	 * @param contextId 区域Id
	 */
	showMenu : function (event, contextId) {
	
		this.tempContextId = contextId;
	
		event = event || window.event;
	
		if (!event.pageX) {
			event.pageX = event.clientX;
		} 
		
		if (!event.pageY) {
			event.pageY = event.clientY;
		}
   	
  	var tx = event.pageX,
		ty = event.pageY,
		
		global = com.xjwgraph.Global,
		
		tempPathBody = global.lineTool.pathBody,
		leftTops = global.baseTool.sumLeftTop(tempPathBody);
   			
		tx = tx - parseInt(leftTops[0]) + parseInt(tempPathBody.scrollLeft);
		ty = ty - parseInt(leftTops[1]) + parseInt(tempPathBody.scrollTop);
	
		var isPixel = $id("isPixel"),
		isPixelStyle = isPixel.style;
	
		if (contextId) {
			isPixelStyle.visibility = "hidden";
		} else {
			isPixelStyle.visibility = "visible";
		}
	
		var pathBodyRightMenu = $id("pathBodyRightMenu");
		pathBodyRightMenuStyle = pathBodyRightMenu.style;

		pathBodyRightMenuStyle.top = ty + "px";
		pathBodyRightMenuStyle.left = tx + "px";
		pathBodyRightMenuStyle.visibility = "visible";
		pathBodyRightMenuStyle.zIndex = com.xjwgraph.Global.modeTool.getNextIndex();
					
	},
	
	/**
	 * @description 拆分区域
	 */
	toSeparate : function () {
	
		var self = this,
		contextArray = [],
		i = 0;
	
		self.forEach(self.contextMap, function(contextId) {
			
			var contextDiv = $id(contextId);
		
			if (contextDiv.style.borderColor == PathGlobal.defaultColor) {
				contextArray[i++] = contextDiv;
				contextDiv.setAttribute("groups", false);
			}
		
		});
		
		var global = com.xjwgraph.Global;
		
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			var contextLength = contextArray.length,
			tempBaseTool = global.baseTool;
		
			for (var i = contextLength; i--;) {
		
				var contextDiv = contextArray[i];
				contextDiv.setAttribute("groups", true);
			
			}
		
		}, PathGlobal.toSeparate);
	
		undoRedoEvent.setRedo(function () {
		
			var contextLength = contextArray.length,
			tempBaseTool = global.baseTool;
		
			for (var i = contextLength; i--;) {
			
				var contextDiv = contextArray[i];
				contextDiv.setAttribute("groups", true);
			
			}
		
		});
	
		self.clearContext();
	
	},
	
	/**
	 * @description 检查浏览器类型
	 */
	checkBrowser : function () {

		var ua = navigator.userAgent.toLowerCase();
	
		check = function(r){
			return r.test(ua);
		}
	
		var self = this;
	
		self.isOpera = check(/opera/);
		self.isIE = !self.isOpera && check(/msie/);
		self.isIE7 = self.isIE && check(/msie 7/);
		self.isIE8 = self.isIE && check(/msie 8/);
		self.isIE6 = self.isIE && !self.isIE7 && !self.isIE8;
		self.isChrome = check(/chrome/);
		self.isWebKit = check(/webkit/);
		self.isSafari = !self.isChrome && check(/safari/);
		self.isSafari2 = self.isSafari && check(/applewebkit\/4/);
		self.isSafari3 = self.isSafari && check(/version\/3/);
		self.isSafari4 = self.isSafari && check(/version\/4/);
		self.isGecko = !self.isWebKit && check(/gecko/);
		self.isGecko2 = self.isGecko && check(/rv:1\.8/);
		self.isGecko3 = self.isGecko && check(/rv:1\.9/);
	
	},
	
	/**
	 * @description 得到浏览器名称
	 * @returns browserName 浏览器名称
	 */
	getBrowserName : function () {
	
		var self = this;
	
		if (self.isIE) {
		
			if (self.isIE8) {
				return "IE8";
			} else if (self.isIE7) {
				return "IE7";
			} else if (self.isIE6) {
				return "IE6";
			} else {
				return "IE";
			}
		
		}
	
		if (self.isChrome) {
			return "CHROME";
		} else if (self.isWebKit) {
			return "WEBKIT";
		} else if (self.isOpera) {
			return "OPERA";
		} else if (self.isGecko) {
			return "GECKO";
		} else if (self.isGecko2) {
			return "GECKO2";
		} else if (self.isGecko3) {
			return "GECKO3";
		}
	
		if (self.isSafari) {
			return "SAFARI";
		} else if (self.isSafari2) {
			return "SAFARI2";
		} else if (self.isSafari3) {
			return "SAFARI3";
		} else if (self.isSafari4) {
			return "SAFARI4";
		}
	
	},

	/**
	 * @description 打印预览
	 */
	printView : function () {
		
		var viewHTML = window.open('view.html', '', '');
		
		if (this.isChrome || this.isGecko) {
		
			var viewHTMLBuffer = [],
			i = 0;
	
			viewHTMLBuffer[i++] = '<html>';
			viewHTMLBuffer[i++] = '<head>';
			viewHTMLBuffer[i++] = '<link href="css/flowPath.css" type="text/css" rel="stylesheet" />';
			viewHTMLBuffer[i++] = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
			viewHTMLBuffer[i++] = '<title></title>';
			viewHTMLBuffer[i++] = '</head>';
			viewHTMLBuffer[i++] = '<body>';
			viewHTMLBuffer[i++] = document.getElementById("contextBody").innerHTML;
			viewHTMLBuffer[i++] = '</body></html>';
		
			viewHTML.document.write(viewHTMLBuffer.join(""));
		
		}
	
		viewHTML.document.close();

	},
	
	/**
	 * @description 合并对象
	 */
	toMerge : function () {
	
		var self = this,
		contextArray = [],
		i = 0;
	
		self.forEach(self.contextMap, function(contextId) {
		
			var contextDiv = $id(contextId);
		
			if (contextDiv.style.borderColor == PathGlobal.defaultColor) {
			
				contextArray[i++] = contextDiv;
				contextDiv.setAttribute("groups", true);
			
				contextDiv.oncontextmenu = function () {
					return false;
				}
			
			}
		
		});
		
		var global = com.xjwgraph.Global;
		
		var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
			var contextLength = contextArray.length,
			tempBaseTool = global.baseTool;
		
			for (var i = contextLength; i--;) {
		
				var contextDiv = contextArray[i];
			
				contextDiv.setAttribute("groups", false);
				contextDiv.oncontextmenu = function (event) {
			
					PathGlobal.rightMenu = true;
					tempBaseTool.showMenu(event, this.id);
			
					return false;
		
				}
			
			}
		
		}, PathGlobal.toMerge);
	
		undoRedoEvent.setRedo(function () {
		
			var contextLength = contextArray.length,
			tempBaseTool = global.baseTool;
		
			for (var i = contextLength; i--;) {
			
				var contextDiv = contextArray[i];
			
				contextDiv.setAttribute("groups", true);
				contextDiv.oncontextmenu = function (event) {
					return false;
				}
			
			}
		
		});
	
	},
	
	/**
	 * @description 循环指定Map集合
	 * @param maps 集合
	 * @param fn 函数
	 */
	forEach : function (maps, fn) {

		var mapKeys = maps.getKeys(),
  	mapKeysLength = mapKeys.length;

		for (var i = mapKeysLength; i--;) {
		
			if (fn) {
				fn(mapKeys[i]);
			}
			
		}

	},
	
	/**
	 * @description 删除所有区域
	 */
	removeAll : function () {
	
		var self = this,
		tempBaseTool = com.xjwgraph.Global.baseTool;
	
		self.forEach(self.contextMap, function(contextId) {
		
			var contextDiv = $id(contextId);
			
			tempBaseTool.contextMap.remove(contextId);
			tempBaseTool.pathBody.removeChild(contextDiv);

		});
	
	},
	
	/**
	 * @description 设置Context为非选中区域
	 */
	clearContext : function () {
	
		var self = this;
	
		self.tempContextId = null;
	
		var contextArray = [],
		contextMap = [],
		i = 0,
	
		tempBaseTool = com.xjwgraph.Global.baseTool;
	
		self.forEach(self.contextMap, function(contextId) {
		
			var contextDiv = $id(contextId),
			contextDivStyle = contextDiv.style;
		
			contextDivStyle.borderColor = PathGlobal.clearBoderColor;
			contextDivStyle.filter = "alpha(opacity=10)";
			contextDivStyle.opacity = "0.1";
		
			var groups = contextDiv.getAttribute("groups");

			if (groups == "false" || !groups) {
			
				contextArray[i] = contextDiv;
				contextMap[i++] = tempBaseTool.contextMap.get(contextId);
			
				tempBaseTool.contextMap.remove(contextId);
				tempBaseTool.pathBody.removeChild(contextDiv);
		
			}
		
		});
	
		if (contextArray.length > 0) {
		
			var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
		
				var contextLength = contextArray.length;
		
				for (var i = contextLength; i--;) {
			
					var contextDiv = contextArray[i];
			
					tempBaseTool.contextMap.put(contextDiv.id, contextMap[i]);
					tempBaseTool.pathBody.appendChild(contextDiv);
			
				}
				
			}, PathGlobal.clearContext);
	
			undoRedoEvent.setRedo(function () {
		
				var contextLength = contextArray.length;
		
				for (var i = contextLength; i--;) {
			
					var contextDiv = contextArray[i];
				
					if (contextDiv && contextDiv.id && $id(contextDiv.id)) {
					
						tempBaseTool.contextMap.remove(contextDiv.id);
						tempBaseTool.pathBody.removeChild(contextDiv);
				
					}
			
				}
		
			});
		
		}

	},
	
	/**
	 * @description 清除区域
	 */
	clear : function () {
	
		PathGlobal.rightMenu = false;
	
		var pathBodyRightMenu = $id("pathBodyRightMenu");
		pathBodyRightMenu.style.visibility = "hidden";
	
		var isPixel = $id("isPixel");
		isPixel.style.visibility = "hidden";
	
		var self = this,
		areaDivStyle = self.areaDiv.style,
	
		top = parseInt(areaDivStyle.top),
		left = parseInt(areaDivStyle.left),
		width = parseInt(areaDivStyle.width),
		height = parseInt(areaDivStyle.height);
	
		if (areaDivStyle.visibility != "visible") {
			return;
		}
	
		var contextDiv = document.createElement("div"),
		contextDivStyle = contextDiv.style;
	
		contextDivStyle.position = "absolute";
		contextDivStyle.fontSize = "0px";
		contextDivStyle.borderWidth = "1px";
		contextDivStyle.borderStyle = "solid";
		contextDivStyle.borderColor = PathGlobal.defaultColor;
		contextDivStyle.visibility = "visible";
		contextDivStyle.top = 0 + "px";
		contextDivStyle.left = 0 + "px";
		contextDivStyle.width = 0 + "px";
		contextDivStyle.height = 0 + "px";
		contextDivStyle.backgroundColor = PathGlobal.selectColor;
		contextDivStyle.filter = "alpha(opacity=20)";
		contextDivStyle.opacity = "0.2";
		
		var global = com.xjwgraph.Global,
		
		tempModeTool = global.modeTool,
		contextDivId = tempModeTool.getNextIndex();
		
		contextDivStyle.zIndex = contextDivId;

		contextDiv.setAttribute("id", "contextDiv" + contextDivId);
	
		var contextModeMap = new Map(),
	
		contextWidth = 0,
		contextHeight = 0,
	
		tempBaseTool = com.xjwgraph.Global.baseTool;
	
		tempModeTool.forEach(function (modeId) {
		
			var mode = $id(modeId),
			modeStyle = mode.style,
		
			imag = $id(modeId.replace("module", "backImg")),
			imagStyle = imag.style,
		
			modeTop = parseInt(modeStyle.top),
			modeLeft = parseInt(modeStyle.left),
		
			modeWidth = parseInt(imagStyle.width),
			modeHeight = parseInt(imagStyle.height),
		
			isAbleMode = true;
			
			tempBaseTool.forEach(tempBaseTool.contextMap, function (contextId) {
				
				var sonContextModeMap = global.baseTool.contextMap.get(contextId),
				sonContextDiv = $id(contextId),
				isGroups = sonContextDiv.getAttribute("groups");
				
				tempBaseTool.forEach(sonContextModeMap, function (modeId) {
					
					if (modeId == mode.id && (isGroups == "true" || isGroups)) {
						isAbleMode = false;
					}
					
				});
				
			});
		
			if (isAbleMode && modeTop > top && modeLeft > left 
					&& modeLeft + modeWidth < left + width 
					&& modeTop + modeHeight < top + height) {
			
				if (parseInt(contextDivStyle.top) > modeTop || parseInt(contextDivStyle.top) == 0) {
					contextDivStyle.top = modeTop + "px";
				}
			
				if (parseInt(contextDivStyle.left) > modeLeft || parseInt(contextDivStyle.left) == 0) {
					contextDivStyle.left = modeLeft + "px";
				}
			
				if (contextWidth < modeWidth + modeLeft) {
					contextWidth = modeWidth + modeLeft;
				}
			
				if (contextHeight < modeHeight + modeTop) {
					contextHeight = modeHeight + modeTop;
				}
			
				stopEvent = true;
				tempModeTool.showPointer(mode);
				contextModeMap.put(mode.id, mode);
			
			} else {
				global.modeTool.hiddPointer(mode);
			}
		
		});
	
		self.clearContext();

		if (contextModeMap.size() > 1) {
		
			self.pathBody.appendChild(contextDiv);		
			self.contextMap.put(contextDiv.id, contextModeMap);
		
			self.tempContextId = contextDiv.id;
		
			contextDivStyle.width = (contextWidth - parseInt(contextDivStyle.left)) + "px";
			contextDivStyle.height = (contextHeight - parseInt(contextDivStyle.top)) + "px";
		
			var tempBaseTool = global.baseTool;
		
			var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
			
				if (contextDiv && contextDiv.id && $id(contextDiv.id)) {
				
					tempBaseTool.pathBody.removeChild(contextDiv);		
					tempBaseTool.contextMap.remove(contextDiv.id);
			
				}
			
			}, PathGlobal.baseClear);
	
			undoRedoEvent.setRedo(function () {
				
				tempBaseTool.pathBody.appendChild(contextDiv);
				tempBaseTool.contextMap.put(contextDiv.id, contextModeMap);
			
			});
		
			self.contextDivDrag(contextDiv, contextModeMap);

		}
	
		areaDivStyle.top = 1 + "px";
		areaDivStyle.left = 1 + "px";
		areaDivStyle.width = 1 + "px";
		areaDivStyle.height = 1 + "px";
		areaDivStyle.visibility = "hidden";
	
	},
	
	/**
	 * @description 区域拖拽
	 * @param contextDiv 区域模型
	 * @param contextModeMap 区域模型影响的模型
	 */
	contextDivDrag : function (contextDiv, contextModeMap) {
	
		var contextDivStyle = contextDiv.style,
		tempBaseTool = com.xjwgraph.Global.baseTool;
	
		contextDiv.onclick = function () {
			
			contextDivStyle.borderColor = PathGlobal.defaultColor;
			contextDivStyle.filter = "alpha(opacity=30)";
			contextDivStyle.opacity = "0.3";
			
			tempBaseTool.forEach(tempBaseTool.contextMap, function (contextId) {
				
				if (contextId != contextDiv.id) {
				
					var sonContextDiv = $id(contextId);
					var sonContextDivStyle = sonContextDiv.style;
				
					sonContextDivStyle.borderColor = PathGlobal.clearBoderColor;
					sonContextDivStyle.filter = "alpha(opacity=10)";
					sonContextDivStyle.opacity = "0.1";
				
				}
				
			});
			
		}
		
		contextDiv.oncontextmenu = function (event) {
			
			PathGlobal.rightMenu = true;
			tempBaseTool.showMenu(event, this.id);
			
			return false;
		
		}
		
		contextDiv.ondragstart = function () {
			return false;
		};
	
		contextDiv.onmousedown = function(event) {
			
			event = event || window.event;
			
			tempBaseTool.contextMoveAbale = true;
			contextDivStyle.borderColor = PathGlobal.defaultColor;
			contextDivStyle.filter = "alpha(opacity=20)";
			contextDivStyle.opacity = "0.2";
			contextDivStyle.visibility = "visible";
			
			tempBaseTool.forEach(tempBaseTool.contextMap, function (contextId) {
				
				if (contextId != contextDiv.id) {
				
					var sonContextDiv = $id(contextId),
					sonContextDivStyle = sonContextDiv.style;
					
					sonContextDivStyle.borderColor = PathGlobal.clearBoderColor;
					sonContextDivStyle.filter = "alpha(opacity=10)";
					sonContextDivStyle.opacity = "0.1";
				
				}
				
			});
			
			var oldTop = parseInt(contextDivStyle.top),
			oldLeft = parseInt(contextDivStyle.left);
		
			if (contextDiv.setCapture) {
				contextDiv.setCapture();
			} else if (window.captureEvents) {
				window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
			}
		
			var x = event.layerX ? event.layerX : event.offsetX,
			y = event.layerY ? event.layerY : event.offsetY,
			
			oldTop = parseInt(contextDivStyle.top),
			oldLeft = parseInt(contextDivStyle.left),
			doc = document;
			
			doc.onmousemove = function (event) {
			
				tempBaseTool.contextMoveAttempt = true;
				
				event = event || window.event;
				
				if (!event.pageX) {
					event.pageX = event.clientX;
				} 
		
   			if (!event.pageY) {
   				event.pageY = event.clientY;
   			}
   		
   			var tx = event.pageX - x,
   			ty = event.pageY - y,
   			
   			global = com.xjwgraph.Global,
   			
   			tempPathBody = global.lineTool.pathBody,
   			leftTops = global.baseTool.sumLeftTop(tempPathBody);
   			
   			tx = tx - parseInt(leftTops[0]) + parseInt(tempPathBody.scrollLeft);
				ty = ty - parseInt(leftTops[1]) + parseInt(tempPathBody.scrollTop);
			
				contextDivStyle.left = tx + "px";
    		contextDivStyle.top = ty + "px";

			};
		
			doc.onmouseup = function (event) {
			
				event = event || window.event;
				
				if (!event.pageX) {
					event.pageX = event.clientX;
				} 
		
   			if (!event.pageY) {
   				event.pageY = event.clientY;
   			}
				
				var tx = event.pageX - x,
   			ty = event.pageY - y,
   			
   			global = com.xjwgraph.Global,
   			
   			tempPathBody = global.lineTool.pathBody,
   			leftTops = global.baseTool.sumLeftTop(tempPathBody);
   			
   			tx = tx - parseInt(leftTops[0]) + parseInt(tempPathBody.scrollLeft);
				ty = ty - parseInt(leftTops[1]) + parseInt(tempPathBody.scrollTop);
			
				if (contextDiv.releaseCapture) {
					contextDiv.releaseCapture();
				} else if (window.releaseEvents) {
					window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
				}
				
   			doc.onmousemove = null;
   			doc.onmouseup = null;
   			
   			if (tempBaseTool.contextMoveAttempt) {
   				
   				var contextModeMapKeys = contextModeMap.getKeys(),
  				contextModeMapKeyLength = contextModeMapKeys.length,
  				
  				global = com.xjwgraph.Global,
  				
  				tempModeTool = global.modeTool,
  				tempSmallTool = global.smallTool;
  				
  				function ModeTopLeft(valueTop, valueLeft) {
  					
  					var self = this;
  					
  					self.modeTop = valueTop;
  					self.modeLeft = valueLeft;
  					
  				}
  				
  				var oldModeTopLeftMap = new Map(),
					newModeTopLeftMap = new Map(); 
  			
					for (var i = contextModeMapKeyLength; i--;) {
		
						var mode = $id(contextModeMapKeys[i]),
						modeStyle = mode.style,
					
						newModeLeft = tx - oldLeft,
						newModeTop = ty - oldTop;
						
						oldModeTopLeftMap.put(mode.id, new ModeTopLeft(parseInt(modeStyle.top), parseInt(modeStyle.left)));
						
						modeStyle.left = parseInt(modeStyle.left) + newModeLeft + "px";
						modeStyle.top = parseInt(modeStyle.top) + newModeTop + "px";
						
						newModeTopLeftMap.put(mode.id, new ModeTopLeft(parseInt(modeStyle.top), parseInt(modeStyle.left)));
						
						tempModeTool.changeBaseModeAndLine(mode, true);
    				tempSmallTool.drawMode(mode);

					}
					
					var undoRedoEvent = new com.xjwgraph.UndoRedoEvent(function () {
						
						contextDivStyle.top = oldTop + "px";
						contextDivStyle.left = oldLeft + "px";
  					
  					for (var i = contextModeMapKeyLength; i--;) {
		
							var mode = $id(contextModeMapKeys[i]),
							modeStyle = mode.style,
							modeTopLeft = oldModeTopLeftMap.get(mode.id);
							
							modeStyle.left = modeTopLeft.modeLeft + "px";
							modeStyle.top = modeTopLeft.modeTop + "px";
							
							tempModeTool.showPointer(mode);
							tempModeTool.changeBaseModeAndLine(mode, true);
							
    					tempSmallTool.drawMode(mode);

						}
			
					}, PathGlobal.contextDivDrag);
					
					var afterTop = parseInt(contextDivStyle.top),
					afterLeft = parseInt(contextDivStyle.left);
					
					undoRedoEvent.setRedo(function () {

						contextDivStyle.top = afterTop + "px";
						contextDivStyle.left = afterLeft + "px";
						
						for (var i = contextModeMapKeyLength; i--;) {
		
							var mode = $id(contextModeMapKeys[i]),
							modeStyle = mode.style,
							modeTopLeft = newModeTopLeftMap.get(mode.id);
							
							modeStyle.left = modeTopLeft.modeLeft + "px";
							modeStyle.top = modeTopLeft.modeTop + "px";
							
							tempModeTool.showPointer(mode);
							tempModeTool.changeBaseModeAndLine(mode, true);
							
    					tempSmallTool.drawMode(mode);

						}
		
					});
				
				}
				
				tempBaseTool.contextMoveAttempt = false;
				tempBaseTool.contextMoveAbale = false;

			};
		
		}
	
	}, 
	
	/**
	 * @description 初始绘图区域
	 * @param pathBody 绘图区域
	 */
	initPathBody : function (pathBody) {
	
		var pathBody = $id(pathBody.id),
		self = this,
	
		areaDiv = self.areaDiv,
		areaDivStyle = areaDiv.style;
	
		areaDivStyle.position = "absolute";
		areaDivStyle.width = 1 + "px";
		areaDivStyle.height = 1 + "px";
		areaDivStyle.fontSize = "0px";
		areaDivStyle.borderWidth = "1px";
		areaDivStyle.borderStyle= "solid";
		areaDivStyle.visibility = "hidden";
		areaDivStyle.backgroundColor = PathGlobal.selectColor;
		areaDivStyle.filter = "alpha(opacity=30)";
		areaDivStyle.opacity = "0.3";

		pathBody.appendChild(areaDiv);
	
		pathBody.ondragstart = function () {
				return false;
		};
		
		var global = com.xjwgraph.Global;
		
		pathBody.onclick = function () {
			global.baseTool.clear();
		}
	
		pathBody.ondblclick = function () {
			global.baseTool.clear();
		}

		pathBody.onmousedown = function(event) {
		
			areaDivStyle.borderColor = global.baseTool.checkColor;
			event = event || window.event;
		
			if (!PathGlobal.rightMenu) {
				global.baseTool.clear();
			}
		
			var x = event.clientX ? event.clientX : event.offsetX,
			y = event.clientY ? event.clientY : event.offsetY,
			
			tempPathBody = global.lineTool.pathBody,
			leftTops = global.baseTool.sumLeftTop(tempPathBody);
		
			x = x - parseInt(leftTops[0]) + parseInt(tempPathBody.scrollLeft);
			y = y - parseInt(leftTops[1]) + parseInt(tempPathBody.scrollTop);

			areaDivStyle.left = x + "px";
			areaDivStyle.top = y + "px";
		
			if (global.modeTool.moveable == true || global.lineTool.moveable == true || global.baseTool.contextMoveAbale == true) {
			} else {
				areaDivStyle.visibility = "visible";
			}
		
			pathBody.onmousemove = function (event) {
			
				event = event || window.event;
			
   			var tx = event.clientX,
						ty = event.clientY,
   		
   			tempPathBody = global.lineTool.pathBody,
   			leftTops = global.baseTool.sumLeftTop(tempPathBody);
   		
   			tx = tx - parseInt(leftTops[0]) + parseInt(tempPathBody.scrollLeft);
				ty = ty - parseInt(leftTops[1]) + parseInt(tempPathBody.scrollTop);
			
				var newTx = tx - x,
						newTy = ty - y;

				if (areaDiv && areaDivStyle.visibility == "visible") {
				
					if (tx >= x) {
						areaDivStyle.width = newTx + "px";
					} 
				
					if (ty >= y) {
						areaDivStyle.height = newTy + "px";
					}
				
					if (ty < y) {
						areaDivStyle.top = ty + "px";
						areaDivStyle.height = Math.abs(newTy) + "px";
					}
				
					if (tx < x) {
						areaDivStyle.left = tx + "px";
						areaDivStyle.width = Math.abs(newTx) + "px";
					}
				
				}

			};
		
			pathBody.onmouseup = function (event) {

				if (areaDiv && areaDivStyle.visibility == "visible" && !PathGlobal.rightMenu) {
					global.baseTool.clear();
				}
			
			};
		
		}
	
	},
	
	/**
	 * @description 查找背景图片路径
	 * @param baseMode 模元
	 * @returns img.src 图片路径
	 */
	findBackImgSrc : function (baseMode) {
	
		for(var sonNode = baseMode.firstChild; sonNode != null; sonNode = sonNode.nextSibling) {
		
			if (sonNode.id && sonNode.id.indexOf("backGroundImg") >= 0) {
				return sonNode.src;
			}
					
		}
	
	},
	
	/**
	 * @description 菜单模型拖拽方法
	 * @param baseMode 基础模型
	 * @param isLine 是否是线元
   * @param brokenType 类型
	 */
	drag : function (baseMode, isLine, brokenType) {
	
		var baseMode = baseMode,
		isLine = isLine,
		imgSrc = this.findBackImgSrc(baseMode),
		
		global = com.xjwgraph.Global;
	
		baseMode.ondragstart = function () {
			return false;
		};
	
		baseMode.onmousedown = function(event) {
		
			event = event || window.event;
		
			var moveBaseModeImg = $id("moveBaseModeImg");
			moveBaseModeImg.src = imgSrc;
		
			var moveBaseMode = $id("moveBaseMode"),
			moveBaseModeStyle = moveBaseMode.style;
		
			moveBaseModeStyle.visibility = "visible";
		
			if (moveBaseMode.setCapture) {
				moveBaseMode.setCapture();
			} else if (window.captureEvents) {
				document.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
			}
		
			var x = event.clientX ? event.clientX : event.offsetX,
					y = event.clientY ? event.clientY : event.offsetY;
		
			moveBaseModeStyle.left = x + "px";
			moveBaseModeStyle.top = y + "px";
		
			var doc = document;
		
			doc.onmousemove = function (event) {
			
				event = event || window.event;
				
   			var tx = event.clientX,
   					ty = event.clientY;

				moveBaseModeStyle.left = tx + "px";
    		moveBaseModeStyle.top = ty + "px";
	
			};
		
			doc.onmouseup = function (event) {
			
				event = event || window.event;
			
				if (moveBaseMode.releaseCapture) {
					moveBaseMode.releaseCapture();
				} else if (window.releaseEvents) {
					document.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
				}

   			doc.onmousemove = null;
   			doc.onmouseup = null;
   		
   			moveBaseModeStyle.visibility = "hidden";

				if (!event.pageX) {
					event.pageX = event.clientX;
				} 
		
   			if (!event.pageY) {
   				event.pageY = event.clientY;
   			}
   	
   			var tx = event.pageX,
   					ty = event.pageY,
   		
   			tempPathBody = global.lineTool.pathBody,
   			leftTops = global.baseTool.sumLeftTop(tempPathBody);
   		
   			tx = tx - parseInt(leftTops[0]) + parseInt(tempPathBody.scrollLeft);
				ty = ty - parseInt(leftTops[1]) + parseInt(tempPathBody.scrollTop);
   		
   			var isCreate = tx >= 0 && ty >= 0;
   		
   			if (isCreate) {
   			
   				if (isLine) {
   					global.lineTool.create(tx, ty, brokenType);
   				} else {
   					global.modeTool.create(ty, tx, imgSrc);
   				}
   			
   			}

			};
		
		}
	
	},
	
	/**
	 * @description 设置终端节点
	 * @param width 宽
	 * @param height 高
	 */
	initEndDiv : function (width, height) {
	
		var self = this;

		self.endDiv = document.createElement("div");
		var endDiv = self.endDiv,
				endDivStyle = endDiv.style;
	
		endDivStyle.left = width + "px";
		endDivStyle.top = height + "px";
		endDivStyle.width = "10px";
		endDivStyle.height = "10px";
		endDivStyle.fontSize = "10px";
		endDivStyle.position = "absolute";
	
		self.pathBody.appendChild(endDiv);
	
		var topCross = $id("topCross"),
		leftCross = $id("leftCross");
	
		topCross.style.width = width + "px";
		leftCross.style.height = height + "px";
	
	}, 
	
	/**
	 * @description 是否是SVG
	 * @returns boolean 是否SVG
	 */
	isSVG : function () {
		return this.VGType() == "SVG";
	},
	
	/**
	 * @description 判断当前浏览器支持的类型
	 * @returns VGType 浏览器类型
	 */
	VGType : function () {
		return window.SVGAngle || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
	},
	
	/**
	 * @description 是否是VML
	 * @returns boolean 是否VML
	 */
	isVML : function () {
		return this.VGType() == "VML";
	}

}