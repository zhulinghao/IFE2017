window.onload=function ()
{
	var oDiv=document.getElementById('movePic');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var speed=-2;
	
	//oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	
	function move(){
		if(oUl.offsetLeft<-oUl.offsetWidth/2)
		{
			oUl.style.left='0';
		}
		if(oUl.offsetLeft>0)
		{
			oUl.style.left=-oUl.offsetWidth/2+'px';
		}
		oUl.style.left=oUl.offsetLeft+speed+'px';
	}
	var timer=setInterval(move, 30);
	
	oDiv.onmouseover=function ()
	{
		clearInterval(timer);
	};
	
	oDiv.onmouseout=function ()
	{
		timer=setInterval(move, 30);
	};
	
	document.getElementsByTagName('a')[0].onclick=function ()
	{
		speed=-2;
	};
	document.getElementsByTagName('a')[1].onclick=function ()
	{
		speed=2;
	};
	$('#close_1').click(function(){
		$(this).css('display','none');
		$('#open_1').fadeIn();
		$('#panel_1').fadeOut();
	});
	$('#open_1').click(function(){
		$(this).css('display','none');
		$('#close_1').fadeIn();
		$('#panel_1').fadeIn();
	});
	
	$('#close_2').click(function(){
		$(this).css('display','none');
		$('#open_2').fadeIn();
		$('#panel_2').fadeOut();
	});
	$('#open_2').click(function(){
		$(this).css('display','none');
		$('#close_2').fadeIn();
		$('#panel_2').fadeIn();
	});
	
	$('#close_3').click(function(){
		$(this).css('display','none');
		$('#open_3').fadeIn();
		$('#panel_3').fadeOut();
	});
	$('#open_3').click(function(){
		$(this).css('display','none');
		$('#close_3').fadeIn();
		$('#panel_3').fadeIn();
	});
	
	$('#txt').click(function(){
		var r=confirm('你承认小昊昊是你的小爸爸吗？');
		if (r) {
			alertMsg('他会很开心哦！！');
			alertMsg('在QQ上对你的小爸爸说：小爸爸，我爱你！');
			alertMsg('诚实可爱的孩子啊，');
		} else{
			alertMsg('不诚实的孩子',);
			alertMsg('记住！！！！',);
			alertMsg('小昊昊就是你的小爸爸！');
			alertMsg('收起你的自尊吧！');	
		}
		
	});
};