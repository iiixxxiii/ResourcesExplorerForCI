/**
 * @fileOverview XML工具文件
 * @description 基础Bean2Xml工具
 * @author xiaojw
 * @version 0.1
 */

var ContextXML = /**
                  * @constructor 
                  * @description 区域XML
                	* @author xiaojw 
                	* @version 0.1 
                	*/ com.xjwgraph.ContextXML = function () {}

ContextXML.prototype = /** @scope com.xjwgraph.ContextXML */ {
	
	/**
	 * @description 设置属性
	 * @param name 名称.
	 * @param value 值.
	 */
	setAttribute : function (name, value) {
		this[name] = value;
	},
	
	/**
	 * @description 视图方法
	 */
	view : function () {
	
		var self = this,
		
		contextDiv = document.createElement("div");
		
		for (var item in self) {
			
			if (item == "view" || 
					item == "setAttribute" || 
					item == "style" || 
					item == "modeIds") {
				continue;	
			}
			
			contextDiv.setAttribute(item, self[item]);
		
		}
		
		var global = com.xjwgraph.Global,
		tempModeTool = global.modeTool,
		tempBaseTool = global.baseTool,
		
		contextMap = tempBaseTool.contextMap,
		contextModeMap = new Map(),
		
		modeIds = self.modeIds.split(","),
		modeIdsLength = modeIds.length;
		
		for (var i = modeIdsLength; i--;) {
			var modeId = modeIds[i];
			contextModeMap.put(modeId, $id(modeId));
		}
		
		contextMap.put(self.id, contextModeMap);
		contextDiv.style.cssText = self.style;
		
		var tempBaseTool = global.baseTool;
		
		tempBaseTool.pathBody.appendChild(contextDiv);
		tempBaseTool.contextDivDrag(contextDiv, contextModeMap);
		
	}
	
}

var LineXML = com.xjwgraph.LineXML = 
							 /**
								* @class
								* @name com.xjwgraph.LineXML
								* @description 线XML
                * @author xiaojw 
                * @version 0.1 
                */ function () {}

LineXML.prototype = /** @scope com.xjwgraph.LineXML */ {
	
	/**
	 * @description 设置属性
	 * @param name 名称.
	 * @param value 值.
	 */
	setAttribute : function (name, value) {
		this[name] = value;
	},
	
	/**
	 * @description 视图查看
	 */
	view : function () {
	
		var self = this,
		global = com.xjwgraph.Global,		
		tempLineTool = global.lineTool,
		
		line = tempLineTool.createBaseLine(self.id, self.d || self.path, self.brokenType),
		
		lineMode = new BuildLine();
		lineMode.id = line.id;
		
		line.style.cssText = self.style;
		line.setAttribute("strokeweight", self.strokeweight);
		line.setAttribute("strokecolor", self.strokecolor);
		line.setAttribute("brokenType", self.brokenType);
		
		var tempModeTool = global.modeTool,
				tempBeanXml = global.beanXml;
		
		if (self.xBaseMode) {
			
			var xDelay = function () {
				
				var xMode = global.modeMap.get(self.xBaseMode);
			
				lineMode.xBaseMode = xMode;
				lineMode.xIndex = self.xIndex;
				
				var modeLine = new BuildLine();
				modeLine.id = self.id;
				modeLine.type = true;
				modeLine.index = self.xIndex;
			
				xMode.lineMap.put(self.id + "-true", modeLine);
			
			}
			
			if (global.modeMap.get(self.xBaseMode)) {
				xDelay();
			} else {
				tempBeanXml.delay[tempBeanXml.delayIndex++] = xDelay;
			}
			
		}
		
		if (self.wBaseMode) {
			
			var yDelay = function () {
			
				var yMode = global.modeMap.get(self.wBaseMode);
			
				lineMode.wBaseMode = yMode;
				lineMode.wIndex = self.wIndex;
				
				var modeLine = new BuildLine();
				modeLine.id = self.id;
				modeLine.type = false;
				modeLine.index = self.wIndex;
				
				yMode.lineMap.put(self.id + "-false", modeLine);
			
			}
			
			if (global.modeMap.get(self.wBaseMode)) {
				yDelay();
			} else {
				tempBeanXml.delay[tempBeanXml.delayIndex++] = yDelay;
			}
			
		}
		
		global.smallTool.drawLine(line);
		global.lineMap.put(lineMode.id, lineMode);
		
		tempLineTool.baseLineIdIndex = parseInt(self.id.substring(4)) + 1;
		
	}

}

var ModeXML = com.xjwgraph.ModeXML = 
							 /**
								* @class
								* @name com.xjwgraph.ModeXML
								* @description 模型XML
                * @author xiaojw 
                * @version 0.1 
                */ function () {
	
	var self = this,
	tempModeTool = com.xjwgraph.Global.modeTool;
	
	self.modeDiv = tempModeTool.createBaseMode(0, 0, "", 0, "50px", "50px");
	self.backImg = tempModeTool.getSonNode(self.modeDiv, "backImg");
	self.title = tempModeTool.getSonNode(self.modeDiv, "title");
	
}

ModeXML.prototype = /** @scope com.xjwgraph.ModeXML */ {
	
	/**
	 * @description 设置属性
	 * @param name 名称.
	 * @param value 值.
	 */
	setAttribute : function (name, value) {
	
		var self = this;
		
		if (name == "backImgSrc") {
			self.backImg.src = value;
		} else if (name == "top") {
			self.modeDiv.style.top = value + "px";
		} else if (name == "left") {
			self.modeDiv.style.left = value + "px";
		} else if (name == "width") {
			self.modeDiv.style.widht = value + "px";
			self.backImg.style.width = value + "px";
		} else if (name == "height") {
			self.modeDiv.style.height = value + "px";
			self.backImg.style.height = value + "px";
		} else if (name == "id") {
			com.xjwgraph.Global.modeTool.setIndex(self.modeDiv, value);
		} else if (name == "title") {
			self.title.innerHTML = value;
		} else if (name == "zIndex") {
			self.modeDiv.style.zIndex = value;
		} else {
			self.modeDiv.setAttribute(name, value);
		}
		
	},
	
	/**
	 * @description 视图
	 */
	view : function () {
	
		var mode = new BaseMode(),
		moduleDiv = this.modeDiv,
		
		global = com.xjwgraph.Global,
		
		tempModeTool = global.modeTool;
		tempModeTool.pathBody.appendChild(moduleDiv);
		
		var modeIndex = tempModeTool.getModeIndex(moduleDiv);
		
		mode.id = moduleDiv.id;
		global.modeMap.put(mode.id, mode);
		
		tempModeTool.initEvent(modeIndex);
		tempModeTool.showPointerId(modeIndex);
		
		global.smallTool.drawMode(moduleDiv);
		
		tempModeTool.baseModeIdIndex = parseInt(modeIndex) + 1;
		
	}

}

var BeanXML = com.xjwgraph.BeanXML = 
							 /**
								* @class
								* @name com.xjwgraph.BeanXML
								* @description BeanXML
                * @author xiaojw 
                * @version 0.1 
                * @property delay 延迟渲染队列.
                * @property delayIndex 延迟渲染Id.
                * @property doc xml.
                * @property root xmlRoot.
                */ function () {
	
	var self = this;
	
	self.delay = [];
	self.delayIndex = 0;
	self.doc = null;
	self.create();
	self.root = self.initBeanXML();
	
}

BeanXML.prototype = /** @scope com.xjwgraph.BeanXML */ {
	
	/**
	 * @description 创建docXml
	 */
	create : function () {
	
		var self = this;
		self.doc = null;
		
		if (document.all) {
			
			var xmlVersions = ["Msxml2.DOMDocument.6.0",
												 "Msxml2.DOMDocument.5.0", 
												 "Msxml2.DOMDocument.4.0", 
												 "Msxml2.DOMDocument.3.0", 
												 "MSXML2.DOMDocument", 
												 "MSXML.DOMDocument", 
												 "Microsoft.XMLDOM"];
												 
			var xmlVersionLength = xmlVersions.length;
			
			for (var i = xmlVersionLength; i--;) {
				
				try {
					self.doc = new ActiveXObject(xmlVersions[i]);
					break;
				} catch (err) {
					continue;
				}
				
			}
		
		} else {
			self.doc =  document.implementation.createDocument('', '', null);
		}
		
	},
	
	/**
	 * @description 初始docXml
	 */
	initBeanXML : function () {
 	
	 	var self = this,
	 	
		headFile = self.doc.createProcessingInstruction("xml", "version='1.0' encoding='utf8'");
		self.doc.appendChild(headFile);
	  		
		var root = self.doc.createElement("modes");
		self.doc.appendChild(root);
		
		return root;
	 	
	},
	
	/**
	 * @description 得到节点属性
	 * @param iNode 节点
	 * @returns nodeStr 节点信息
	 */
	getNodeAttribute : function (iNode) {
	
		var nodeText = [],
		k = 0,
				
		attributes = iNode.attributes,
		attributesLength = attributes.length;
				
		for (var i = attributesLength; i--;) {
					
			var attribute = attributes[i];
			
			nodeText[k++] = " ";		
			nodeText[k++] = attribute.nodeName;
			nodeText[k++] = "=\"";
			nodeText[k++] = attribute.nodeValue;
			nodeText[k++] = "\"";
	
		}
		
		return nodeText.join("");
			
	},
	
	/**
	 * @description 得到节点文本类型信息
	 * @param iNode 节点
	 * @param isTitle 是否是标题
	 * @returns nodeStr 节点信息
	 */
	getText : function (iNode, isTitle) {
	
		var nodeText = [],
		k = 0,
		
		self = this;
		
		if (isTitle) {
			
			nodeText[k++] = "<";
			nodeText[k++] = iNode.nodeName;
		
		}
	
		var childNodes = iNode.childNodes,
		childNodesLength = childNodes.length;
		
		for (var i = childNodesLength; i--;) {
			
			var node = childNodes[i];
			
			nodeText[k++] = "<";
			nodeText[k++] = node.nodeName;
			
			if (node.nodeType == 1) {
				nodeText[k++] = self.getNodeAttribute(node);
			}
			
			nodeText[k++] = ">";
			
			if (node.hasChildNodes()) {
				nodeText[k++] = self.getText(node, false);
			} 
			
			nodeText[k++] = "</";
			nodeText[k++] = node.nodeName;
			nodeText[k++] = ">";
			
	  }
	  
	  if (isTitle) {
	  	
	  	nodeText[k++] = "</";
			nodeText[k++] = iNode.nodeName;
			nodeText[k++] = ">";
	  
		}
		
		return nodeText.join("");
		
	},

	/**
	 * @description 创建节点
	 * @param type 节点类型
	 * @param fNode 父节点
	 * @returns node 节点
	 */
	createNode : function (type, fNode) {
 	
	 	var self = this,
	 	
		node = self.doc.createElement(type);
	    
		if (fNode) {
			fNode.appendChild(node);
		} else {
			self.root.appendChild(node);
		}
	    
		return node;
	
	},
	
	/**
	 * @description 移除所有节点
	 */
	clearNode : function () {
	
		var self = this;
		
		if (self.root) {
			
			var childNodes = self.root.childNodes,
			childNodesLength = childNodes.length;
		
			for (var i = childNodesLength; i--;) {
			
				self.root.removeChild(childNodes[i]);	
			
			}
			
		}	
		
	},
	
	/**
	 * @description 转换为xml文本
	 */
	toXML : function () {
	
		var self = this;
		self.clearNode();
		
		var global = com.xjwgraph.Global,
		
		tempBaseTool = global.baseTool,
		contextMap = tempBaseTool.contextMap;
		
		tempBaseTool.forEach(contextMap, function (contextId) {
			
			var node = self.createNode("context"),
			context = $id(contextId),
			
			attributes = context.attributes,
			attributeLength = attributes.length;
			
			for (var i = attributeLength;i--;) {
				
				var attribute = attributes[i];
							
				if (attribute.nodeValue) {
					node.setAttribute(attribute.name, attribute.nodeValue);
				}
				
			}
			
			node.setAttribute("style", context.style.cssText);
			
			var contextModeMap = contextMap.get(contextId),
			contextModeMapKeys = contextModeMap.getKeys(),
			contextModeMapKeyLength = contextModeMapKeys.length,
			modeIds = [],
			index = 0;
			
			for (var i = contextModeMapKeyLength; i--;) {
				modeIds[index++] = contextModeMapKeys[i];
			}
			
			node.setAttribute("modeIds", modeIds.join(","));
			
		});
		
		tempBaseTool.forEach(global.modeMap, function (modeId) {
			
			var mode = $id(modeId),
			modeStyle = mode.style,
			attributes = mode.attributes,
			attributeLength = attributes.length,
			
			node = self.createNode("mode");
			
			for (var i = attributeLength;i--;) {
				
				var attribute = attributes[i];
				
				if (attribute.name == 'style' || 
							attribute.name == 'id') {
					continue;
				}
					
				if (attribute.nodeValue) {
					node.setAttribute(attribute.name, attribute.nodeValue);
				}
				
			}
			
			var modeIndex = global.modeTool.getModeIndex(mode);
			node.setAttribute("id", modeIndex);
			
			var title = $id("title" + modeIndex).innerHTML;
			node.setAttribute("title", title);
			
			var backImg = $id("backImg" + modeIndex),
			backImgSrc = backImg.src;
			
			node.setAttribute("backImgSrc", backImgSrc);
			node.setAttribute("top", parseInt(modeStyle.top));
			node.setAttribute("left", parseInt(modeStyle.left));
			node.setAttribute("zIndex", parseInt(modeStyle.zIndex));
			node.setAttribute("width", parseInt(backImg.offsetWidth));
			node.setAttribute("height", parseInt(backImg.offsetHeight));
			
		});
		
		tempBaseTool.forEach(global.lineMap, function (lineId) {
			
			var line = $id(lineId),
			
			node = self.createNode("line"),
			attributes = line.attributes,
			attributeLength = attributes.length,
			lineStyle = line.style;
			
			var strokeweight = line.getAttribute("strokeweight"),
					strokecolor = line.getAttribute("strokecolor");
			
			node.setAttribute("strokeweight", strokeweight || lineStyle.strokeWidth);
			node.setAttribute("strokecolor", strokecolor || lineStyle.stroke);
			
			for (var i = attributeLength;i--;) {
				
				var attribute = attributes[i];
				
				if (attribute.name == 'style' ||
						attribute.name == 'marker-end') {
					continue;
				}
				
				if (attribute.nodeValue) {
					node.setAttribute(attribute.name, attribute.nodeValue);
				}
				
			}
			
			var cssText = lineStyle.strokeWidth ? '' : ';fill: none; stroke: ' + strokecolor + '; stroke-width: ' + (strokeweight + 0.45);
			
			node.setAttribute("style", lineStyle.cssText + cssText);
			node.setAttribute("marker-end", "url(#arrow)");
			
			var buildLine = global.lineMap.get(line.id);
			
			for (var item in buildLine) {
				
				if (typeof(buildLine[item]) == "string" || 
							typeof(buildLine[item]) == "number") {
					node.setAttribute(item, buildLine[item]);
				} else if (typeof(buildLine[item]) == "object") {
					node.setAttribute(item, buildLine[item] && buildLine[item].id ? buildLine[item].id : '');
				} else {
					node.setAttribute(item, buildLine[item] + " is unSupport");
				}
				
			}
			
		});
		
		var textXml = self.getTextXml(self.doc);
		
		self.viewTextXml(textXml);
		
	},
	
	/**
	 * @description 加载xml,何里化函数.
	 */
	loadXmlText : function () {
		
		if (document.all && window.ActiveXObject) {
			
			var self = this;
	
			return function(xml) {
					
				var xmlVersions = ["Msxml2.DOMDocument.6.0",
												 	 "Msxml2.DOMDocument.5.0", 
												 	 "Msxml2.DOMDocument.4.0", 
												 	 "Msxml2.DOMDocument.3.0", 
												   "MSXML2.DOMDocument", 
												   "MSXML.DOMDocument", 
												   "Microsoft.XMLDOM"];
												 
				var xmlVersionLength = xmlVersions.length;
				var result = null;
				
				for (var i = xmlVersionLength; i--;) {
				
					try {
						result = new ActiveXObject(xmlVersions[i]);
						break;
					} catch (err) {
						continue;
					}
				
				}
				
				result.async = 'false';
				result.loadXML(xml);
				
				return result;
		
			};
	
		} else { 
		
			return function(xml) { 				
				return new DOMParser().parseFromString(xml, 'text/xml');
			};
			
		}
		
	}(),
	
	/**
	 * @description 展现textXml
	 * @param textXml 文本Xml
	 */
	viewTextXml : function (textXml) {
			
		textXml = textXml.replaceAll("<", "&lt").replaceAll(">", "&gt");

		var viewHTML = window.open('saveXml.html', '', ''),
		i = 0,
		viewHTMLBuffer = [];
		
		viewHTMLBuffer[i++] = '<html>';
		viewHTMLBuffer[i++] = '<head>';
		viewHTMLBuffer[i++] = '<link href="css/flowPath.css" type="text/css" rel="stylesheet" />';
		viewHTMLBuffer[i++] = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
		viewHTMLBuffer[i++] = '<title></title>';
		viewHTMLBuffer[i++] = '</head>';
		viewHTMLBuffer[i++] = '<body>';
		
		viewHTMLBuffer[i++] = textXml;
		
		viewHTMLBuffer[i++] = '</body></html>';
		
		viewHTML.document.write(viewHTMLBuffer.join(""));
	
		viewHTML.document.close();

	},
	
	/**
	 * @description 得到TextXML
	 * @param node 节点
	 * @returns xml doc
	 */
	getTextXml : function (node) {
	
		var xml = '';
	
		if (node) {
		
			xml = node.xml;
		
			if (!xml) { 
			
				if (node.innerHTML) {
					xml = node.innerHTML;
				} else {
				
					var xmlSerializer = new XMLSerializer();
					xml = xmlSerializer.serializeToString(node);
			
				}
		
			} else {
				xml = xml.replace(/\r\n\t[\t]*/g, '').replace(/>\r\n/g, '>').replace(/\r\n/g, '\n');
			}
	
		}
	
		xml = xml.replace(/\n/g, '');
	
		return xml;

	},
	
	/**
	 * @description 清除所有节点信息
	 */
	clearHTML : function () {
		
		var global = com.xjwgraph.Global;
		
		global.undoRedoEventFactory.clear();
		global.lineTool.removeAll();
		global.modeTool.removeAll()
		global.baseTool.removeAll();
		
	},
	
	/**
	 * @description 输出为xml
	 */
	toHTML : function () {
	
		var self = this;
		
		self.clearHTML();
		
		if (!self.doc) {
			return;
		}
		
		var docChildNodes = self.doc.childNodes,
		docChildNodesLength = docChildNodes.length;
		
		for (var i = docChildNodesLength; i--;) {
			
			if (docChildNodes[i].nodeName == 'modes') {
				self.root = self.doc.childNodes[i];
				break;
			}
			
		}
		
		if (self.root) {
			
			var childNodes = self.root.childNodes,
			childNodesLength = childNodes.length;
		
			for (var i = childNodesLength; i--;) {
			
				var node = childNodes[i],
				nodeName = node.nodeName,
				
				attributes = node.attributes,
				attributesLength = attributes.length,
				
				xml;
				
				if (nodeName == "mode") {
					xml = new ModeXML();
				} else if (nodeName == "line") {
					xml = new LineXML();
				}	else if (nodeName == "context") {
					xml = new ContextXML();
				}
				
				for (var j = attributesLength; j--;) {
					
					var attribute = attributes[j];
					xml.setAttribute(attribute.name, attribute.value);
					
				}
				
				xml.view();
			
			}
			
			var delays = self.delay,
			delayLength = delays.length;
			
			for (var i = delayLength; i--;) {
				delays[i]();
			}
			
			delete self.delay;
			
			self.delay = [];
			self.delayIndex = 0;
			
		}	
		
	}

}