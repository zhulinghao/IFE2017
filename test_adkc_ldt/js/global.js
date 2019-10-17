//重置页面字体
function viewRest(){
    var oHTML = document.getElementsByTagName("html")[0];
    var docWidth = document.documentElement.clientWidth;
    if(docWidth<=750)
    {
        oHTML.style.fontSize = docWidth/18 + "px";
    }else if( docWidth >750)
    {
        //oHTML.style.fontSize = 750/18
        oHTML.style.fontSize = 250/6 + "px";
    }
}
window.onload = function() {
	// loading
	// s8 陀螺仪
	var imgPosition = {
        start: [4,8],
        end: [14, 18]
    };
    // 陀螺仪
	var box = document.querySelectorAll('.box');
	if (window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(event) {
		    let {alpha, beta, gamma} = event;
		    if (gamma*1.5 < 30 && gamma*1.5 > -30) {
		    	box[0].style.webkitTransform = 'rotateY(' + gamma*1.5 + 'deg)';
	            box[0].style.transform = 'rotateY(' + gamma*1.5 + '*1.5deg)';
	            box[0].style.mozTransform = 'rotateY(' + gamma*1.5 + 'deg)';
            }
        }, false);
	} else {
		alert('浏览器不支持DeviceOrientationEvent')
	}
	//重置页面字体
	viewRest()
	
}