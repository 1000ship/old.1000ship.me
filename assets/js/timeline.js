
$(function(){
    $(".timeline-table-container").on("scroll",function(){
        let scroll_left = $(".timeline-table-container").scrollLeft()
        $(".timeline td .language").css("transform", "translate("+scroll_left+"px, 0px)")
    })
    setInterval(timelineAutoScroll, 1000/60);
    var is_timeline_mouse = false;
    var timeline_mouse_x = 0;
    $(".timeline").hover((e)=>is_timeline_mouse = true, (e)=>is_timeline_mouse = false);
    $(".timeline").mousemove( (e)=> timeline_mouse_x=e.pageX );
    function timelineAutoScroll () {
        if( !is_timeline_mouse ) return;
        let scroll_left = $(".timeline-table-container").scrollLeft();
        let pageWidth = $(window).width();
        let bias = Number(timeline_mouse_x-pageWidth/2) / 100;
        $(".timeline-table-container").scrollLeft( scroll_left + bias );
    }
})

