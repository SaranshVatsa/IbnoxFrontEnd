/*
$(document).ready(function(){
    $(".profile_link").click(function(){
        $(".user_menu").toggle();
        $(".message_dropdown").hide();
        $(".notification_dropdown").hide();
    });
    
    $(".message_icon").click(function(){
        $(".message_dropdown").toggle();
        $(".user_menu").hide();
        $(".notification_dropdown").hide();
    }); 
    
    $(".notification_icon").click(function(){
        $(".notification_dropdown").toggle();
        $(".message_dropdown").hide();
        $(".user_menu").hide();
    });   
    
    $(".rest_of_body").click(function(){
        $(".message_dropdown").hide();
        $(".user_menu").hide();
        $(".notification_dropdown").hide();
    });
});
*/
    
function messageFlip(){
    var x=document.getElementById('message_flip_state1')
    var y=document.getElementById('message_flip_state2')
    x.style.display="none";
    y.style.display="block";
}

function messageFlipBack(){
    var x=document.getElementById('message_flip_state1')
    var y=document.getElementById('message_flip_state2')
    y.style.display="none";
    x.style.display="block";
}

function toggleDivUserMenu() {
    var x = document.getElementById('menu_user')
    var y=document.getElementById('dropdown_message')
    var z=document.getElementById('dropdown_notification')
    y.style.display="none";
    z.style.display="none";
    x.style.display = (x.style.display == "none") ? "block" : "none";
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    countqna=0;
}

function toggleDivMessageDropdown() {
    var x = document.getElementById('dropdown_message')
    var y=document.getElementById('dropdown_notification')
    var z=document.getElementById('menu_user')
    y.style.display="none";
    z.style.display="none";
    x.style.display = (x.style.display == "none") ? "block" : "none";
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    countqna=0;
}

function toggleDivNotificationDropdown() {
    var x = document.getElementById('dropdown_notification')
    var y=document.getElementById('dropdown_message')
    var z=document.getElementById('menu_user')
    y.style.display="none";
    z.style.display="none";
    x.style.display = (x.style.display == "none") ? "block" : "none";
    var qna1=document.getElementsByClassName("question_answer_container1");
    var qna2=document.getElementsByClassName("question_answer_container2");
    qna1[0].style.display="none";
    qna2[0].style.display="none";
    countqna=0;
}


function restOfBody(){
    var x = document.getElementById('dropdown_notification')
    var y=document.getElementById('dropdown_message')
    var z=document.getElementById('menu_user')
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
}
//CODE AFTER THIS HAS BEEN COMMENTED INCASE IT MY COME IN USE LATER. 

/*$(document).ready(function(){
    $(".searchbar").click(function(){
            $(".searchbar").width("600px");
            $(".navbar_buttons").hide();
            $(".message_dropdown").hide();
            $(".user_menu").hide();
    });
});

$(document).ready(function(){
    $('div:not(.searchbar)').click(function(){
        $(".searchbar").width("350px");
        $(".navbar_buttons").show();
    });
});
*/


/*

$(document).ready(function(){
    $(".message_dropdown_header").click(function(){
            $(".message_dropdown_header_searchbar").hide();
            $(".message_dropdown_header_searchbar_onclick").show();
            $(".message_dropdown_header_title").hide();
            $(".searchbar_term_author_onclick").show();
            $(".searchbar_term_author").hide();
    });
});


$(document).ready(function(){
    $(".message_dropdown_body").click(function(){
            $(".message_dropdown_header_searchbar_onclick").hide();
            $(".message_dropdown_header_searchbar").show();
            $(".message_dropdown_header_title").show();
            $(".searchbar_term_author_onclick").hide();
            $(".searchbar_term_author").show();
    });
});

*/