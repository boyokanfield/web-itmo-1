$(document).ready(function(){
	$(".vk_link").css("color","orange");
	$("[href]").prepend("↗");
	$("[href]").attr("target","_blank");

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

	let butt = document.createElement("button");
	butt.setAttribute("id", "ajax");
	butt.innerHTML="Refresh";
	document.getElementsByTagName('body')[0].appendChild(butt);
	$("button#ajax").click(function(){
		$("p.number").load("https://inxaoc.github.io/example/ajax-1.html");
    });

    let butt2 = document.createElement("button");
	butt2.setAttribute("id", "ajax2");
	butt2.innerHTML="Send";
	document.getElementsByTagName('body')[0].appendChild(butt2);

	$("button#ajax2").click(function(){
		let temp = document.createElement("div");
		temp.setAttribute("id", "temp");
		document.getElementsByTagName('body')[0].appendChild(temp);
		$(temp).load("https://inxaoc.github.io/example/ajax.json",
			"authorization", onComplete);
    });
});

function onComplete(){
	var json = $(temp).html();
	$(temp).html("");
	var text = "";
	for (var i = 0; i < json.length; i++) {
		if (json[i] == '{' || json[i] == '[') {
			text += "<ul><li>";
		} else if (json[i] == '}' || json[i] == ']') {
			text += "</ul></ul>";
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