$(document).ready(function(){
	$("#twoswitch img").click(function(){
		document.cookie="accessibility=twoswitch";
		var x=document.cookie;
		alert(x);
	});

	$("#keyboard img").click(function(){
		document.cookie="accessibility=keyboard";
		var x=document.cookie;
		alert(x);
	});
});
