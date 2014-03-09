$(".works_info").css("display", "none");
$(".works_display").after('<div id="replybox" style="margin:10px;"></div>');
var target = $("#replybox");
target.append('<p style="color:#FF0000">※pixivReplyの利用により生じたいかなる損失・損害においても、鈴無蒸(pixivID:278010)は一切の責任を負わないものとします。</p>');
$($("div.comment").get().reverse()).each(function(i) {
	// header用であるdivタグはスキップ
	if($(this).attr("class") == "comment header") {
		return true;
	}
	// 自分のコメントはスキップ
	if($(".user-name",this).attr("href") == ("member.php?id=" + pixiv.user.id)) {
		return true;
	}
	target.append('<div class="pr_box" style="margin:10px;">' + $(".body",this).text() + '<font style="color:#0099ff;">（' + $(".user-name",this).text() + '　' + $(".date",this).text() + '）</font><br /><textarea id="pr_txt' + i + '" style="width:600px;" maxlength="140">＞' + $(".user-name",this).text() + 'さん：</textarea><input id="pr_btn' + i + '" type="button" value="返信" /><font id="pr_status' + i + '" style="color:#808080">未送信</font></div>');
	$("textarea", this).maxlength();
	$(document).on('click', '#pr_btn' + i, function(){
			$('#pr_btn' + i).val("送信中");
			$('#pr_btn' + i).attr("disabled", true);
			$.ajax({
				type: 'post',
				url: 'http://www.pixiv.net/rpc/post_comment.php',
				data: {
					type:'comment',
					illust_id:getUrlVars()["illust_id"],
					author_user_id:pixiv.context.userId,
					comment:$("#pr_txt" + i).val(),
					tt:$("#tt").val()
				},
				dataType: 'json',
				cache: false,
				crossDomain: true,
				success: function(data, textStatus){
					$('#pr_status' + i).text("送信成功(多分)");
					$('#pr_status' + i).css("color","#008000");
					$('#pr_txt' + i).attr("disabled", true);
					$('#pr_txt' + i).css("background-color","#A9A9A9");
					$('#pr_btn' + i).hide('normal');
				},
				error: function(data, textStatus){
					$('#pr_status' + i).text("送信失敗");
					$('#pr_status' + i).css("color","#FF0000");
					$('#pr_btn' + i).attr("disabled",false);
				}
			});
	});
});
// URL上のクエリを取得
function getUrlVars()
{
    var vars = [], hash; 
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); 
    for(var i = 0; i < hashes.length; i++) { 
        hash = hashes[i].split('='); 
        vars.push(hash[0]); 
        vars[hash[0]] = hash[1]; 
    } 
    return vars;
} 
