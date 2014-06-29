

var myAjax = {
	//xhr XMLHttpRequest for IE7+,firefox,chrome,opera &&  ActiveXObject for IE5,6
	xhr : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
	get : function(url, callback){
		this.xhr.open('get', url);
		this.onreadystatechange(callback, this.xhr);
		this.send(null);
	},
	post : function(url, data, callback){
		this.xhr.open('post',url);
		this.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		this.onreadystatechange(callback, this.xhr);
		this.xhr.send(data);
	},
	onreadystatechange : function(func, _xhr){
		_xhr.onreadystatechange = function(){
			if (_xhr.readyState == 4) {
				if (_xhr.status == 200 || _xhr.status >= 300) {
					func(_xhr.responseText);
				}
			}
		}
	}
}