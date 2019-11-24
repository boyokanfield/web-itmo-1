var bodyLoaded = function()
{
    var p = function(string){
        document.body.innerHTML += ("<p>" + string + "</p>");
    }
    var str = "Тут есть буквы и возможно даже слова";
    p(str);

    var words = 0;
    for (var i = 0; i < str.length; i++)
        if (str[i] == ' ')
            words++;
    p("Слов: " + (words + 1));

    var letters = 0;
    for (var i = 0; i < str.length; i++)
        if (str[i] >= 'а' && str[i] <= 'я' || str[i] >= 'А' && str[i] <= 'Я')
            letters++;
    p("Letters: " + letters);

    p("URL: " + document.URL);
    var html = "";
    var i = 0;
    for (i = document.URL.length; i >= 0 ; i--)
        if (document.URL[i] == '.')
        {
            for (var j = 1; j < document.URL.length - i; j++)
                html += (document.URL[i + j]);
            break;
        }
    var filename = "";
    for (; i >= 0; i--)
    {
        if (document.URL.charAt[i] == '/')
        {
            for (var j = 1; j < document.URL.length - i; j++)
                if (document.URL[i+j] == '.')
                    break;
                else
                    filename += (document.URL[i + j]);
            break;
        }
    }

    var url = {};
    url.url = document.URL;
    url.name = filename;
    url.extension = html;
    p("Extension: " + url.extension);
    p("File name: " + url.name);
    p("Anchors count: " + document.anchors.length);
    var anchorHTML = document.anchors[0].innerHTML;
    p("First anchor's innerHTML: " + anchorHTML);
    p("First form name: " + document.forms[0].name);

    p("Images count: " + document.images.length);
    p("First image width: " + document.images[0].width);
    var max=document.images[0].width;
    for(var i = 1; i < document.images.length; i++)
        if (max < document.images[i].width)
            max = document.images[i].width;
    p("Maximum image width: " + max);

    var sum = 0;
    for(var i = 0; i < document.images.length; i++)
        sum += document.images[i].height;
    p("Heights summary: " + sum);
    p("Forms count: " + document.forms.length);
    var formsNames = "";
    for(var i = 1; i < document.forms.length; i = i + 2)
    {
        if (i > document.forms.length - 2)
            formsNames += document.forms[i].name;
        else
            formsNames += document.forms[i].name + ", ";
    }
    p("Even forms names: " + formsNames);
    for(var i = 0; i < document.forms.length; i++)
    {
        var numChild = document.forms[i].childElementCount;
        document.forms[i].innerHTML += '<input type="button" value="Показать имя формы" onclick="alert(this.value)"><input type="button" value="Принадлежность" onclick="alert(this.parentElement.id)"><input type="reset" value="Сбросить"></input>'
        document.forms[i].innerHTML += '<input type="button" value="Показать количество полей" onclick="alert(' + numChild + ')">';

    }
}