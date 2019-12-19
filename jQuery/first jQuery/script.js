$(document).ready(function(){
	$(".vk_link").css("color","orange");
	$("[href]").prepend("↗");
	$("[href]").attr("target","_blank");
    $("[href^='http://']").each(function() {
		$(this).attr("href", $(this).attr("href").replace("http://", "https://"));
	});
    $("button#revert").click(function(){
		$("[href]").each(function() {
			$(this).contents().eq(0).remove();
		});
		$("[href]").removeAttr("target");
	});

    $("#b1").click(function(){
    $("#str1").fadeIn("slow");
    });
    $("#b2").click(function(){
    $("#str2").fadeOut("slow");
    });
    $("#b3").click(function(){
    $("#str3").fadeTo("slow",0.4);
    });
    $("#b4").click(function(){
    $("#str4").slideUp("slow");
    });
    $("#b5").click(function(){
    $("#str5").slideToggle("slow");
    });

	let refreshButton = document.createElement("button");
	refreshButton.setAttribute("id", "ajaxLoad");
	refreshButton.innerHTML="Refresh";
	document.getElementsByTagName('body')[0].appendChild(refreshButton);
	$("button#ajaxLoad").click(function(){
		$("p.loadTo").load("https://inxaoc.github.io/example/ajax-1.html");
    });

    let sendButton = document.createElement("button");
	sendButton.setAttribute("id", "ajaxSend");
	sendButton.innerHTML="Send";
	document.getElementsByTagName('body')[0].appendChild(sendButton);

	$("button#ajaxSend").click(function(){
		let temp = document.createElement("div");
		temp.setAttribute("id", "temp");
		document.getElementsByTagName('body')[0].appendChild(temp);
		$(temp).load("https://inxaoc.github.io/example/ajax.json",
			"authorization", onComplete);
    });
});

$(document).ready(function(){
	$("form *").prop("disabled", true);
});

function onComplete(){
	var json = $(temp).html();
	$(temp).html("");
	var text = "";
	for (var i = 0; i < json.length; i++) {
		if (json[i] == '{' || json[i] == '[') {
			text += "<ul><li>";
		} else if (json[i] == '}' || json[i] == ']') {
			text += "</li></ul>";
		} else if (json[i] == ',') {
			text += "</li><li>";
		} else if (json[i] == '"') {
			if (json[i-1] == '{') {
				text += "<li>";
			} else if (json[i+1] == '}') {
				text += "</li>";
			}
		} else text +=json[i];
	}
	$(temp).append(text)
}
