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
    if (pwd.value === content.attributes[1].value) {
        keyPanel.style.display = 'none';
        content.style.display = 'block';
    } else {
        wrongTip.style.display = 'inline';
    }
    EventUtil.preventDefault(e);
});