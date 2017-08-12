function restOfBody(){
    var x = document.getElementById('dropdown_notification')
    var y=document.getElementById('dropdown_message')
    var z=document.getElementById('menu_user')
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    countqna=0;
}


function highlightDisplay(){
    var x=document.getElementsByClassName("highlight_overlay");
    x[0].style.display="";
    var y=document.getElementsByClassName("highlights_container");
    y[0].style.display="";
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    countqna=0;
    var a = document.getElementById('dropdown_notification')
    var b=document.getElementById('dropdown_message')
    var c=document.getElementById('menu_user')
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
}

function highlightHide(){
    var x=document.getElementsByClassName("highlight_overlay");
    x[0].style.display="none";
   var y=document.getElementsByClassName("highlights_container");
    y[0].style.display="none";
}

var countqna=0;

function backToQuestionDisplay(){
     var x=document.getElementsByClassName("question_answer_container1");
    var y=document.getElementsByClassName("question_answer_container2");
    x[0].style.display="";
    y[0].style.display="none";
 }
function questionAnswerDisplay(){
    var a = document.getElementById('dropdown_notification')
    var b=document.getElementById('dropdown_message')
    var c=document.getElementById('menu_user')
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
     var x=document.getElementsByClassName("question_answer_container1");
    var y=document.getElementsByClassName("question_answer_container2");
    if(countqna==0){
    x[0].style.display="";
    y[0].style.display="none";
    countqna=1;
    }
    else{
         x[0].style.display="none";
    y[0].style.display="none";
        countqna=0;
    }
}

function closeQuestionAnswer1(){
    var x=document.getElementsByClassName("question_answer_container1");
    x[0].style.display="none";
}


function displayQuestionAnswer2(){
    var x=document.getElementsByClassName("question_answer_container1");
    x[0].style.display="none";
    var y=document.getElementsByClassName("question_answer_container2");
    y[0].style.display="";
}

function closeQuestionAnswer2(){
     var x=document.getElementsByClassName("question_answer_container2");
    x[0].style.display="none";
}
//var test=document.getElementsByClassName("highlight_overlay");
//var test2=document.getElementsByClassName("highlights_container");
//test[0].onclick=function(e){
//    if(e.target.class!=test2[0].class){
//    var x=document.getElementsByClassName("highlight_overlay");
//    x[0].style.display="none";
//    }else{
//        alert("Click on container");
//    }
//}
//

var count1=0;
var count2=0;

function moveLeft(){
    //document.getElementsByClassName("suggestions_slideshow_card").style.marginLeft=-250px;
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
       var x=document.getElementsByClassName("suggestions_slideshow_card");
     var arrowLeft=document.getElementsByClassName("suggestions_slideshow_arrow_left");
    var arrowRight=document.getElementsByClassName("suggestions_slideshow_arrow_right");
    var len=x.length; 
            if(count1<len-3)
                {
            x[count1].style.display="none";
            arrowLeft[0].style.display="";
            count1++;
                }
        if(count1==len-4){
            arrowRight[0].style.display="none";
        }
            
}

function moveRight(){
    //document.getElementsByClassName("suggestions_slideshow_card").style.marginLeft=-250px; 
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
        var x=document.getElementsByClassName("suggestions_slideshow_card");
    var arrowRight=document.getElementsByClassName("suggestions_slideshow_arrow_right");
    var arrowLeft=document.getElementsByClassName("suggestions_slideshow_arrow_left");
    var len=x.length; 
        if(count1>0){
            count1--;
            x[count1].style.display="";
            arrowRight[0].style.display="";
        }
        if(count1==0){
            arrowLeft[0].style.display="none";
        }
}







function moveLeft2(){
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    //document.getElementsByClassName("suggestions_slideshow_card").style.marginLeft=-250px;
       var x=document.getElementsByClassName("more_by_author_slideshow_card");
     var arrowLeft=document.getElementsByClassName("more_by_author_arrow_left");
    var arrowRight=document.getElementsByClassName("more_by_author_arrow_right");
    var len=x.length; 
            if(count2<len-3)
                {
            x[count2].style.display="none";
            arrowLeft[0].style.display="";
            count2++;
                }
        if(count2==len-4){
            arrowRight[0].style.display="none";
        }
            
}

function moveRight2(){
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    //document.getElementsByClassName("suggestions_slideshow_card").style.marginLeft=-250px; 
        var x=document.getElementsByClassName("more_by_author_slideshow_card");
    var arrowRight=document.getElementsByClassName("more_by_author_arrow_right");
    var arrowLeft=document.getElementsByClassName("more_by_author_arrow_left");
    var len=x.length; 
        if(count2>0){
            count2--;
            x[count2].style.display="";
            arrowRight[0].style.display="";
        }
        if(count2==0){
            arrowLeft[0].style.display="none";
        }
}


function onLoad(){
    var x=document.getElementsByClassName("suggestions_slideshow_card");
    var len1=x.length;
    var y=document.getElementsByClassName("more_by_author_slideshow_card");
    var len2=y.length;
    var arrowLeft1=document.getElementsByClassName("suggestions_slideshow_arrow_left");
    var arrowRight1=document.getElementsByClassName("suggestions_slideshow_arrow_right");
    var arrowLeft2=document.getElementsByClassName("more_by_author_arrow_left");
    var arrowRight2=document.getElementsByClassName("more_by_author_arrow_right");
    if(count1==0)
        arrowLeft1[0].style.display="none";
    if(len1<=4){
        arrowLeft1[0].style.display="none";
        arrowRight1[0].style.display="none";
    }
    if(count2==0)
        arrowLeft2[0].style.display="none";
    if(len2<=4){
        arrowLeft2[0].style.display="none";
        arrowRight2[0].style.display="none";
    }
    
        
}

window.onload=function(){
   onLoad();
};

