$(document).ready(function () {
    var speed = 5000;
    $('.start').click(function () {
        $(this).fadeOut(function() {
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
            /*
            $(myBox).animate({top: '0px'},1000);
            $(myBox).appendTo('.boxes');
            */
            $(myBox1).appendTo('.box1');
            $(myBox1).animate({top: '0px'},speed);
            $(myBox2).appendTo('.box1');
            $(myBox2).animate({top: '0px'},speed);
            $(myBox3).appendTo('.box1');
            $(myBox3).animate({top: '0px'},speed);
            $(myBox4).appendTo('.box1');
            $(myBox4).animate({top: '0px'},speed);
            $(myBox5).appendTo('.box1');
            $(myBox5).animate({top: '0px'},speed);
            
            $(myBox1).click(function () {
                $(myBox1).css({ top: '3060px'});
                $(myBox1).animate({top: '0px'},speed);
                /*
                var box = document.createElement('div').style({width: '245px',height: '300px',backgroundColor: 'green',position: 'relative',bottom: '-300px',});
                $(box).appendTo('.box1');
                $(box).animate({top: '0px'},speed);
                setTimeout(function () {
                        $(myBox1).appendTo('.box1');
                        $(myBox1).animate({top: '0px'},speed);  
                    },speed)*/
            });
            $(myBox2).click(function () {
                $(myBox2).css({ top: '3060px'});
                $(myBox2).animate({top: '0px'},speed);
            });
            $(myBox3).click(function () {
                $(myBox3).css({ top: '3060px'});
                $(myBox3).animate({top: '0px'},speed);
            });
            $(myBox3).click(function () {
                $(myBox3).css({ top: '3060px'});
                $(myBox3).animate({top: '0px'},speed);
            });
            $(myBox4).click(function () {
                $(myBox4).css({ top: '3060px'});
                $(myBox4).animate({top: '0px'},speed);
            });
            $(myBox5).click(function () {
                $(myBox5).css({ top: '3060px'});
                $(myBox5).animate({top: '0px'},speed);
            });
                
            
        })
    })
})