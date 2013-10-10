$(".works_info").css("display", "none");
$(".works_display").after('<div id="replybox" style="margin:10px;"></div>');
var target = $("#replybox");
target.append('<p style="color:#FF0000">※pixivReplyの利用により生じたいかなる損失・損害においても、鈴無蒸(pixivID:278010)は一切の責任を負わないものとします。</p>');
$($(".comment-item").get().reverse()).each(function(i) {
	target.append('<div class="pr_box" style="margin:10px;">' + $(this).text() +'<br /><textarea id="pr_txt' + i + '" style="width:600px;" maxlength="140">' + $("a",this).text() + 'さん&gt;</textarea><input id="pr_btn' + i + '" type="button" value="返信" /><font id="pr_status' + i + '" style="color:#808080">未送信</font></div>');
	$("textarea", this).maxlength();
	$(document).on('click', '#pr_btn' + i, function(){
			$.ajax({
				type: 'post',
				url: 'http://www.pixiv.net/member_illust.php',
				data: {
					mode:'comment_save',
					tt:$("#tt").val(),
					illust_id:$("#illust_id").val(),
					comment:$("#pr_txt" + i).val(),
					submit:'%E9%80%81%E3%80%80%E4%BF%A1' // UTF-8で「送信」の意
				},
				dataType: 'html',
		　		cache: false,
				crossDomain: true,
				success: function(data, textStatus){
					$('#pr_status' + i).text("送信成功(多分)");
					$('#pr_status' + i).css("color","#008000");
					$('#pr_txt' + i).attr("disabled","disabled");
					$('#pr_txt' + i).css("background-color","#A9A9A9");
				},
				error: function(data, textStatus){
		　　		$('#pr_status' + i).text("送信失敗");
					$('#pr_status' + i).css("color","#FF0000");
		　		}
			});
	});
});
