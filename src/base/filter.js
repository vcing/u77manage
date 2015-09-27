app.filter(  
    'to_trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(html_decode(text));  
        }  
    }]
)

app.filter('fromNow',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).fromNow();
	}
}]);

app.filter('time',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format("YY年MM月DD日 H:mm");
	}
}])

app.filter('onlyDate',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format("YY-MM-DD");
	}
}])

app.filter('onlyTime',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format('H:mm');
	}
}])

function html_encode(str)  
{  
  vars ="";  
  if(str.length == 0)return"";  
  s = str.replace(/&/g,"&amp;");  //1
  s = s.replace(/</g,"&lt;");  
  s = s.replace(/>/g,"&gt;");  
  s = s.replace(/ /g,"&nbsp;");  
  s = s.replace(/\'/g,"&#39;");  
  s = s.replace(/\"/g, "&quot;");  
  s = s.replace(/\n/g, "<br>");  
  return s;  
}  
 
function html_decode(str)  
{  
  var s = "";  
  if (str.length == 0) return "";  
  s = str.replace(/&amp;/g, "&");   //2 
  s = s.replace(/&lt;/g, "<");  
  s = s.replace(/&gt;/g, ">");  
  s = s.replace(/&nbsp;/g, "");  
  s = s.replace(/&#39;/g, "\'");  
  s = s.replace(/&quot;/g, "\"");  
  s = s.replace(/<br>/g,"\n");  
  return s;  
} 