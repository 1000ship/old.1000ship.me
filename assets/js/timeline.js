$(".timeline-table-container").on("scroll",function(){
    let scrollLeft = $(".timeline-table-container").scrollLeft()
    $(".timeline td .language").css("transform", "translate("+scrollLeft+"px, 0px)")
})