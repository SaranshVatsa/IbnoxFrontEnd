function restOfBody(){
    var x=document.getElementById('dropdown_notification')
    var y=document.getElementById('dropdown_message')
    var z=document.getElementById('menu_user')
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";  
}


function publishedOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #f39c12";
    b[0].style.borderBottom="1px solid #ffffff";
    c[0].style.borderBottom="4px solid #ffffff";
    d[0].style.borderBottom="4px solid #ffffff";
    e[0].style.borderBottom="4px solid #ffffff";
    f[0].style.borderBottom="4px solid #ffffff";
    g[0].style.borderBottom="4px solid #ffffff";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="block";
    i[0].style.display="none";
    j[0].style.display="none";
    k[0].style.display="none";
}

function likedOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #ffffff";
    b[0].style.borderBottom="4px solid #f39c12";
    c[0].style.borderBottom="4px solid #ffffff";
    d[0].style.borderBottom="4px solid #ffffff";
    e[0].style.borderBottom="4px solid #ffffff";
    f[0].style.borderBottom="4px solid #ffffff";
    g[0].style.borderBottom="4px solid #ffffff";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="block";
    i[0].style.display="none";
    j[0].style.display="none";
    k[0].style.display="none";
}

function sharedOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #ffffff";
    b[0].style.borderBottom="4px solid #ffffff";
    c[0].style.borderBottom="4px solid #f39c12";
    d[0].style.borderBottom="4px solid #ffffff";
    e[0].style.borderBottom="4px solid #ffffff";
    f[0].style.borderBottom="4px solid #ffffff";
    g[0].style.borderBottom="4px solid #ffffff";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="block";
    i[0].style.display="none";
    j[0].style.display="none";
    k[0].style.display="none";
}

function highlightsOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #ffffff";
    b[0].style.borderBottom="4px solid #ffffff";
    c[0].style.borderBottom="4px solid #ffffff";
    d[0].style.borderBottom="4px solid #f39c12";
    e[0].style.borderBottom="4px solid #ffffff";
    f[0].style.borderBottom="4px solid #ffffff";
    g[0].style.borderBottom="4px solid #ffffff";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="none";
    i[0].style.display="block";
    j[0].style.display="none";
    k[0].style.display="none";
}

function questionsOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #ffffff";
    b[0].style.borderBottom="4px solid #ffffff";
    c[0].style.borderBottom="4px solid #ffffff";
    d[0].style.borderBottom="4px solid #ffffff";
    e[0].style.borderBottom="4px solid #f39c12";
    f[0].style.borderBottom="4px solid #ffffff";
    g[0].style.borderBottom="4px solid #ffffff";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="none";
    i[0].style.display="none";
    j[0].style.display="block";
    k[0].style.display="none";
}

function answersOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #ffffff";
    b[0].style.borderBottom="4px solid #ffffff";
    c[0].style.borderBottom="4px solid #ffffff";
    d[0].style.borderBottom="4px solid #ffffff";
    e[0].style.borderBottom="4px solid #ffffff";
    f[0].style.borderBottom="4px solid #f39c12";
    g[0].style.borderBottom="4px solid #ffffff";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="none";
    i[0].style.display="none";
    j[0].style.display="none";
    k[0].style.display="block";
}

function discussionsOptionClick(){
    var a=document.getElementsByClassName('column_container_options_published');
    var b=document.getElementsByClassName('column_container_options_liked');
    var c=document.getElementsByClassName('column_container_options_shared');
    var d=document.getElementsByClassName('column_container_options_highlights');
    var e=document.getElementsByClassName('column_container_options_questions');
    var f=document.getElementsByClassName('column_container_options_answers');
    var g=document.getElementsByClassName('column_container_options_discussions');
    a[0].style.borderBottom="4px solid #ffffff";
    b[0].style.borderBottom="4px solid #ffffff";
    c[0].style.borderBottom="4px solid #ffffff";
    d[0].style.borderBottom="4px solid #ffffff";
    e[0].style.borderBottom="4px solid #ffffff";
    f[0].style.borderBottom="4px solid #ffffff";
    g[0].style.borderBottom="4px solid #f39c12";
    var h=document.getElementsByClassName('column_right_container_article');
    var i=document.getElementsByClassName('highlights_container');
    var j=document.getElementsByClassName('questions_container');
    var k=document.getElementsByClassName('answers_container');
    h[0].style.display="none";
    i[0].style.display="none";
    j[0].style.display="none";
    k[0].style.display="none";
}