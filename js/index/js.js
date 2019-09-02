//点击回复的时候
$(function(){
	$(document).on('click','.reply_click',function(){
	/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
		//获取当前元素的父元素的父元素。
		var user = this.parentNode.parentNode;
		if(user.className=="user_comment"){
			var reply_input = user.children[4];		
		}else{
			var reply_input = user.children[5];	
		}
		var re_style = window.getComputedStyle(reply_input,null).display;
		if(re_style == 'none'){
			reply_input.style.cssText = 'display:block;';
		}else{
			reply_input.style.cssText = 'display:none;';
		}
	})
	$(document).on('click','.delete_click',function(){
		/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
			//获取当前元素的父元素的父元素。
			this.parentNode.parentNode.remove();
		})
})
//点击发送的时候，自动创建div
$(function(){
	$(document).on('click','.comment_list .comment_con .btn',function(){
	/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
		//获取到父div第一个子元素的avalue值
		var parent = this.parentNode.parentNode.className;
		if(parent == "user_comment"){
			var user_reply = this.parentNode.parentNode.parentNode.children[1];
		}else{
			var user_reply = this.parentNode.parentNode.parentNode.parentNode.children[1];	
		}
		var myDate = new Date();
		var text = this.parentNode.children[0].value;
		var user_name = "当前用户";
		var reply_user = this.parentNode.parentNode.children[1].innerHTML;
		if(reply_user=="当前用户" || reply_user=="当前用户："){
			alert("自己不能评论自己");
			this.parentNode.style.display = "none";
			this.parentNode.children[0].value = "";
			return false;
		}else if(text==""){
			alert("评论内容不能为空！");
			this.parentNode.style.display = "none";
			return false;
		}
		var reply = document.createElement("div");
			reply.className = "reply";
		var img = document.createElement("img");
			img.src = "./images/index/default_avatar.png";
		var user_name = document.createElement("span");
			user_name.className = "user_name"; 
			user_name.innerHTML = "当前用户";
		var reply_name = document.createElement("span");
			reply_name.className = "reply_name"; 
			reply_name.innerHTML = "@"+reply_user+"：";
		var pText = document.createElement("p");
			pText.innerHTML = text;
		var re_time = document.createElement("div");
			re_time.className = "re_time";
		var time = document.createElement("span");
			time.className = "time"; 
			time.innerHTML = myDate.toLocaleString();
		var reply_click = document.createElement("a");
			reply_click.className = "reply_click";
			reply_click.innerHTML = "回复";	
		var delete_click = document.createElement("a");
			delete_click.className = "delete_click";
			delete_click.innerHTML = "删除";		
		var reply_input = document.createElement("div");
			reply_input.className = "reply_input";
		var textarea = document.createElement("textarea");
		var btn = document.createElement('input');
			btn.type = "button";
			btn.className = "btn";
			btn.value = "发送";
			re_time.appendChild(time);
			re_time.appendChild(reply_click);
			re_time.appendChild(delete_click);
			reply_input.appendChild(textarea);
			reply_input.appendChild(btn);
			reply.appendChild(img)
			reply.appendChild(user_name)
			reply.appendChild(reply_name)
			reply.appendChild(pText)
			reply.appendChild(re_time)
			reply.appendChild(reply_input)
			user_reply.appendChild(reply)
			this.parentNode.style.display = "none";
			this.parentNode.children[0].value = "";
	})
	$(document).on('click','.comment .comment_btn',function(){
		/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
			//获取到父div第一个子元素的avalue值
			var myDate = new Date();
			var text = this.parentNode.children[1].value;
			if(text == ""){
				alert("评论内容不能为空！")
			}
			var ul = this.parentNode.parentNode.children[3].children[0];
			var li = document.createElement("li");
			var user_comment = document.createElement("div");
				user_comment.className = "user_comment";
			var img = document.createElement("img");
				img.src = "./images/index/default_avatar.png";
			var name = document.createElement("span");
				name.className = "name";
				name.innerHTML = "当前用户：";
			var pText = document.createElement("p");
				pText.innerHTML = text;
			var re_time = document.createElement("div");
				re_time.className = "re_time";
			var time = document.createElement("span");
				time.className = "time";
				time.innerHTML = myDate.toLocaleString();
			var reply_click = document.createElement("a");
				reply_click.className = "reply_click";
				reply_click.innerHTML = "回复";
			var delete_click = document.createElement("a");
				delete_click.className = "delete_click";
				delete_click.innerHTML = "删除";		
			var reply_input = document.createElement("div");
				reply_input.className = "reply_input";
			var textarea = document.createElement("textarea");
			var btn = document.createElement("input");
			var user_reply = document.createElement("div");
				user_reply.className = "user_reply";
				btn.type = "button";
				btn.value = "发送";
				btn.className = "btn";
				reply_input.appendChild(textarea);
				reply_input.appendChild(btn);
				re_time.appendChild(time);
				re_time.appendChild(reply_click);
				re_time.appendChild(delete_click);
				user_comment.appendChild(img);
				user_comment.appendChild(name);
				user_comment.appendChild(pText);
				user_comment.appendChild(re_time);
				user_comment.appendChild(reply_input);
				li.appendChild(user_comment);
				li.appendChild(user_reply);
				ul.appendChild(li);
				this.parentNode.children[1].value = "";	
		})
})

$(function(){
	// 重置密码顶部重置效果
	$('.next').click(function(){
		$('.block').css('background',"#F8F4E9");
		$('.block p').css('color',"#000");
		$('.arrow').css('border-left-color',"#F8F4E9");
		$('.re_block').css('background',"#051827");
		$('.re_block p').css('color',"#fff");
		$(".ipt_box").hide();
		$(".ret_pwd").show();
	});

	//轮播
	$("#play_main").FtCarousel();

	//切换编程学习的内容
	//获取点击事件的对象 
	$(".programming_label li").click(function(){ 
		//获取要显示或隐藏的对象 
		var divShow = $(".programming_content").children('.programming_content_list'); 
		//判断当前对象是否被选中，如果没选中的话进入if循环 
		if (!$(this).hasClass('selected')) { 
			//获取当前对象的索引 
			var index = $(this).index(); 
			//当前对象添加选中样式并且其同胞移除选中样式； 
			$(this).addClass('selected').siblings('li').removeClass('selected'); 
			//索引对应的div块显示 
			$(divShow[index]).show(); 
			//索引对应的div块的同胞隐藏 
			$(divShow[index]).siblings('.programming_content_list').hide(); 
		} 
	});
	
	//编程学习的运动
	$("#programming_content_info_1").kxbdMarquee();
	$("#programming_content_info_2").kxbdMarquee();
	$("#programming_content_info_3").kxbdMarquee();
	$("#programming_content_info_4").kxbdMarquee();
	$("#programming_content_info_5").kxbdMarquee();
	$("#programming_content_info_6").kxbdMarquee();
 
	//头部的头像鼠标移入出现下拉框	
	var oPerson_box = document.getElementsByClassName('person_box')[0];
	var aPerson_head = oPerson_box.getElementsByTagName('img')[0];
	var aPerson_info = oPerson_box.getElementsByTagName('div')[0];
	var timer = null;
	aPerson_info.onmouseover = aPerson_head.onmouseover = function(){
		clearTimeout(timer);
		aPerson_info.style['display'] = 'block';
	}
	aPerson_info.onmouseout = aPerson_head.onmouseout = function(){
		timer = setTimeout(function(){
			aPerson_info.style['display'] = 'none';
		},200)
	}

	//编辑器
	var E = window.wangEditor;
        var editor = new E('#editor')
		editor.customConfig.codeType={
			title:"选择代码类型:",
			type:[
				"c++","php","c#","java"
			]
		};

		editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
		editor.create();
		
	
       
    //下拉列表:博客分类
    $(".blogging_select p").click(function(){ 
        var ul = $(".blogging_select ul"); 
        if(ul.css("display")=="none"){ 
            ul.slideDown("fast"); 
        }else{ 
            ul.slideUp("fast"); 
        } 
    });
    $(".blogging_select ul li").click(function(){ 
        var txt = $(this).text(); 
        $(".blogging_select p").html(txt); 
        $(".blogging_select ul").hide(); 
	});
	
	//验证标题、编辑内容、分类不为空	
	var aBtn = document.getElementById('btn');
	aBtn.onclick = function(){
		var aTitle = document.getElementById("blogging_title").value;
		var aClass = document.getElementById("blogging_class").innerHTML;
		if(aTitle == ""){
			alert("标题不能为空！");
		}else if(aClass == ""){
			alert("请选择博客的类型！");
		}else if(editor.txt.text() == ""){
			alert("请编写你的博客文章！");
		}else{
			alert("博客文章发布成功！");
		}
	}
})


