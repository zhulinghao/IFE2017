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
	// s8 陀螺仪
	var imgPosition = {
        start: [4,8],
        end: [14, 18]
    };
    var imgCenterPosition = {
        x: 15,
        y: (imgPosition.end[1] - imgPosition.start[1]) / 2 + imgPosition.start[1]
    };
    var img = document.querySelector('#imgLdt');
	// loading
	var loadingBlock = document.querySelector('.loading-overlay')
	loadingBlock.style.display = 'none'
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
	        //左右旋转
	        if(Math.abs(gamma)< 15){
	            img.style.left = imgCenterPosition.x + gamma / 90 * 40 + 'rem';
	            img.style.transform = 'perspective(200px)' + 'rotateY(' + Math.abs(gamma)/2 +'deg)';
	        } else{
	            img.style.transform = 'perspective(200px)' + 'rotateY(' + 15/2 +'deg)';
	        }
	        //上下旋转
	        if(Math.abs(beta) < 15){
	            img.style.top = imgCenterPosition.y + beta / 180 * 30 + 'rem';
	            img.style.transform = 'perspective(200px)'+' rotateX(' + Math.abs(beta)/2 + 'deg)';
	        }else{
	            img.style.transform = 'perspective(200px)'+' rotateX(' + 15/2 + 'deg)';
            }
        }, false);
	} else {
		console.log('浏览器不支持DeviceOrientationEvent')
	}
	//重置页面字体
	viewRest()
	// 初始化swiper
	var sw2 = new Swiper ('.sw2', {
		// 如果需要分页器
		pagination: {
		  el: '.sw2-pagination',
		}
	})
	var mySwiper = new Swiper ('.swiper-container', {
		// 如果需要分页器
		pagination: {
		  el: '.swiper-pagination',
		},
	})
	
}