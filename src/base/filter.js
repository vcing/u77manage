app.filter(  
    'to_trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(html_decode(text));  
        }  
    }]
);

app.filter(  
    'trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(text);  
        }  
    }]
);

app.filter('fromNow',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).fromNow();
	}
}]);

app.filter('timeFromNow',[function(){
  return function(time){
    return moment(time).fromNow();
  }
}])

app.filter('time',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format("YY年MM月DD日 H:mm");
	}
}])

app.filter('cTime',[function(){
  return function(str){
    return moment(str).format("YY年MM月DD日 H:mm"); 
  }
}])

app.filter('dateTime',[function(){
  return function(unix){
    return moment.unix(parseInt(unix)).format("YYYY/MM/DD H:mm:ss");
  }
}])

app.filter('toUnix',[function(){
  return function(time){
    return moment(time).unix();
  }
}])

app.filter('dt',[function(){
  return function(unix){
    return moment.unix(parseInt(unix)).format("YY/MM/DD H:mm:ss");
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

app.filter('userLink',[function(){
  return function(userId) {
    return Path + 'user/' + userId;
  }
}]);

// app.filter('nickname',[function(){
//   return function(clientId) {
//     clientId = decodeURIComponent(clientId);
//     return clientId.split('__')[1].split('__')[0];
//   }
// }]);

// app.filter('userId',[function(){
//   return function(clientId){
//     clientId = decodeURIComponent(clientId);
//     return clientId.split('__')[0];
//   }
// }]);

// app.filter('avatar',[function(){
//   return function(clientId){
//     clientId = decodeURIComponent(clientId);
//     return clientId.split('__')[2];
//   }
// }])

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