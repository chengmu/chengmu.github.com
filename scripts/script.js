(function () {


var ieV = (function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
})();


//ie 下弹窗
if (ieV && ieV === 8) {
    var ieTips = document.createElement('div');

    ieTips.style.position = 'fixed';
    ieTips.style.top = '0';
    ieTips.style.color = 'red';
    ieTips.style.background = 'yellow';
    ieTips.style.width = '100%';
    ieTips.style.textAlign = 'center';


    ieTips.innerHTML = ['装个好点的浏览器吧。。比如<a style="font-size:14px;color:red;" href="http://www.google.cn/intl/zh-CN/chrome/">Chrome</a> 。。。因为窝还没有很仔细的做兼容而你刚好用的是IE浏览器或者山寨浏览器的兼容模式，所以这里看起来应该挺惨的。。。IE什么的最讨厌了。。<a style="font-size:14px;color:red;font-weight:bold;text-decoration:underline;" href="http://www.google.cn/intl/zh-CN/chrome/">Chrome</a>浏览器多好啊_(:з」∠)_'];

    document.getElementsByTagName('body')[0].appendChild(ieTips);

}


//加密
EventUtil = {
    addHandler: function( element, type, handler ) {
        if ( element.addEventListener ) {
            element.addEventListener ( type, handler, false );
        } else if ( element.attachEvent ) {
            element.attachEvent ( "on" + type, handler );
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function( element, type, handler ) {
        if ( element.removeEventListener ) {
            element.removeEventListener ( type, handler, false );
        } else if ( element.detachEvent ) {
            element.detachEvent ( "on" + type, handler );
        } else {
            element["on" + type] = null;
        }
    },
    preventDefault: function ( event ) {
        if ( event.preventDefault ) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

};



var content = document.getElementById('content');
var keyPanel = document.getElementById('keyPanel');
var wrongTip = document.getElementById('wrongTip');
var pwd = document.getElementById('pwd');
var btn = document.getElementById('btn');

EventUtil.addHandler(btn, 'click', function (e) {
    if (pwd.value === content.attributes['key'].value) {
        keyPanel.style.display = 'none';
        content.style.display = 'block';
    } else {
        wrongTip.style.display = 'inline';
    }
    EventUtil.preventDefault(e);
});


})();