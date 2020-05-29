$(document).ready(function () {
    var speed = 6000;
    var myBox1 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '1700px',
            });
            var myBox2 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2040px',
            });
            var myBox3 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2380px',
            });
            var myBox4 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2720px',
            });
            var myBox5 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
              //  marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '3060px',
            });
    var myBox12 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '1700px',
            });
            var myBox22 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2040px',
            });
            var myBox32 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2380px',
            });
            var myBox42 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2720px',
            });
            var myBox52 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
              //  marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '3060px',
            });
    var myBox13 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '1700px',
            });
            var myBox23 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2040px',
            });
            var myBox33 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2380px',
            });
            var myBox43 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2720px',
            });
            var myBox53 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
              //  marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '3060px',
            });
    var myBox14 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '1700px',
            });
            var myBox24 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2040px',
            });
            var myBox34 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2380px',
            });
            var myBox44 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                //marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2720px',
            });
            var myBox54 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
              //  marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '3060px',
            });
    $(myBox1).appendTo('.box1');
    $(myBox2).appendTo('.box1');
    $(myBox3).appendTo('.box1');
    $(myBox4).appendTo('.box1');
    $(myBox5).appendTo('.box1');
    
    $(myBox12).appendTo('.box2');
    $(myBox22).appendTo('.box2');
    $(myBox32).appendTo('.box2');
    $(myBox42).appendTo('.box2');
    $(myBox52).appendTo('.box2');
    
    $(myBox13).appendTo('.box3');
    $(myBox23).appendTo('.box3');
    $(myBox33).appendTo('.box3');
    $(myBox43).appendTo('.box3');
    $(myBox53).appendTo('.box3');
    
    $(myBox14).appendTo('.box4');
    $(myBox24).appendTo('.box4');
    $(myBox34).appendTo('.box4');
    $(myBox44).appendTo('.box4');
    $(myBox54).appendTo('.box4');
    $('.start').click(function () {
        $(this).fadeOut(function() {
            
            /*
            $(myBox).animate({top: '0px'},1000);
            $(myBox).appendTo('.boxes');
            */
            
            $(myBox1).animate({top: '0px'},speed);
            $(myBox2).animate({top: '-300px'},speed + 2000);
            $(myBox3).animate({top: '-600px'},speed + 4000);
            $(myBox4).animate({top: '-900px'},speed + 6000);
            $(myBox5).animate({top: '-1200px'},speed + 8000);
            
            $(myBox12).animate({top: '0px'},speed + 1500);
            $(myBox22).animate({top: '-300px'},speed + 3500);
            $(myBox32).animate({top: '-600px'},speed + 5500);
            $(myBox42).animate({top: '-900px'},speed + 7500);
            $(myBox52).animate({top: '-1200px'},speed + 9500);
            
            $(myBox13).animate({top: '0px'},speed);
            $(myBox23).animate({top: '-300px'},speed + 2000);
            $(myBox33).animate({top: '-600px'},speed + 4000);
            $(myBox43).animate({top: '-900px'},speed + 6000);
            $(myBox53).animate({top: '-1200px'},speed + 8000);
            
            $(myBox14).animate({top: '0px'},speed + 1000);
            $(myBox24).animate({top: '-300px'},speed + 3000);
            $(myBox34).animate({top: '-600px'},speed + 5000);
            $(myBox44).animate({top: '-900px'},speed + 7000);
            $(myBox54).animate({top: '-1200px'},speed + 9000);
            
            $(myBox1).click(function () {
                $(this).stop();
                $(myBox1).css({ top: '3060px'});
                $(myBox1).animate({top: '0px'},speed);
            });
            $(myBox2).click(function () {
                $(this).stop();
                $(myBox2).css({ top: '3060px'});
                $(myBox2).animate({top: '-300px'},speed + 2000);
            });
            $(myBox3).click(function () {
                $(this).stop();
                $(myBox3).css({ top: '3060px'});
                $(myBox3).animate({top: '-600px'},speed + 4000);
            });
            $(myBox4).click(function () {
                $(this).stop();
                $(myBox4).css({ top: '3060px'});
                $(myBox4).animate({top: '-900px'},speed + 6000);
            });
            $(myBox5).click(function () {
                $(this).stop();
                $(myBox5).css({ top: '3060px'});
                $(myBox5).animate({top: '-1200px'},speed + 8000);
            });
            
            $(myBox12).click(function () {
                $(this).stop();
                $(myBox12).css({ top: '3060px'});
                $(myBox12).animate({top: '0px'},speed);
            });
            $(myBox22).click(function () {
                $(this).stop();
                $(myBox22).css({ top: '3060px'});
                $(myBox22).animate({top: '-300px'},speed + 2000);
            });
            $(myBox32).click(function () {
                $(this).stop();
                $(myBox32).css({ top: '3060px'});
                $(myBox32).animate({top: '-600px'},speed + 4000);
            });
            $(myBox42).click(function () {
                $(this).stop();
                $(myBox42).css({ top: '3060px'});
                $(myBox42).animate({top: '-900px'},speed + 6000);
            });
            $(myBox52).click(function () {
                $(this).stop();
                $(myBox52).css({ top: '3060px'});
                $(myBox52).animate({top: '-1200px'},speed + 8000);
            });
            
            $(myBox13).click(function () {
                $(this).stop();
                $(myBox13).css({ top: '3060px'});
                $(myBox13).animate({top: '0px'},speed);
            });
            $(myBox23).click(function () {
                $(this).stop();
                $(myBox23).css({ top: '3060px'});
                $(myBox23).animate({top: '-300px'},speed + 2000);
            });
            $(myBox33).click(function () {
                $(this).stop();
                $(myBox33).css({ top: '3060px'});
                $(myBox33).animate({top: '-600px'},speed + 4000);
            });
            $(myBox43).click(function () {
                $(this).stop();
                $(myBox43).css({ top: '3060px'});
                $(myBox43).animate({top: '-900px'},speed + 6000);
            });
            $(myBox53).click(function () {
                $(this).stop();
                $(myBox53).css({ top: '3060px'});
                $(myBox53).animate({top: '-1200px'},speed + 8000);
            });
            
            $(myBox14).click(function () {
                $(this).stop();
                $(myBox14).css({ top: '3060px'});
                $(myBox14).animate({top: '0px'},speed);
            });
            $(myBox24).click(function () {
                $(this).stop();
                $(myBox24).css({ top: '3060px'});
                $(myBox24).animate({top: '-300px'},speed + 2000);
            });
            $(myBox34).click(function () {
                $(this).stop();
                $(myBox34).css({ top: '3060px'});
                $(myBox34).animate({top: '-600px'},speed + 4000);
            });
            $(myBox44).click(function () {
                $(this).stop();
                $(myBox44).css({ top: '3060px'});
                $(myBox44).animate({top: '-900px'},speed + 6000);
            });
            $(myBox54).click(function () {
                $(this).stop();
                $(myBox54).css({ top: '3060px'});
                $(myBox54).animate({top: '-1200px'},speed + 8000);
            });
                
            
        })
    })
})