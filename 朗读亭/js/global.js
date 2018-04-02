/**
 * Created by shixiaozhen on 17/11/8.
 */

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
//代替a标签
function goUrl(){
    $('[data-url]').on('click',function(){
        var self = $(this);
        if(self.attr('data-url') != ''){
            window.location.href = self.data('url');
        }
    });
}


//tab切换，idx是希望初始化时current的下标
function tabChange(tab, pan, evt, idx) {
    $(pan).find('.jPanel').hide();
    if (idx && !isNaN(idx)) {
        $(tab).find('.jTabs:eq(' + idx + ')').addClass('current').show();
        $(pan).find('.jPanel:eq(' + idx + ')').show();
    } else {
        $(tab).find('.jTabs:first').addClass('current').show();
        $(pan).find('.jPanel:first').show();
    }
    $(tab).find('.jTabs').unbind(evt).bind(evt,
        function () {
            $(this).addClass('current').siblings('.jTabs').removeClass('current');
            var index = $(tab).find('.jTabs').index(this);
            $(pan).children().eq(index).show().siblings().hide();
            return false
        })
}
//加入读物
function addFn(){
    $('.icon-cloud-grey').on('click',function(){
        $(this).siblings('.icon-cloud-greyTemp').addClass('on')
        $(this).removeClass('icon-cloud-grey').addClass('icon-cloud-red');

        var num = parseInt($('.footBar .num').text())+1;
        setTimeout(function(){
            $('.footBar .num').text(num);
        },600)
    })
}

//模态窗口，参数value为调用标签的className,dio为弹出层的className
function showDiolog(value,dio){
    var wH = $(window).height();
    var dl = $(dio);
    var close = $('.closeDiolog');
    var msk = $('.dioMask');
    var dH = dl.height();
    var Mtop = -dH/2;

    if(value){
        var cla = $(value);
    }
    cla.click(function(){
        dl.fadeIn(300);
        msk.fadeIn(300);
        dl.css('marginTop', Mtop + 'px');
    })

    close.click(function(){
        dl.fadeOut(300);
        msk.fadeOut(300);
    })
}
// 发送弹幕
function sendBarrage() {
    let sB = $('#sendBarrage');
    let bI = $('#barrageInput');
    let bU = $('#barrageUl');
    let userName = 'default';
    sB.click(() => {
        let tmp = document.createElement('li');
        tmp.innerHTML = `<span class="user-name">${userName}: </span>${bI.val()}`;
        bU.append(tmp);
        bI.val('')
    }) 
}
//  textarea 字数检测
function textareaNumber() {
    let tA = $('#applyWTE')
    tA.keyup(() => {
        let curLength = tA.val().trim().length;
        if(curLength > 200) {
            console.log('')
            let val = tA.val().trim().substr(0,200);
            $(tA).val(val);
        }
        $("#wordNumber").text(curLength);
    })
}
$(document).ready(function(){

    viewRest();
    window.onresize = viewRest;
    goUrl();

    addFn();
    sendBarrage();
    textareaNumber();
});