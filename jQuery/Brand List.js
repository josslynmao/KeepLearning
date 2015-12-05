$(document).ready(function(){
	var $category = $("ul li:gt(5):not(:last)");
	$category.hide();
	var $showall = $("div.showmore > a");
	$showall.click(function(){
		$category.show(500);
		$(this).find("span").text("收起");
		$("ul li").filter(":contains('B'),:contains('H'),:contains('N')").addClass("promoted");
	});
});