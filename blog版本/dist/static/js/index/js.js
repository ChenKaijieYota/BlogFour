//点击回复的时候
// $(function(){
// 	$(document).on('click','.reply_click',function(){
// 	/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
// 		//获取当前元素的父元素的父元素。
// 		var user = this.parentNode.parentNode;
// 		if(user.className=="user_comment"){
// 			var reply_input = user.children[4];
// 		}else{
// 			var reply_input = user.children[5];
// 		}
// 		var re_style = window.getComputedStyle(reply_input,null).display;
// 		if(re_style == 'none'){
// 			reply_input.style.cssText = 'display:block;';
// 		}else{
// 			reply_input.style.cssText = 'display:none;';
// 		}
// 	})
// 	$(document).on('click','.delete_click',function(){
// 		/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
// 			//获取当前元素的父元素的父元素。
// 			this.parentNode.parentNode.remove();
// 		})
// })





//点击发送的时候，自动创建div
// $(function(){
// 	$(document).on('click','.comment_list .comment_con .btn',function(){
// 	/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
// 		//获取到父div第一个子元素的avalue值
// 		var parent = this.parentNode.parentNode.className;
// 		if(parent == "user_comment"){
// 			var user_reply = this.parentNode.parentNode.parentNode.children[1];
// 		}else{
// 			var user_reply = this.parentNode.parentNode.parentNode.parentNode.children[1];
// 		}
// 		var myDate = new Date();
// 		var text = this.parentNode.children[0].value;
// 		var user_name = "当前用户";
// 		var reply_user = this.parentNode.parentNode.children[1].innerHTML;
// 		if(reply_user=="当前用户" || reply_user=="当前用户："){
// 			alert("自己不能评论自己");
// 			this.parentNode.style.display = "none";
// 			this.parentNode.children[0].value = "";
// 			return false;
// 		}else if(text==""){
// 			alert("评论内容不能为空！");
// 			this.parentNode.style.display = "none";
// 			return false;
// 		}
// 		var reply = document.createElement("div");
// 			reply.className = "reply";
// 		var img = document.createElement("img");
// 			img.src = "./images/index/default_avatar.png";
// 		var user_name = document.createElement("span");
// 			user_name.className = "user_name";
// 			user_name.innerHTML = "当前用户";
// 		var reply_name = document.createElement("span");
// 			reply_name.className = "reply_name";
// 			reply_name.innerHTML = "@"+reply_user+"：";
// 		var pText = document.createElement("p");
// 			pText.innerHTML = text;
// 		var re_time = document.createElement("div");
// 			re_time.className = "re_time";
// 		var time = document.createElement("span");
// 			time.className = "time";
// 			time.innerHTML = myDate.toLocaleString();
// 		var reply_click = document.createElement("a");
// 			reply_click.className = "reply_click";
// 			reply_click.innerHTML = "回复";
// 		var delete_click = document.createElement("a");
// 			delete_click.className = "delete_click";
// 			delete_click.innerHTML = "删除";
// 		var reply_input = document.createElement("div");
// 			reply_input.className = "reply_input";
// 		var textarea = document.createElement("textarea");
// 		var btn = document.createElement('input');
// 			btn.type = "button";
// 			btn.className = "btn";
// 			btn.value = "发送";
// 			re_time.appendChild(time);
// 			re_time.appendChild(reply_click);
// 			re_time.appendChild(delete_click);
// 			reply_input.appendChild(textarea);
// 			reply_input.appendChild(btn);
// 			reply.appendChild(img)
// 			reply.appendChild(user_name)
// 			reply.appendChild(reply_name)
// 			reply.appendChild(pText)
// 			reply.appendChild(re_time)
// 			reply.appendChild(reply_input)
// 			user_reply.appendChild(reply)
// 			this.parentNode.style.display = "none";
// 			this.parentNode.children[0].value = "";
// 	})
// 	$(document).on('click','.comment .comment_btn',function(){
// 		/*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
// 			//获取到父div第一个子元素的avalue值
// 			var myDate = new Date();
// 			var text = this.parentNode.children[1].value;
// 			if(text == ""){
// 				alert("评论内容不能为空！")
// 			}
// 			var ul = this.parentNode.parentNode.children[3].children[0];
// 			var li = document.createElement("li");
// 			var user_comment = document.createElement("div");
// 				user_comment.className = "user_comment";
// 			var img = document.createElement("img");
// 				img.src = "./images/index/default_avatar.png";
// 			var name = document.createElement("span");
// 				name.className = "name";
// 				name.innerHTML = "当前用户：";
// 			var pText = document.createElement("p");
// 				pText.innerHTML = text;
// 			var re_time = document.createElement("div");
// 				re_time.className = "re_time";
// 			var time = document.createElement("span");
// 				time.className = "time";
// 				time.innerHTML = myDate.toLocaleString();
// 			var reply_click = document.createElement("a");
// 				reply_click.className = "reply_click";
// 				reply_click.innerHTML = "回复";
// 			var delete_click = document.createElement("a");
// 				delete_click.className = "delete_click";
// 				delete_click.innerHTML = "删除";
// 			var reply_input = document.createElement("div");
// 				reply_input.className = "reply_input";
// 			var textarea = document.createElement("textarea");
// 			var btn = document.createElement("input");
// 			var user_reply = document.createElement("div");
// 				user_reply.className = "user_reply";
// 				btn.type = "button";
// 				btn.value = "发送";
// 				btn.className = "btn";
// 				reply_input.appendChild(textarea);
// 				reply_input.appendChild(btn);
// 				re_time.appendChild(time);
// 				re_time.appendChild(reply_click);
// 				re_time.appendChild(delete_click);
// 				user_comment.appendChild(img);
// 				user_comment.appendChild(name);
// 				user_comment.appendChild(pText);
// 				user_comment.appendChild(re_time);
// 				user_comment.appendChild(reply_input);
// 				li.appendChild(user_comment);
// 				li.appendChild(user_reply);
// 				ul.appendChild(li);
// 				this.parentNode.children[1].value = "";
// 		})
// })



// $(function(){
	//编辑器
	// var E = window.wangEditor;
  // var editor = new E('#editor');
  // editor.customConfig.codeType={
	// 		title:"选择代码类型:",
	// 		type:[
	// 			"c++","php","c#","java"
	// 		]
  // };
  // editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
  // editor.create();
  //
// });
//详情页的js代码
// function collect(obj) {
//   var src = $(obj).children("img").attr("src");
//   var num = parseInt($(obj).children("span").text());
//   if(src == "../../statics/images/index/nocollect.png"){
//     num = num+1;
//     var path = "../../statics/images/index/becollect.png";
//     $(obj).children("img").attr("src",path);
//     $(obj).children("span").text(num) ;
//   }else{
//     num = num-1;
//     var path = "../../statics/images/index/nocollect.png";
//     $(obj).children("img").attr("src",path);
//     $(obj).children("span").text(num);
//   }
// }
// function like(obj) {
//   var src = $(obj).children("img").attr("src");
//   var num = parseInt($(obj).children("span").text());
//   if(src == "../../statics/images/index/nolike.png"){
//     num = num+1;
//     var path = "../../statics/images/index/like.png";
//     $(obj).children("img").attr("src",path);
//     $(obj).children("span").text(num) ;
//   }else{
//     num = num-1;
//     var path = "../../statics/images/index/nolike.png";
//     $(obj).children("img").attr("src",path);
//     $(obj).children("span").text(num);
//   }
// }


