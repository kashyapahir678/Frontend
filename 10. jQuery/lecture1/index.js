
/* JQuery Syntax */

// $(document).ready(function(){
//     $('#btn').click(function(){
//         $('#heading').hide();
//     })
// })

$(function(){
    $('.hide').click(function(){
        $('.heading').hide()
    })
})

$(function(){
    $('.show').click(function(){
        $('.heading').show()
    })
})

$(function(){
    $('.toggle').click(function(){
        $('.heading').toggle();
    })
})

/* JQuery Style */

$(function(){
    $('.style').click(function(){
        $('.heading').css({
            backgroundColor: "purple",
            color: "white",
        })
    })
})


/* jQuery Fade */

/*

fadeIn
fadeOut
fadeToggle
fadeTo

*/

$(function(){
    $('#fade').click(function(){
        $('#div-1').fadeIn('slow')
        $('#div-2').fadeIn('fast')
        $('#div-3').fadeIn(2000)
        $('#div-4').fadeIn(6000)
        $('#div-5').fadeIn(10000)
    })
})


// $(function(){
//     $('#fade').click(function(){
//         $('#div-1').fadeOut('slow')
//         $('#div-2').fadeOut('fast')
//         $('#div-3').fadeOut(2000)
//         $('#div-4').fadeOut(6000)
//         $('#div-5').fadeOut(10000)
//     })
// })

// $(function(){
//     $('#fade').click(function(){
//         $('#div-1').fadeToggle('slow')
//         $('#div-2').fadeToggle('fast')
//         $('#div-3').fadeToggle(2000)
//         $('#div-4').fadeToggle(6000)
//         $('#div-5').fadeToggle(10000)
//     })
// })

// $(function(){
//     $('#fade').click(function(){
//         $('#div-1').fadeTo('slow' , 0.2)
//         $('#div-2').fadeTo('fast'  , 0.4)
//         $('#div-3').fadeTo(2000 , 0.5)
//         $('#div-4').fadeTo(6000 , 0.6)
//         $('#div-5').fadeTo(10000 , 0.8)
//     })
// })