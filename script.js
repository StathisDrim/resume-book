$(function() {
    console.log("Το script.js φορτώθηκε σωστά!");
    var book = $('#book');
    
    // View Cover
    $('#view-cover').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-cover');
    });
    
    // View Back
    $('#view-back').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-back');
    });
    
    // Open/Close Book
    $('#open-book').click(function(){
        if (book.attr('class') != 'open-book') {
            $(this).addClass('cur').siblings().removeClass('cur');
            book.removeClass().addClass('open-book');
        } else {
            $(this).removeClass('cur');
            $('#view-cover').addClass('cur');
            book.removeClass().addClass('view-cover');
        }
    });
    
    // 360° Showcase
    $('#view-rotate').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-rotate');
    });
});
