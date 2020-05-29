$(document).ready(function () {
    var speed = 6000;
    var myBox1 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '1700px',
            });
            var myBox2 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2040px',
            });
            var myBox3 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2380px',
            });
            var myBox4 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '2720px',
            });
            var myBox5 = $('<div class="box"></div>').css({
                width: '245px',
                height: '300px',
                marginBottom: '40px',
                backgroundColor: 'green',
                position: 'relative',
                top: '3060px',
            });
    $(myBox1).appendTo('.box1');
    $(myBox2).appendTo('.box1');
    $(myBox3).appendTo('.box1');
    $(myBox4).appendTo('.box1');
    $(myBox5).appendTo('.box1');
    $('.start').click(function () {
        $(this).fadeOut(function() {
            
            /*
            $(myBox).animate({top: '0px'},1000);
            $(myBox).appendTo('.boxes');
            */
            
            $(myBox1).animate({top: '0px'},speed);
            
            $(myBox2).animate({top: '-300px'},speed);
            
            $(myBox3).animate({top: '-600px'},speed);
            
            $(myBox4).animate({top: '-900px'},speed);
            
            $(myBox5).animate({top: '-1200px'},speed);
            
            $(myBox1).click(function () {
                $(this).stop();
                $(myBox1).css({ top: '3060px'});
                $(myBox1).animate({top: '0px'},speed);
            });
            $(myBox2).click(function () {
                $(this).stop();
                $(myBox2).css({ top: '3060px'});
                $(myBox2).animate({top: '-300px'},speed);
            });
            $(myBox3).click(function () {
                $(this).stop();
                $(myBox3).css({ top: '3060px'});
                $(myBox3).animate({top: '-600px'},speed);
            });
            $(myBox4).click(function () {
                $(this).stop();
                $(myBox4).css({ top: '3060px'});
                $(myBox4).animate({top: '-900px'},speed);
            });
            $(myBox5).click(function () {
                $(this).stop();
                $(myBox5).css({ top: '3060px'});
                $(myBox5).animate({top: '-1200px'},speed);
            });
                
            
        })
    })
})