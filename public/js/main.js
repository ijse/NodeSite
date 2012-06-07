/**
 * Main js file
 */

$(function($) {


	// Replay post textarea submit
	$(".my-replyForm .my-submit").bind("click", function(event) {
		var input = $(".my-replyForm textarea[name=commentContent]");
		var d = input.val();
		$.ajax({
			url: App.BASE_URL + "dinner/comment",
			type: "post",
			data: {
				comment: {
					content: d
				}
			},
			dataType: "json",
			success: function(data) {
				debugger;
				$(".my-commentList").append(
						$("<div>").addClass("my-commentItem")
								  .html(data.content)
				);
				input.val("");
			}
		})
	})

});