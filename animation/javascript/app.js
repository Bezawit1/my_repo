$('#banner').mousemove(function(e){
    var moveX=(e.pageX* -1/2)+300; //300 coordinate of X
    var moveY=(e.pageY* -1/3)+120; //120 coordinate of y
    $('#drone-box').css({
        'transform':'translate3d('+moveX+'px,'+moveY+'px,0)'
    });
})