/**
 * Created by wangtingdong on 16/4/10.
 */

var btn=document.getElementById('btn'),
    tip=document.getElementById('tip'),
    ipt=document.getElementById('ipt');

//绑定事件函数
function on(element,eventName,listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + eventName, listener);
    }
    else {
        element['on' + eventName] = listener;
    }
}

on(btn,'click',function() {
    var text = ipt.value,
        tip_text='',
        className='';
    if (text == '') {
        tip_text = '姓名不能为空';
        className = 'error';
    }
    else {
        var total = (/\w/.test(text) ? text.match(/\w/g).length : 0) + (/[\u4e00-\u9fa5]/.test(text) ? text.match(/[\u4e00-\u9fa5]/g).length * 2 : 0);
        if (total < 4) {
            tip_text = '姓名长度不能小于4个字符';
            className = 'error';
        }
        else if (total > 16) {
            tip_text= '姓名长度不能大于16个字符';
            className = 'error';
        }
        else {
            tip_text = '名称格式正确';
            className = 'true';
        }
    }

    tip.innerText=tip_text;
    ipt.className=className;
    tip.className=className;
});