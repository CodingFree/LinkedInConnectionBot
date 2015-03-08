$(function() {

	check("#execute", localStorage.execute);
	changeIcon(localStorage.execute == "true");
	$("#execute").click(function() {
		localStorage.execute = $(this).is(':checked');
		changeIcon($(this).is(':checked') == true);
	});
	
	check("#img_chb", localStorage.img_chb);
	$("#img_chb").click(function() {
		localStorage.img_chb = $(this).is(':checked');
	});

	check("#link_chb", localStorage.link_chb);
	$("#link_chb").click(function() {
		localStorage.link_chb = $(this).is(':checked');
	});

	$("#host_url").val(localStorage.host_url);
	$("#host_url").change(function() {
		console.log($("#host_url").val());
		localStorage.host_url = $("#host_url").val();
	});

	$("#username").val(localStorage.username);
	$("#username").change(function() {
		console.log($("#username").val());
		localStorage.username = $("#username").val();
	});

	$("#password").val(localStorage.password);
	$("#password").change(function() {
		console.log($("#password").val());
		localStorage.password = $("#password").val();
	});

});

function changeIcon(bval) {
	if(bval == true) {
		chrome.browserAction.setIcon({path:"/img/icons/img_19.png"});
	} else {
		chrome.browserAction.setIcon({path:"/img/icons/imgg_19.png"});
	}
}

function check(chb, isChecked) {
	if(isChecked == "true") {
		$(chb).attr("checked", true);
	} else {
		$(chb).removeAttr("checked");
	}
}