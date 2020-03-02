// $('.workspace').masonry({
//     itemSelector: '.work',
//     columnWidth: '.work-sizer',
//     percentPosition: true
// });

// $('.workspace').masonry({
//     itemSelector: '.work',
//     columnWidth: 160,
//     gutter: 20,
//   });

var works = []
$(function(){
    works = $(".work");
    $(window).trigger("resize")
})

var window_size_state = "";
$(window).resize(function(){
    const SM_SIZE = 576;
    const MD_SIZE = 768;
    const LG_SIZE = 992;
    const CURRENT_SIZE = $(window).width();
    if( CURRENT_SIZE > LG_SIZE )
        window_size_state = "lg";
    else if( CURRENT_SIZE > MD_SIZE )
        window_size_state = "md";
    else if( CURRENT_SIZE > SM_SIZE )
        window_size_state = "sm";
    else
        window_size_state = "xs";
    rearrangeWorkspace( window_size_state );
})

function rearrangeWorkspace ( size_state )
{
    let first_col = $(".workspace .first-column");
    let second_col = $(".workspace .second-column");
    let third_col = $(".workspace .third-column");
    let col_count = 0;
    if ( first_col.children().length ) col_count++;
    if ( second_col.children().length ) col_count++;
    if ( third_col.children().length ) col_count++; 
    let request_count = 0;
    if ( size_state == "lg" ) request_count = 3;
    else if ( size_state == "md" ) request_count = 2;
    else request_count = 1;
    if ( col_count == request_count ) return;

    let targets = [first_col, second_col, third_col];
    targets = targets.slice( 0, request_count );
    for( i = 0; i < works.length; ++ i )
        targets[i%request_count].append( works[i] );
}