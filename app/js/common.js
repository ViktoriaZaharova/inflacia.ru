$(document).ready(function($){
    if($('.tab-pane .row').find('.save-funds-col').length > 4){
        $('.btn-toggle').click(function(e){
            e.preventDefault();
            $(this).parents('.tab-pane').find('.save-funds-col').slideDown();
            $(this).fadeOut();
        });
    }
});

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});