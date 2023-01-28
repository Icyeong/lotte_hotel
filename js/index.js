jQuery(document).ready(function ($){

    //HEADER
    var wh = $(window).height();
    console.log(wh);

    $('#slide_down').click(function(){
        $('body, html').animate({
            scrollTop: wh
        },800);
    });


    //SCROLL EVENT
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        var wh = $(window).height();
        if(sct == 0){
            $('header').css({
                backgroundColor: 'rgba(0,0,0,0)',
                filter: 'drop-shadow(0px 0px 0px))',
                color:'white'
            });
            $('.bar').css({
                backgroundColor: 'white'
            });
            $('.logo_change').attr({
                src: "./img/logo_white.svg"
            });
            $('#top_btn').fadeOut(500);
            $('.section_nav_wrap').fadeOut(500);
            
            
        }else if(sct > 0 && sct <= wh*1.5){
            $('header').css({
                backgroundColor: '#F9F7F4',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
                color: '#887767'
            });
            $('.bar').css({
                backgroundColor: '#887767'
            });
            $('.logo_change').attr({
                src: "./img/logo_brown.svg"
            });
            $('#top_btn').fadeIn(500);
            $('.section_nav_wrap').fadeIn(500);
            $('.section_nav').removeClass('selected_nav');
            $('.section_nav_1').addClass('selected_nav');
        }else if(sct > wh*1.5 && sct <= wh*2.5){
            $('.section_nav').removeClass('selected_nav');
            $('.section_nav_2').addClass('selected_nav');

        }else if(sct > wh*2.5 && sct <= wh*3.5){
            $('.section_nav').removeClass('selected_nav');
            $('.section_nav_3').addClass('selected_nav');

        }else if(sct > wh*3.5 && sct <= wh*4.5){
            $('.section_nav').removeClass('selected_nav');
            $('.section_nav_4').addClass('selected_nav');

        }else{
            $('.section_nav').removeClass('selected_nav');
            $('.section_nav_5').addClass('selected_nav');
        }
    });
    

    // Intro bg change
    var i = 0;
        
    $('.slide_btn').click(function(){
        if(i == 0){
            $('.bg_1').fadeOut(1000);
            $('.bg_2').fadeIn(900);
            i++;
        }else if(i == 1){
            $('.bg_2').fadeOut(1000);
            $('.bg_3').fadeIn(900);
            i++;
        }else if(i == 2){
            $('.bg_3').fadeOut(1000);
            $('.bg_4').fadeIn(900);
            i++;
        }else if(i == 3){
            $('.bg_4').fadeOut(1000);
            $('.bg_5').fadeIn(900);
            i++;
        }else if(i == 4){
            $('.bg_5').fadeOut(1000);
            $('.bg_1').fadeIn(900);
            i++;
        }else{
            i = 0;
        }
        
    });

    setInterval(function(){
        $('.slide_btn').trigger('click');
    },3500);


    //TAB MENU
    $('.tab_hover').click(function(){
        $('body').css({
            overflow:'hidden'
        });
        $('.tab_menu_bg').fadeIn(700)
            $('.tab_menu_box').transition({
                left:0
            },500);
            $('.bar').css({
                opacity:0
            });

        $('.tab_menu_wrap').each(function (index) {
            $(this).attr('data-index', index);
        });

        $('.tab_menu_1').each(function (index) {
            $(this).attr('data-index', index);
        }).click(function(){
            var menu = $(this).attr('data-index');

            $('.tab_menu_1[data-index!='+menu+']').removeClass('on');

            $('.tab_menu_1').eq(menu).addClass('on');

            $('.tab_menu_wrap[data-index!='+menu+']').fadeOut(500);

            $('.tab_menu_wrap').eq(menu).fadeIn(600);
            
        });
        
    });


    //Room slide event
    $('.room_imgBox').each(function(index){
        $(this).attr('data-index',index);
    });
    $('.slide_nav').each(function(index){
        $(this).attr('data-index',index);
    });

    var j = 1;
    $('.slider_imgBox').last().prependTo('.slider');
    setInterval(function(){
        $('.room_imgBox').fadeOut(800);
        $('.slide_nav').removeClass('slide_nav_on');
        $('.room_imgBox').eq(j).fadeIn(700);
        $('.slide_nav').eq(j).addClass('slide_nav_on');
        j++;
        if(j >3){
            j=0;
        }
    },3000);




    //Pop up event  

    $('.pop_up_box').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.popUp').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var popUp = $(this).attr('data-index');

        $('body').css({
            overflow:'hidden'
        });

        $('.pop_up_bg').fadeIn(500);

        $('.pop_up_box').eq(popUp).transition({
            top:220,
            opacity:1
        },700);
    });

    $('.close_btn').click(function(){
        $('body').css({
            overflow:'auto'
        });
        $('.pop_up_bg').fadeOut(700);
        $('.pop_up_box').transition({
            top:100+'vh',
            opacity:0
        },700);
        $('.tab_menu_box').transition({
            left:-360
        },600);
        $('.bar').css({
            opacity:1
        });
        $('.tab_menu_wrap').fadeOut(500);
        $('.tab_menu_bg').fadeOut(700);
        $('.tab_menu_1').removeClass('on');
    });

    //TOP BTN EVENT
    $('#top_btn').click(function(){
        $('body,html').animate({
            scrollTop:0
        },1000);
    });

    //SECTION NAV EVENT
    var wh = $(window).height();

    $('.section_nav').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var section = $(this).attr('data-index');

        $('body,html').animate({
            scrollTop:(wh*section)+wh+50
        },800);
    });


    //RESIZE

    $(window).resize(function(){
        wh = $(window).height();
    });

    
});