n 
//  jQuery addClass And removeClass , toggleClass Method

$(function () {
    $('#btn1').click(function () {
        $('#h1').addClass('heading');
    })
})

$(function () {
    $('#btn2').click(function () {
        $('#h1').removeClass('heading');
    })
})

$(function () {
    $('#btn3').click(function () {
        $('#h1').toggleClass('heading');
    })
})

/* ancestor Method*/

/*

 parent()
 parents()
 parentUntil()

*/

//  jQuery Decendent Method

// children()  , find()

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('div').children().css({
    //             backgroundColor:'purple'
    //         })
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('div').find('span').css({
    //             backgroundColor:'purple'
    //         })
    //     })
    // })
}


// Sibling Method in jQuery

/*

siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
PrevUntil()

*/

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('li').siblings().css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').next('div').css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').nextAll().css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').nextUntil('div').css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').prev().css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').prevAll().css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').prevUntil('div').css('background-color' , 'green')
    //     })
    // })
}

// jQuery Filter Method

/*

first()
last()
eq()

*/

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').first().css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('h1').last().css('background-color' , 'green')
    //     })
    // })

    // $(function(){
    //     $('#btn').click(function(){
    //         $('p').eq(5).css('background-color' , 'green')
    //     })
    // })
}