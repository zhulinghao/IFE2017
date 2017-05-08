var newSnow = $('<div>❤</div>');
newSnow.css({'position':'absolute','color':'red'});
$(function(){
	var oKiss = $('<div>❤</div>');
	oKiss.clone().appendTo($('body')).attr("id",'kiss');
//	var oKiss = document.getElementById('kiss');
	$('html').mouseover(function(){
		$('#kiss').css('display','block');
		document.body.onmousemove=function(){
		var intX=window.event.clientX;
		var intY=window.event.clientY;
		console.log(intX);
		oKiss.style.top=intY-oKiss.offsetHeight/2+'px';
		oKiss.style.left=intX-oKiss.offsetWidth/2+'px';
		}
	});	
	setInterval(function(){
		var docHeight=$(document).height();
		var docWith=$(document).width();
		console.log(docHeight);
		var snowSize=10+30*Math.random();
		var startLeft=docWith*Math.random();
		var durationTime = 4000 + 6000 * Math.random();
		var startTop='-40px';
		var endLeft=0.5*docWith+docWith*0.1*Math.random();
		var startOpacity = 0.7 + 0.3*Math.random();
		var endOpacity = 0.4 + 0.3*Math.random();
		newSnow.clone().appendTo($('body')).css({
			"left":startLeft,
			"top":startTop,
			"font-size":snowSize,
			"opacity": startOpacity,
		}).animate({
			"left": endLeft,
			"top": docHeight-55,
			"opacity": endOpacity,
		},durationTime,function (){
			$(this).remove();
		})
	},200)
});