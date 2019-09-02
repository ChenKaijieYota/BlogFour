//获取样式
function getStyle(obj,name){
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj,false)[name];
    }
}

//运动框架
function startMove(obj, json, fnEnd){     
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var styleStop = false;//假设：所有的值都已经结束

        for (var sty in json) {
            var cur = 0;
            if (sty == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, sty))*100);//透明度满一百
            } else {
                cur = parseInt(getStyle(obj, sty));
            }

            var speed = (json[sty] - cur)/6;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur != json[sty])//没有到达目标值
                styleStop = false;

            if (sty == 'opacity') {
                obj.style.filter = 'alpha(opacity='+(cur+speed)+')';
                obj.style.opacity = (cur+speed)/100;
            } else {
                obj.style[sty] = cur + speed + 'px';
            }
        }
        if (cur == json[sty] ) {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
    },30);
}