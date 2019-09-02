var $ = jQuery.noConflict();
$(function() {
    
    /*修改头像*/
    $('.chooseImage').on('change',function(){
        var filePath = $(this).val(), //获取到input的value，里面是文件的路径
        fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
        src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式
        if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {// 检查是否是图片
    	    error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg');
            return;  
        }
        $('.showImg').attr('src',src);//显示图片
    });

    /*修改资料*/
    $(".right_content_info .modify").click(function(){
        $(".modify_info").show();
        $(".right_content_info").hide();     
    });


    /*修改资料返回*/
    $(".modify_close").click(function(){
        $(".tip_box").show().delay(2000).hide(100);
        $(".wall").show().delay(2000).hide(100);
        $(".modify_info").hide();
        $(".right_content_info").show();
    });

    /*取消收藏*/
    $(".collection_cancel").click(function(){
        $(".collection_box").show().delay(2000).hide(100);
        $(".wall").show().delay(2000).hide(100);
    });

    /*个人中心左边菜单栏不动*/
    //获取要定位元素距离浏览器顶部的距离
    var leftH = $(".left").offset().top;
    
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=leftH){
            $(".left").css({"position":"fixed","top":0,"left":"10%","width":"20%","margin-top":0});
        }else if(scroH<leftH){
            $(".left").css({"position":"absolute","top":105,"left":0,"width":"25%"});
        }
    })

    /*出生日期*/
    //执行一个laydate实例
    laydate.render({
        elem: '#birthday' //指定元素
    });
    /*出生日期*/

}); 



/*删除弹窗*/
function articleDelete(){
    //获取弹窗得div
    //var delete_window = document.getElementById('delete_window');
    var delete_window = document.getElementsByClassName('delete_window')[0];
    // 获取 <span> 元素，用于关闭弹窗 （X）
    var close = document.getElementsByClassName("delete_close")[0];
    //获取弹窗中得确定按钮
    var ok=document.getElementsByClassName("delete_ok")[0];
    //获取弹窗中得取消按钮
    var no=document.getElementsByClassName("delete_no")[0];
    //获取透明背景
    var wall = document.getElementsByClassName('wall')[0];
    //窗体弹出
    delete_window.style.display = "block";
    wall.style.display = "block";
    //点击窗体ok
    ok.onclick=function(){
        //执行弹出窗体得确定后得操作
        delete_window.style.display = "none";
        $(".delete_box").show().delay(2000).hide(100);
        //关闭窗口
        $(".wall").show().delay(2000).hide(100);
    }
    //点击窗体取消按钮
    no.onclick=function(){
        //直接关闭窗口
        delete_window.style.display = "none";

        wall.style.display = "none";
    }
    // 点击 <span> (x), 关闭弹窗
    close.onclick = function() {
        //直接关闭窗口
        delete_window.style.display = "none";
        wall.style.display = "none";
    }
}
