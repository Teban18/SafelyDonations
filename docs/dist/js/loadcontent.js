

$(document).ready(function()
{
    $.getJSON("json/pages.json", function(json)
    {
        let pages = json.pages;
        for(i in pages)
        {
            loadPages(pages[i]);
        }
    });
    $.getJSON("json/data.json",function(json)
    {
        let text = json.text;
        for(j in text)
        {
            writeText(text[j]);
        }
    });
});